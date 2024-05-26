import { Input } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/input';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';

export type DiplomasTableToolbarProps = {
	onInputFilterChange: (value: string) => void;
};

export const DiplomasTableToolbar = ({ onInputFilterChange }: DiplomasTableToolbarProps) => {
	return (
		<div className="flex items-center justify-between">
			<Input
				type="search"
				placeholder="Wyszukaj pracę..."
				onChange={(event) => onInputFilterChange(event.target.value)}
				className="h-8 w-[150px] lg:w-[250px]"
			/>

			<Button>
				Dodaj pracę
			</Button>
		</div>
	);
};
