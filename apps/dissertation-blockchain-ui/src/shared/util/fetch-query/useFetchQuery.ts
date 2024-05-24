import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

export const useFetchQuery = <T>(
	queryKey: string[],
	url: string,
	queryParams: Omit<UseQueryOptions<T>, 'queryKey'> = {}
): UseQueryResult<T> => {
	return useQuery<T>({
		...queryParams,
		queryKey,
		queryFn: async () => {
			const response = await fetch(`http://localhost:3001${url}`);

			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			const data: T = await response.json();

			return data;
		},
	});
};
