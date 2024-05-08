'use client'

import { Button } from '@/components/ui/button'
import { useNewAccount } from '@/features/accounts/hooks/use-new-account'

const HomePage = () => {
	const { onOpen } = useNewAccount()

	return <Button onClick={onOpen}>Добавить учетную запись</Button>
}

export default HomePage
