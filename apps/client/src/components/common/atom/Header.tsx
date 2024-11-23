import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils.ts"

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children?: ReactNode
	innerContainerProps?: HTMLAttributes<HTMLDivElement>
}

// note: 필요에 따라 기본 반응형 코드를 작성할 필요가 있음
const defaultHeaderClassName = "flex w-full justify-center items-center"
const defaultInnerContainerClassName =
	"mx-auto flex h-20 w-full max-w-[1720px] items-center justify-between px-4"

export default function Header({
	children,
	innerContainerProps,
	...props
}: HeaderProps) {
	return (
		<header {...props} className={cn(defaultHeaderClassName, props.className)}>
			<div
				{...innerContainerProps}
				className={cn(
					defaultInnerContainerClassName,
					innerContainerProps?.className,
				)}>
				{children}
			</div>
		</header>
	)
}
