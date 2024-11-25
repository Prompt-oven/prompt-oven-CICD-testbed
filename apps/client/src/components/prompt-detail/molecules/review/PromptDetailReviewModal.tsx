import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar"
import { ReviewDateFormatted } from "@/lib/utils"
import PromptDetailReviewModalLine from "../../atoms/PromptDetailReviewModalLine"

interface PromptDetailReviewModalProps {
	memberNickname: string
	memberProfileImage: string | undefined
	updatedAt: string
	content: string
}

export default function PromptDetailReviewModal({
	memberNickname,
	memberProfileImage,
	updatedAt,
	content,
}: PromptDetailReviewModalProps) {
	const formDate = ReviewDateFormatted(updatedAt)

	return (
		<li className="rounded-md bg-[#1b1b1b] text-white">
			<div className="min-h-[100px]">
				<Link
					href={`/profile/${memberNickname}`}
					className="ml-3 mt-1 flex items-center gap-4 lg:ml-6 lg:mt-2">
					<Avatar className="h-4 w-4 lg:h-6 lg:w-6">
						<AvatarImage src={memberProfileImage} alt={memberNickname} />
						<AvatarFallback>AU</AvatarFallback>
					</Avatar>
					<p className="mt-1 text-sm font-bold lg:text-lg">{memberNickname}</p>
					<p className="mx-3 mt-1 text-xs text-[#848898] lg:mx-6">{formDate}</p>
				</Link>
				<PromptDetailReviewModalLine content={content} />
			</div>
		</li>
	)
}
