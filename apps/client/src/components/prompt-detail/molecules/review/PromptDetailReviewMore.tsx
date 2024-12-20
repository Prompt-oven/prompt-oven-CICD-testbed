import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@repo/ui/dialog"
import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import type { PromptReviewType } from "@/types/review/reviewType"
import PromptDetailHoverMouse from "../../atoms/PromptDetailHoverMouse"
import PromptDetailReviewModal from "./PromptDetailReviewModal"

interface PromptDetailReviewMoreProps {
	productDetail: PromptDetailInfoType
	productReview: PromptReviewType
}

export default function PromptDetailReviewMore({
	productDetail,
	productReview,
}: PromptDetailReviewMoreProps) {
	return (
		<div className="mx-auto my-5 flex justify-center">
			<Dialog>
				<DialogTrigger>
					<div
						role="button"
						className="rounded-full bg-[#424040] px-4 py-1 text-white hover:bg-[#2e2d2d]">
						View Modal
					</div>
				</DialogTrigger>
				<DialogContent className="h-[600px] min-w-[400px] max-w-[500px] rounded border-none bg-[#252525] lg:h-[700px] lg:min-w-[600px] lg:max-w-[900px]">
					<DialogHeader className="mb-4 ml-4 flex flex-row items-center gap-4 lg:mb-0">
						<DialogTitle className="font-bold text-white">
							<PromptDetailHoverMouse productDetail={productDetail} />
						</DialogTitle>

						<DialogDescription className="!mt-0 text-sm text-[#C1C1C1]">
							<span>All Reviews</span>
						</DialogDescription>
					</DialogHeader>
					<ul className="grid max-h-[550px] grid-cols-1 gap-2 overflow-auto">
						{productReview.content.map((review) => (
							<PromptDetailReviewModal
								key={review.id}
								memberNickname={review.memberNickname}
								memberProfileImage={review.memberProfileImage}
								updatedAt={review.updatedAt}
								content={review.content}
							/>
						))}
					</ul>
				</DialogContent>
			</Dialog>
		</div>
	)
}
