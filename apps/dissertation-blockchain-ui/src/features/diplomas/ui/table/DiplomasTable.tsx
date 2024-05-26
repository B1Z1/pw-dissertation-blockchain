import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';
import { diplomasColumns } from './columns/diplomasColumns';
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
import { DiplomasTableStyled } from './DiplomasTable.styled';

export type DiplomasTableProps = {
	diplomas: Diploma[];
	className?: string;
};

export const DiplomasTable = ({ className, diplomas }: DiplomasTableProps) => {
	const [globalFilter, setGlobalFilter] = useState('');
	const table = useReactTable<Diploma>({
		data: diplomas,
		columns: diplomasColumns,
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

			<DiplomasTableStyled className="relative flex-1 min-h-0 rounded-md border">
				<Table className="table-fixed">
					<TableHeader className="sticky top-0 bg-background">
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
										<TableCell key={cell.id}
										           className="truncate">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={diplomasColumns.length}
								           className="h-full text-center">
									Nie ma takiej pracy dyplomowej
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</DiplomasTableStyled>
		</div>
	);
};
