"use client"

import type { HTMLAttributes } from "react"
import React from "react"
import { ChevronUp } from "@repo/ui/lucide"
import { cn } from "@/lib/utils.ts"
import type {
	MenuItemIconType,
	SubMenuItemType,
} from "@/types/account/accountSideMenuType.ts"
import SideMenuToggleSubItem from "@/components/account/atom/SideMenuToggleSubItem.tsx"
import { routes } from "@/config/account/route.ts"
import { useSideMenuToggleStore } from "@/provider/account/sideMenuStoreProvider.tsx"

interface SideMenuToggleItemProps extends HTMLAttributes<HTMLDivElement> {
	label: string
	view: string
	activeRoute: string
	subMenu: SubMenuItemType[]
	Icon: MenuItemIconType
}

function SideMenuToggleItem({
	subMenu,
	activeRoute,
	label,
	view,
	Icon,
	...props
}: SideMenuToggleItemProps) {
	const { sideMenuItems, toggleSideMenuItem } = useSideMenuToggleStore(
		(state) => state,
	)
	const isOpen = Boolean(sideMenuItems.get(view))
	return (
		<div className="flex flex-col">
			<div
				role="button"
				tabIndex={0}
				onClick={() => toggleSideMenuItem(view)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						toggleSideMenuItem(view)
					}
				}}
				{...props}
				className={cn(
					"flex h-[60px] items-center justify-between rounded-lg px-5 py-4 transition-colors hover:bg-white/10",
					view.includes(activeRoute) && "*:color-[#E2ADFF] *:text-[#E2ADFF]",
					props.className,
				)}>
				<div className="flex items-center gap-3">
					<Icon className="mr-2 h-5 w-5" />
					<span>{label}</span>
				</div>
				<ChevronUp
					className={cn(
						"h-5 w-5 text-white transition-transform",
						isOpen ? "rotate-0" : "rotate-180",
					)}
				/>
			</div>
			<div
				className={cn(
					"transition-max-height flex flex-col gap-2 pl-4 duration-500 ease-in",
					isOpen ? "max-h-screen" : "max-h-0 overflow-hidden",
				)}>
				{subMenu.map((item, index) => (
					<SideMenuToggleSubItem
						// eslint-disable-next-line react/no-array-index-key -- This is a static array
						key={index}
						href={{
							pathname: routes.account_product,
							query: { view: item.view },
						}}
						view={item.view}
						label={item.label}
						activeRoute={activeRoute}
					/>
				))}
			</div>
		</div>
	)
}

export default SideMenuToggleItem
