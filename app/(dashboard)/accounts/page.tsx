'use client'

import { useNewAccount } from '@/features/accounts/hooks/use-new-account'

import { Plus } from 'lucide-react'

import { Payment, columns } from './columns'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data: Payment[] = [
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'iskurskiii@gmail.com',
	},
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'ricitir@gmail.com',
	},
	{
		id: '728ed52f',
		amount: 100,
		status: 'pending',
		email: 'westfantrue@gmail.com',
	},
]

const AccountsPage = () => {
	const { onOpen } = useNewAccount()

	return (
		<div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
			<Card className='border-none drop-shadow-sm'>
				<CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
					<CardTitle className='text-xl line-clamp-1'>
						Страница аккаунтов
					</CardTitle>
					<Button size='sm' onClick={onOpen}>
						<Plus className='size-4 mr-2' />
						Добавить новую
					</Button>
				</CardHeader>
				<CardContent>
					<DataTable
						onDelete={() => {}}
						filterKey='email'
						columns={columns}
						data={data}
					/>
				</CardContent>
			</Card>
		</div>
	)
}

export default AccountsPage
