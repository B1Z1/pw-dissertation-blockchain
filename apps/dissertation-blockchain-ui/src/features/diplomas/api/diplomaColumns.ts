import { ColumnDef } from '@tanstack/react-table';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

export const diplomaColumns: ColumnDef<Diploma>[] = [
	{
		accessorKey: 'title',
		header: 'Title',
	},
	{
		accessorKey: 'author',
		header: 'Author',
	},
	{
		accessorKey: 'advisor',
		header: 'Advisor',
	},
	{
		accessorKey: 'university',
		header: 'University',
	},
	{
		accessorKey: 'department',
		header: 'Department',
	},
	{
		accessorKey: 'abstract',
		header: 'Abstract',
	},
	{
		accessorKey: 'submissionDate',
		header: 'Submission Date',
	},
	{
		accessorKey: 'keywords',
		header: 'Keywords',
	}
];
