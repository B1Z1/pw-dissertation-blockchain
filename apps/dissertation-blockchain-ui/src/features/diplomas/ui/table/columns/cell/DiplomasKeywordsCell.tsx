import { Badge } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/badge';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/tooltip';

export type DiplomasKeywordsCellProps = {
	keywords: string[];
};

export const DiplomasKeywordsCell = ({ keywords }: DiplomasKeywordsCellProps) => {
	if (keywords.length === 0) {
		return null;
	}

	const firstKeyword = keywords[0];

	if (keywords.length === 1) {
		return (
			<div className="flex">
				<Badge className="inline-block truncate"
				       variant="outline">
					{firstKeyword}
				</Badge>
			</div>
		);
	}

	return (
		<TooltipProvider delayDuration={0}>
			<div className="flex">
				<Badge variant="outline"
				       className="flex-0 inline-block mr-1 truncate">
					{firstKeyword}
				</Badge>

				<Tooltip>
					<TooltipTrigger>
						<Badge variant="outline">
							{`+${keywords.length - 1}`}
						</Badge>
					</TooltipTrigger>

					<TooltipContent className="flex flex-col gap-1">
						{keywords.slice(1).map((keyword, index) => {
							return (
								<Badge key={index}
								       variant="secondary">
									{keyword}
								</Badge>
							);
						})}
					</TooltipContent>
				</Tooltip>
			</div>
		</TooltipProvider>
	);
};
