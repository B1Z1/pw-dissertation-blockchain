import { useFetchQuery } from '../../../shared/util/fetch-query/useFetchQuery';
import { Diploma, DiplomaConverter, DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';
import { diplomasQueryKeys } from './diplomasQueryKeys';

export const useDiplomas = (): Diploma[] => {
	const { data, isLoading } = useFetchQuery<DiplomaDTO[]>(
		diplomasQueryKeys.diplomas,
		'/diplomas'
	);

	if (isLoading || !data) {
		return [];
	}

	return DiplomaConverter.fromDiplomaDTOsToDiplomas(data);
};
