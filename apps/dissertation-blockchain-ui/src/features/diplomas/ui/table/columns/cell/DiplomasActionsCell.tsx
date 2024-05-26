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

export type DiplomasActionsCellProps = {
	diploma: Diploma;
}

export const DiplomasActionsCell = ({ diploma }: DiplomasActionsCellProps) => {
	const submissionDate = new Date(diploma.getSubmissionDate());
	const formattedSubmissionDate = submissionDate.toLocaleDateString();

	return (
		<div className="flex justify-end">
			<Dialog>
				<DialogTrigger>
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

						<h3 className="mb-4">
							{diploma.getTitle()}
						</h3>

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

						<div className="flex gap-1">
							{diploma.getKeywords().map((keyword, index) => (
								<Badge key={index}
								       variant="outline">
									{keyword}
								</Badge>
							))}
						</div>
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
