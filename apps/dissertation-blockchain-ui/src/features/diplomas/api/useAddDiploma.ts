import { useFetchMutation } from '../../../shared/util/fetch-query/useFetchMutation';
import { DiplomaDTO } from '@pw-dissertation-blockchain/features/diplomas';
import { useQueryClient } from '@tanstack/react-query';
import { diplomasQueryKeys } from './diplomasQueryKeys';

export const useAddDiploma = () => {
	const queryClient = useQueryClient();
	const mutation = useFetchMutation<DiplomaDTO>('/add-diploma');

	const addDiploma = async (diploma: DiplomaDTO) => {
		await mutation.mutateAsync(diploma);
		await queryClient.refetchQueries({ queryKey: diplomasQueryKeys.diplomas });
	};

	return { addDiploma };
};
