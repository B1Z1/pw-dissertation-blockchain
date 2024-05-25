import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import { Column } from '@tanstack/react-table';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';
import { ArrowUpDown } from 'lucide-react';

export type DiplomasHeaderCellProps = {
	column: Column<Diploma>;
};

export const DiplomasHeaderCell = ({ column }: DiplomasHeaderCellProps) => {
	return (
		<Button
			variant="ghost"
			className="-ml-3 capitalize"
			onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
		>
			{column.id}
			<ArrowUpDown className="ml-2 h-4 w-4"/>
		</Button>
	);
};
