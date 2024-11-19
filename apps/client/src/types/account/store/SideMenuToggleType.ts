export interface SideMenuToggleState {
	sideMenuItems: Map<string, boolean>;
}

export interface SideMenuToggleActions {
	toggleSideMenuItem: (view: string) => void;
}
export interface SideMenuToggleStore extends SideMenuToggleState, SideMenuToggleActions {}