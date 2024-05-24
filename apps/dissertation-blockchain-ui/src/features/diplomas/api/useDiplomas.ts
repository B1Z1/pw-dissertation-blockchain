import { useFetchQuery } from '../../../shared/util/fetch-query/useFetchQuery';
import { Diploma, DiplomaConverter, DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';

export const useDiplomas = (): Diploma[] => {
	const { data, isLoading } = useFetchQuery<DiplomaDTO[]>(
		['diplomas'],
		'/diplomas'
	);

	if (isLoading || !data) {
		return [];
	}

	return DiplomaConverter.fromDiplomaDTOsToDiplomas(data);
};
