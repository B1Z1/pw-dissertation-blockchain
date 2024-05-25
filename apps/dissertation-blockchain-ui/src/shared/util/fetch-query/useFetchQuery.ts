import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

const KNOWN_ADDRESSES = [
	'http://localhost:3001',
	'http://localhost:3002',
	'http://localhost:3003'
];

export const useFetchQuery = <T>(
	queryKey: string[],
	url: string,
	queryParams: Omit<UseQueryOptions<T>, 'queryKey'> = {}
): UseQueryResult<T> => {
	return useQuery<T>({
		...queryParams,
		queryKey,
		queryFn: async () => {
			for (const address of KNOWN_ADDRESSES) {
				try {
					const response = await axios.get<T>(`${address}${url}`);

					if (response.status === 200) {
						return response.data;
					}
				} catch (error) {
					console.log(`Failed to fetch data from ${address}`);
				}
			}

			throw new Error('Failed to fetch data');
		},
	});
};
