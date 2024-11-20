"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import type { ReactNode } from "react"

interface AuthSessionProviderProps {
	children: ReactNode
	session?: Session
}

// todo : 현재 코드는 브라우저에 세션 정보가 나오므로 필요한 정보만 컨텍스트에 노출하게 수정해야함.
export function AuthSessionProvider({
	children,
	session,
}: AuthSessionProviderProps) {
	return <SessionProvider session={session}>{children}</SessionProvider>
}
