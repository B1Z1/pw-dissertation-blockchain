import { ColumnDef } from '@tanstack/react-table';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import { DiplomasHeaderCell } from './header-cell/DiplomasHeaderCell';

export const diplomaColumns: ColumnDef<Diploma>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'author',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'advisor',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'university',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'department',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'abstract',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'submissionDate',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'keywords',
		header: ({ column }) => <DiplomasHeaderCell column={column}/>,
		filterFn: 'fuzzy'
	}
];
