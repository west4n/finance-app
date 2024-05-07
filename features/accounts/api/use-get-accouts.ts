import { useQuery } from '@tanstack/react-query'

import { client } from '@/lib/hono'

export const useGetAccounts = () => {
	const query = useQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const responce = await client.api.accounts.$get()

			if (!responce.ok) {
				throw new Error('Не удалось получить учетные записи')
			}

			const { data } = await responce.json()

			return data
		},
	})

	return query
}
