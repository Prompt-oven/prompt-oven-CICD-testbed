"use client"

import { createContext, type ReactNode, useContext, useRef } from "react"
import { useStore } from "zustand"
import { type SideMenuToggleStore } from "@/types/account/store/SideMenuToggleType.ts"
import { createSideMenuToggleStore } from "@/store/account/SideMenuToggleStore.ts"

export type SideMenuToggleStoreApi = ReturnType<
	typeof createSideMenuToggleStore
>

export const SideMenuToggleStoreContext =
	createContext<SideMenuToggleStoreApi | null>(null)

export interface SideMenuToggleStoreProviderProps {
	children: ReactNode
}

export function SideMenuToggleStoreProvider({
	children,
}: SideMenuToggleStoreProviderProps) {
	const storeRef = useRef<SideMenuToggleStoreApi>()
	if (!storeRef.current) {
		storeRef.current = createSideMenuToggleStore()
	}
	return (
		<SideMenuToggleStoreContext.Provider value={storeRef.current}>
			{children}
		</SideMenuToggleStoreContext.Provider>
	)
}

export const useSideMenuToggleStore = <T,>(
	selector: (store: SideMenuToggleStore) => T,
): T => {
	const sideMenuToggleStoreContext = useContext(SideMenuToggleStoreContext)

	if (!sideMenuToggleStoreContext) {
		throw new Error(
			`useSideMenuToggleStore must be used within SideMenuToggleStoreProvider`,
		)
	}

	return useStore(sideMenuToggleStoreContext, selector)
}
