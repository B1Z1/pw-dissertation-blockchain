import { DefaultError, useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import type { UseMutationOptions } from '@tanstack/react-query/src/types';

const KNOWN_ADDRESSES = [
	'http://localhost:3001',
	'http://localhost:3002',
	'http://localhost:3003'
];

export const useFetchMutation = <T>(
	url: string,
	queryParams: Omit<UseMutationOptions<unknown, DefaultError, T>, 'mutationFn'> = {}
): UseMutationResult<unknown, DefaultError, T> => {
	return useMutation<unknown, DefaultError, T>({
		...queryParams,
		mutationFn: async (data) => {
			for (const address of KNOWN_ADDRESSES) {
				try {
					const response = await axios.post(`${address}${url}`, data);

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
