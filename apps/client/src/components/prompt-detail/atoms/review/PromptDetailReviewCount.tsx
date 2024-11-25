import React from "react"

interface PromptDetailReviewCountProps {
	reviewCount: number
}

export default function PromptDetailReviewCount({
	reviewCount,
}: PromptDetailReviewCountProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<p className="text-2xl font-semibold xs:!text-4xl">Prompt reviews</p>
			<p className="mx-6 text-balance xs:!text-base">
				<span>reviews : {reviewCount}</span>
			</p>
		</div>
	)
}
