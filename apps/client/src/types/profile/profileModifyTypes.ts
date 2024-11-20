export interface S3ResponseType {
	isSuccess: boolean
	responseImageUrl: string | undefined
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
