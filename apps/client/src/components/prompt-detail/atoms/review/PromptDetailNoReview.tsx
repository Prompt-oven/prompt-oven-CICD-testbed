import React from "react"
import PromptDetailSadImoticon from "../PromptDetailSadImoticon"

export default function PromptDetailNoReview() {
	return (
		<div className="item-center mr-4 flex h-[80px] items-center justify-center rounded-md bg-[#1b1b1b] text-center">
			<p className="flex items-center gap-3 text-base">
				<span className="font-bold">리뷰가 없습니다</span>
				<PromptDetailSadImoticon />
			</p>
		</div>
	)
}
