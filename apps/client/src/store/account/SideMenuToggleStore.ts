import { createStore } from "zustand/vanilla"
import type {
	SideMenuToggleState,
	SideMenuToggleStore,
} from "@/types/account/store/SideMenuToggleType.ts"

export const defaultState: SideMenuToggleState = {
	sideMenuItems: new Map<string, boolean>(),
}

export const createSideMenuToggleStore = (
	initState: SideMenuToggleState = defaultState,
) => {
	return createStore<SideMenuToggleStore>()((set) => ({
		...initState,
		toggleSideMenuItem: (view: string) => {
			set((state) => {
				state.sideMenuItems.set(view, !state.sideMenuItems.get(view))
				return { sideMenuItems: state.sideMenuItems }
			})
		},
	}))
}
