import { useState } from "react"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"

export const useProfileModify = (memberData: ProfileMemberInfoType) => {
	const [banner, setBanner] = useState<string | undefined>(
		memberData.bannerImageUrl ? memberData.bannerImageUrl : "",
	)
	const [avatar, setAvatar] = useState<string | undefined>(
		memberData.avatarImageUrl ? memberData.avatarImageUrl : "",
	)

	const [hashTag, setHashTag] = useState<string | undefined>(
		memberData.hashTag ? memberData.hashTag : "",
	)
	const [nickname, setNickname] = useState<string>(memberData.nickname)
	const [email, setEmail] = useState<string | undefined>(
		memberData.email ? memberData.email : "",
	)
	const [bio, setBio] = useState<string | undefined>(
		memberData.bio ? memberData.bio : "",
	)

	const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
	const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			if (file.size > MAX_FILE_SIZE) {
				// eslint-disable-next-line no-alert -- omments to inform image capacity overrun
				alert("파일 크기가 5MB를 초과합니다. 다른 파일을 선택해 주세요.")
				event.target.value = ""
				return
			}

			const reader = new FileReader()
			reader.onloadend = () => {
				setBanner(reader.result as string) // 파일을 URL로 변환하여 상태 업데이트
			}
			reader.readAsDataURL(file) // 파일을 Data URL로 읽기
		}
	}

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			if (file.size > MAX_FILE_SIZE) {
				// eslint-disable-next-line no-alert -- omments to inform image capacity overrun
				alert("파일 크기가 5MB를 초과합니다. 다른 파일을 선택해 주세요.")
				event.target.value = ""
				return
			}

			const reader = new FileReader()
			reader.onloadend = () => {
				setAvatar(reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleInputChange = (field: string, value: string) => {
		switch (field) {
			case "hashTag":
				setHashTag(value)
				break
			case "nickname":
				setNickname(value)
				break
			case "email":
				setEmail(value)
				break
			case "bio":
				setBio(value)
				break
			default:
				break
		}
	}

	const handleReset = (field: string) => {
		switch (field) {
			case "banner":
				setBanner(memberData.bannerImageUrl ? memberData.bannerImageUrl : "")
				break
			case "avatar":
				setAvatar(memberData.avatarImageUrl ? memberData.avatarImageUrl : "")
				break
			case "hashTag":
				setHashTag(memberData.hashTag ? memberData.hashTag : "")
				break
			case "nickname":
				setNickname(memberData.nickname)
				break
			case "email":
				setEmail(memberData.email ? memberData.email : "")
				break
			case "bio":
				setBio(memberData.bio ? memberData.bio : "")
				break
			default:
				break
		}
	}

	return {
		banner,
		avatar,
		hashTag,
		nickname,
		email,
		bio,
		handleBannerChange,
		handleAvatarChange,
		handleInputChange,
		handleReset,
	}
}
