import Image from 'next/image'

import { Loader2 } from 'lucide-react'

import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignIn } from '@clerk/nextjs'

const Page = () => {
	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='h-full lg:flex flex-col items-center justify-center px-4'>
				<div className='text-center space-y-4 pt-16'>
					<h1 className='font-bold text-3xl text-[#2E2A47]'>С возвращением!</h1>
					<p className='text-base text-[#7E8CA0]'>
						Войдите или создайте аккаунт, чтобы войти в свою рабочую панель!
					</p>
				</div>

				<div className='flex items-center justify-center mt-8'>
					<ClerkLoaded>
						<SignIn path='/sign-in' />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className='animate-spin text-muted-foreground' />
					</ClerkLoading>
				</div>
			</div>

			<div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
				<Image src='/logo.svg' width={400} height={106} alt='logo' />
			</div>
		</div>
	)
}

export default Page