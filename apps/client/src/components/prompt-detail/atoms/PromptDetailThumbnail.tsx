import React from "react"
import Image from "next/image"

interface PromptDetailThumbnailProps {
	thumbnailUrl: string
	productUUID: string
}

export default function PromptDetailThumbnail({
	thumbnailUrl,
	productUUID,
}: PromptDetailThumbnailProps) {
	return (
		<div className="relative h-[600px] min-w-[380px] overflow-hidden rounded-lg sm:h-[800px] sm:min-w-[600px]">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
			<Image
				sizes="(max-width: 500px) 100vw, 145px"
				src={thumbnailUrl}
				alt={productUUID}
				fill
				className="rounded-lg"
				priority
			/>
		</div>
	)
}
