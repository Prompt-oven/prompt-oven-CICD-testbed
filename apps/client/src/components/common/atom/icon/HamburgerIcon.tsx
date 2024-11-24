import type { SVGProps } from "react"

interface HamburgerIconProps extends SVGProps<SVGSVGElement> {
	pathProps?: SVGProps<SVGPathElement>
}

function HamburgerIcon({ pathProps, ...props }: HamburgerIconProps) {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.1781 14.9004C13.2945 14.9004 12.5781 15.6167 12.5781 16.5004C12.5781 17.384 13.2945 18.1004 14.1781 18.1004H33.8237C34.7074 18.1004 35.4237 17.384 35.4237 16.5004C35.4237 15.6167 34.7074 14.9004 33.8237 14.9004H14.1781ZM12.5781 24.0004C12.5781 23.1167 13.2945 22.4004 14.1781 22.4004H33.8237C34.7074 22.4004 35.4237 23.1167 35.4237 24.0004C35.4237 24.884 34.7074 25.6004 33.8237 25.6004H14.1781C13.2945 25.6004 12.5781 24.884 12.5781 24.0004ZM12.5781 31.5004C12.5781 30.6167 13.2945 29.9004 14.1781 29.9004H33.8237C34.7074 29.9004 35.4237 30.6167 35.4237 31.5004C35.4237 32.384 34.7074 33.1004 33.8237 33.1004H14.1781C13.2945 33.1004 12.5781 32.384 12.5781 31.5004Z"
				fill="white"
				{...pathProps}
			/>
		</svg>
	)
}

export default HamburgerIcon
