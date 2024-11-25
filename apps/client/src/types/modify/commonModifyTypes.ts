export interface CommonModifyType {
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
