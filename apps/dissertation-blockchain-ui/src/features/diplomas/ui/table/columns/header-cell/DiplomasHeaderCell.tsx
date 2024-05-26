import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import { Column } from '@tanstack/react-table';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';
import { ArrowUpDown } from 'lucide-react';

export type DiplomasHeaderCellProps = {
	text: string;
	column: Column<Diploma>;
	isSortable?: boolean;
};

export const DiplomasHeaderCell = ({ text, column, isSortable = false }: DiplomasHeaderCellProps) => {
	return (
		<Button
			variant="ghost"
			className="-ml-3 capitalize"
			onClick={() => isSortable && column.toggleSorting(column.getIsSorted() === 'asc')}
		>
			{text}
			{isSortable && <ArrowUpDown className="ml-2 h-4 w-4"/>}
		</Button>
	);
};
