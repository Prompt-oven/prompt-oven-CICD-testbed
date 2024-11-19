import type { ComponentProps } from "react"
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils.ts"
import type { MenuItemIconType } from "@/types/account/accountSideMenuType.ts"

interface AccountSideMenuItemProps extends ComponentProps<typeof Link> {
	label: string
	activeRoute: string
	Icon: MenuItemIconType
	suffix?: React.ReactNode
}

function SideMenuItem({
	label,
	Icon,
	activeRoute,
	suffix,
	...props
}: AccountSideMenuItemProps) {
	return (
		<Link
			{...props}
			className={cn(
				"flex h-[60px] items-center justify-between rounded-lg px-5 py-4 transition-colors",
				label.includes(activeRoute)
					? "*:color-[#E2ADFF] *:text-[#E2ADFF]"
					: "hover:bg-white/10",
				props.className,
			)}>
			<div className="flex items-center gap-3">
				<Icon className={cn("h-6 w-6")} />
				<span>{label}</span>
			</div>
			{suffix}
		</Link>
	)
}

export default SideMenuItem
