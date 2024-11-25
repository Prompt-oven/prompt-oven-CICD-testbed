export interface ProfileMemberInfoType {
	memberUUID: string
	bannerImageUrl?: string | undefined
	avatarImageUrl?: string | undefined
	hashTag?: string | undefined
	bio?: string | undefined
	email?: string | undefined
	nickname: string
	joined: string
	following: number
	follower: number
	viewer: number
	sales: number
	isViewStatus: boolean //필터에 status 부분 보여줄지 안보여줄지 toggle할 예정
}

export interface ProfileListCardType {
	productUUID: string
	thumbnailUrl: string
	productName: string
	llmId: number
	productStar: number
	productPrice: number
	productRegistDate: string
}
