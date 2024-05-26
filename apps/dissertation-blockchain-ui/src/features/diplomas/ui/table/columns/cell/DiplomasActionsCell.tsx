import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/dialog';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';
import { Badge } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/badge';
import { Separator } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/separator';
import { Input } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/input';
import { fileToSha256 } from '../../../../../../shared/util/file-to-sha/fileToSha256';
import { Label } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/label';
import { toast } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/use-toast';

export type DiplomasActionsCellProps = {
	diploma: Diploma;
}

export const DiplomasActionsCell = ({ diploma }: DiplomasActionsCellProps) => {
	const submissionDate = new Date(diploma.getSubmissionDateTime());
	const formattedSubmissionDate = submissionDate.toLocaleDateString();

	const onChange = async (event: any) => {
		const file = event.target.files[0];
		const fileHash = await fileToSha256(file);
		const description = fileHash === diploma.getFileHash()
			? 'Praca dyplomowa jest poprawna'
			: 'Praca dyplomowa jest niepoprawna';

		toast({
			title: 'Walidacja pracy dyplomowej',
			description: description,
			duration: 5000
		});
	};

	return (
		<div className="flex justify-end">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline"
					        size="sm">
						Pokaż szczegóły
					</Button>
				</DialogTrigger>

				<DialogContent className="max-w-xl">
					<DialogHeader>
						<DialogTitle>
							Szczegóły pracy dyplomowej
						</DialogTitle>
						<DialogDescription>
							W danej sekcji znajdziesz szczegóły dotyczące pracy dyplomowej.
						</DialogDescription>
					</DialogHeader>

					<div className="flex flex-col">
						<p className="text-muted-foreground text-xs">
							{formattedSubmissionDate}
						</p>

						<p className="text-muted-foreground text-xs">
							Student: <span className="font-bold">{diploma.getAuthor()}</span>
						</p>

						<p className="text-muted-foreground text-xs">
							Opiekun: <span className="font-bold">{diploma.getAdvisor()}</span>
						</p>

						<h3 className="mb-2">
							{diploma.getTitle()}
						</h3>

						<Separator className="mb-2"/>

						<p className="mb-8 text-muted-foreground text-pretty">
							{diploma.getAbstract()}
						</p>

						<p className="mb-2 text-muted-foreground text-xs">
							<span className="mr-2 font-bold">
								{diploma.getUniversity()}
							</span>
							<span>
								Wydział {diploma.getDepartment()}
							</span>
						</p>

						<div className="flex gap-1 mb-4">
							{diploma.getKeywords().map((keyword, index) => (
								<Badge key={index}
								       variant="outline">
									{keyword}
								</Badge>
							))}
						</div>

						<Label>
							<span className="inline-block mb-2">
								Walidacja pracy dyplomowej
							</span>

							<Input type="file"
							       className="w-[240px]"
							       accept="application/pdf"
							       onChange={onChange}/>
						</Label>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Zamknij
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};
