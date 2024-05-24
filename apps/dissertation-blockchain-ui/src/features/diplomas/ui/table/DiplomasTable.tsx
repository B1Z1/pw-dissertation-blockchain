import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useDiplomas } from '../../api/useDiplomas';
import { diplomaColumns } from '../../api/diplomaColumns';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/table';
import { cn } from '@pw-dissertation-blockchain/ui-kit/util';

export type DiplomasTableProps = {
	className?: string;
};

export const DiplomasTable = ({ className }: DiplomasTableProps) => {
	const diplomas = useDiplomas();
	const table = useReactTable<Diploma>({
		data: diplomas,
		columns: diplomaColumns,
		getCoreRowModel: getCoreRowModel()
	});

	return (
		<div className={cn(className, 'rounded-md', 'border')}>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && 'selected'}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={diplomaColumns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};
