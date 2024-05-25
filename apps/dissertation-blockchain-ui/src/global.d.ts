import { FilterFn } from '@tanstack/react-table';
import { RankingInfo } from '@tanstack/match-sorter-utils';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

declare module '@tanstack/react-table' {
	//add fuzzy filter to the filterFns

	interface FilterFns {
		fuzzy: FilterFn<Diploma>;
	}

	interface FilterMeta {
		itemRank: RankingInfo;
	}
}
