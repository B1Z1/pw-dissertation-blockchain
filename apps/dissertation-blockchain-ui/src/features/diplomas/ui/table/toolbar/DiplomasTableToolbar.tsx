import { Input } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/input';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/sheet';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { diplomasAddFormSchema } from './diplomasAddFormSchema';
import { DiplomasTableToolbarAddForm } from './DiplomasTableToolbarAddForm';
import { useState } from 'react';
import { useAddDiploma } from '../../../api/useAddDiploma';
import { DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';
import { fileToSha256 } from '../../../../../shared/util/file-to-sha/fileToSha256';

export type DiplomasTableToolbarProps = {
	onInputFilterChange: (value: string) => void;
};

export const DiplomasTableToolbar = ({ onInputFilterChange }: DiplomasTableToolbarProps) => {
	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const { addDiploma } = useAddDiploma();
	const form = useForm<z.infer<typeof diplomasAddFormSchema>>({
		resolver: zodResolver(diplomasAddFormSchema),
		defaultValues: {
			title: '',
			author: '',
			advisor: '',
			university: '',
			department: '',
			abstract: '',
			submissionDateTime: new Date(),
			keywords: ''
		}
	});

	const onSubmit = async (values: z.infer<typeof diplomasAddFormSchema>) => {
		const fileHash = await fileToSha256(values.file);
		const diplomaDTO: DiplomaDTO = {
			title: values.title,
			author: values.author,
			advisor: values.advisor,
			university: values.university,
			department: values.department,
			abstract: values.abstract,
			submissionDateTime: values.submissionDateTime.getTime(),
			keywords: values.keywords.split(' '),
			fileHash: fileHash
		};

		await addDiploma(diplomaDTO);

		setIsSheetOpen(false);
	};

	return (
		<div className="flex items-center justify-between">
			<div>
				<Input
					type="search"
					placeholder="Wyszukaj pracę..."
					onChange={(event) => onInputFilterChange(event.target.value)}
					className="h-8 w-[150px] lg:w-[250px]"
				/>
			</div>

			<div>
				<Sheet open={isSheetOpen}
				       onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild>
						<Button>
							Dodaj pracę
						</Button>
					</SheetTrigger>

					<SheetContent className="flex flex-col gap-4">
						<SheetHeader>
							<SheetTitle>
								Dodaj pracę
							</SheetTitle>

							<SheetDescription>
								Wypełnij formularz, aby dodać nową pracę
							</SheetDescription>
						</SheetHeader>

						<DiplomasTableToolbarAddForm form={form}
						                             className="flex-1 overflow-auto"
						                             onSubmit={onSubmit}/>

						<SheetFooter>
							<SheetClose asChild>
								<Button onClick={form.handleSubmit(onSubmit)}
								        type="submit">
									Dodaj pracę
								</Button>
							</SheetClose>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};
