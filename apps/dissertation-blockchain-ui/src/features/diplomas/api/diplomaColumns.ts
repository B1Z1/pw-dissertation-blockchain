import { ColumnDef } from '@tanstack/react-table';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

export const diplomaColumns: ColumnDef<Diploma>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'author',
		header: 'Author',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'advisor',
		header: 'Advisor',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'university',
		header: 'University',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'department',
		header: 'Department',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'abstract',
		header: 'Abstract',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'submissionDate',
		header: 'Submission Date',
		filterFn: 'fuzzy'
	},
	{
		accessorKey: 'keywords',
		header: 'Keywords',
		filterFn: 'fuzzy'
	}
];
