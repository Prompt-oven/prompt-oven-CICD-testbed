import type { ComponentPropsWithoutRef } from "react"
import {
	Avatar as ShadcnAvatar,
	AvatarFallback,
	AvatarImage,
} from "@repo/ui/avatar"
import { User } from "@repo/ui/lucide"
import { cn } from "@/lib/utils"

interface AvatarProps extends ComponentPropsWithoutRef<typeof ShadcnAvatar> {
	size?: number
	src?: string
	alt?: string
}

export default function Avatar({
	size = 50,
	src,
	alt,
	className,
	...props
}: AvatarProps) {
	return (
		<ShadcnAvatar
			{...props}
			className={cn(
				"box-border inline-flex items-center justify-center rounded-full",
				"border border-[#424242] bg-transparent",
				className,
			)}
			style={{ width: `${size / 16}rem`, height: `${size / 16}rem` }}>
			{src ? (
				<AvatarImage
					src={src}
					alt={alt || "User avatar"}
					className="object-cover"
				/>
			) : null}
			<AvatarFallback className="bg-transparent">
				<User
					className="text-[#969696]"
					style={{ width: `${size * 0.6}px`, height: `${size * 0.6}px` }}
				/>
			</AvatarFallback>
		</ShadcnAvatar>
	)
}
