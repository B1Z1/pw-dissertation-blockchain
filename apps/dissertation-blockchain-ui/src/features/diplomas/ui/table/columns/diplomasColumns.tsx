import { ColumnDef } from '@tanstack/react-table';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import { DiplomasHeaderCell } from './header-cell/DiplomasHeaderCell';
import { DiplomasKeywordsCell } from './cell/DiplomasKeywordsCell';
import { DiplomasCell } from './cell/DiplomasCell';
import { DiplomasActionsCell } from './cell/DiplomasActionsCell';

export const diplomasColumns: ColumnDef<Diploma>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Tytuł"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'author',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Autor"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'advisor',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Opiekun"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'university',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Uniwersytet"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'department',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Wydział"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'abstract',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Streszczenie"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const text = cell.getValue<string>();

			return (
				<DiplomasCell text={text}/>
			);
		}
	},
	{
		accessorKey: 'submissionDate',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Data oddania"
				                    isSortable={true}
				                    column={column}/>
			);
		},
		cell: ({ cell }) => {
			const date = cell.getValue<string>();
			const formattedDate = new Date(date);

			return (
				<DiplomasCell text={formattedDate.toLocaleDateString()}/>
			);
		}
	},
	{
		accessorKey: 'keywords',
		header: ({ column }) => {
			return (
				<DiplomasHeaderCell text="Słowa kluczowe"
				                    column={column}/>
			);
		},
		filterFn: 'fuzzy',
		cell: ({ cell }) => {
			const keywords = cell.getValue<string[]>();

			return (
				<DiplomasKeywordsCell keywords={keywords}/>
			);
		}
	},
	{
		accessorKey: 'actionButtons',
		header: undefined,
		cell: ({ cell }) => {
			const diploma = cell.row.original;

			return (
				<DiplomasActionsCell diploma={diploma}/>
			);
		}
	}
];
