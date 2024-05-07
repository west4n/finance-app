'use client'

import { useUser } from '@clerk/nextjs'

export const WelcomeMsg = () => {
	const { user, isLoaded } = useUser()

	return (
		<div className='space-y-2 mb-4'>
			<h2 className='text-2xl lg:text-4xl text-white font-medium'>
				С возвращением{isLoaded ? ', ' : ''}
				{user?.firstName} 👋🏻
			</h2>
			<p className='text-sm lg:text-base text-[#89B6FD]'>
				Это ваш финансовый отчёт
			</p>
		</div>
	)
}
