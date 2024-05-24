import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

const KNOWN_ADDRESSES = [
	'http://localhost:3001',
	'http://localhost:3002',
	'http://localhost:3003'
];

const api = axios.create({
	baseURL: KNOWN_ADDRESSES[0],
	timeout: 10000
});

api.interceptors.response.use(null, async (error) => {
	const originalRequest = error.config;

	for (let i = 1; i < KNOWN_ADDRESSES.length; i++) {
		try {
			originalRequest.baseURL = KNOWN_ADDRESSES[i];
			return await axios(originalRequest);
		} catch (err) {
			continue;
		}
	}

	return Promise.reject(error);
});

export const useFetchQuery = <T>(
	queryKey: string[],
	url: string,
	queryParams: Omit<UseQueryOptions<T>, 'queryKey'> = {}
): UseQueryResult<T> => {
	return useQuery<T>({
		...queryParams,
		queryKey,
		queryFn: async () => {
			const response = await api.get(url);

			if (response.status !== 200) {
				throw new Error('Failed to fetch data');
			}

			return response.data;
		},
	});
};
