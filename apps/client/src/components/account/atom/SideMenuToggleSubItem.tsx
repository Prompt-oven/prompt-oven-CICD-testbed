import type { ComponentProps } from "react"
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils.ts"

interface SideMenuToggleItemProps extends ComponentProps<typeof Link> {
	label: string
	view: string
	activeRoute: string
	suffix?: React.ReactNode
}

function SideMenuItem({
	label,
	activeRoute,
	suffix,
	view,
	...props
}: SideMenuToggleItemProps) {
	return (
		<Link
			{...props}
			className={cn(
				"box-border flex h-[60px] items-center justify-between rounded-lg py-4 text-[#8F8E90] transition-colors hover:bg-white/10",
				view.includes(activeRoute) &&
					"border-[1px] border-[#E2ADFF] bg-[#7C2FA5] *:text-white hover:bg-[#7C2FA5]",
				props.className,
			)}>
			<div className="flex items-center gap-3">
				<div className="h-6 w-6 bg-transparent" />
				<span>{label}</span>
			</div>
			{suffix}
		</Link>
	)
}

export default SideMenuItem
