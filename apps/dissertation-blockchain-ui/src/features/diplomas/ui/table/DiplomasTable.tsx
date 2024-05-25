import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';
import { diplomaColumns } from './diplomaColumns';
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
import { DiplomasTableToolbar } from './toolbar/DiplomasTableToolbar';
import { useState } from 'react';
import { fuzzyFilter } from './diplomasTableFuzzyFilter';

export type DiplomasTableProps = {
	diplomas: Diploma[];
	className?: string;
};

export const DiplomasTable = ({ className, diplomas }: DiplomasTableProps) => {
	const [globalFilter, setGlobalFilter] = useState('');
	const table = useReactTable<Diploma>({
		data: diplomas,
		columns: diplomaColumns,
		filterFns: {
			fuzzy: fuzzyFilter
		},
		state: {
			globalFilter
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: 'fuzzy'
	});

	return (
		<div className={cn(className, 'space-y-4', 'flex', 'flex-col')}>
			<DiplomasTableToolbar onInputFilterChange={setGlobalFilter}/>

			<div className="flex-1 rounded-md border">
				<Table className="table-fixed">
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
								<TableCell colSpan={diplomaColumns.length} className="h-full text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
