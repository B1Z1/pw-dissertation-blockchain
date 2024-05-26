import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/tooltip';

export type DiplomasCellProps = {
	text: string;
}

export const DiplomasCell = ({ text }: DiplomasCellProps) => {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger className="block w-full text-left cursor-text">
					<span className="block w-full truncate">{text}</span>
				</TooltipTrigger>

				<TooltipContent>
					{text}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
