import { FilterFn } from '@tanstack/react-table';
import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';
import { rankItem } from '@tanstack/match-sorter-utils';

export const fuzzyFilter: FilterFn<Diploma> = (row, columnId, value, addMeta) => {
	const itemRank = rankItem(row.getValue(columnId), value);

	addMeta({
		itemRank,
	});

	return itemRank.passed;
};
