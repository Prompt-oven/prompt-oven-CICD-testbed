export interface S3ResponseType {
	isSuccess: boolean
	imageUrl: string | undefined
}

export interface ProfileModifyType {
	memberUUID: string
	bannerImageUrl?: string | undefined
	avatarImageUrl?: string | undefined
	hashTag?: string | undefined
	bio?: string | undefined
	email?: string | undefined
	nickname: string
}
