import type { PromptDetailInfoType } from "@/types/prompt-detail/promptDetailType"
import PromptDetailThumbnail from "../atoms/PromptDetailThumbnail"
import PromptDetailInfo from "./PromptDetailInfo"

interface PromptDetailMainProps {
	thumbnailUrl: string
	productUUID: string
	productDetail: PromptDetailInfoType
}

export default function PromptDetailMain({
	thumbnailUrl,
	productUUID,
	productDetail,
}: PromptDetailMainProps) {
	return (
		<div className="rounded-lg">
			<div className="flex flex-col gap-12 lg:!flex-row">
				<PromptDetailThumbnail
					thumbnailUrl={thumbnailUrl}
					productUUID={productUUID}
				/>

				<PromptDetailInfo productDetail={productDetail} />
			</div>
		</div>
	)
}
