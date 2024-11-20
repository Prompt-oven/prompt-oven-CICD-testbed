"use client"

import Link from "next/link"
import { Button } from "@repo/ui/button"
import { uploadProfileImage } from "@/action/profile/s3ProfileData"
import { useProfileModify } from "@/hooks/profile-modify/useProfileModify"
import type { ProfileModifyType } from "@/types/profile/profileModifyTypes"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileModifyAvatar from "../molecules/ProfileModifyAvatar"
import ProfileModifyBanner from "../molecules/ProfileModifyBanner"
import ProfileModifyInfoLeft from "../molecules/ProfileModifyInfoLeft"
import ProfileModifyInfoRight from "../molecules/ProfileModifyInfoRight"
import ProfileModifyInput from "../molecules/ProfileModifyInput"
import ProfileModifyTextarea from "../molecules/ProfileModifyTextarea"

interface MemberDataProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileModifyInfo({ memberData }: MemberDataProps) {
	const {
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
	} = useProfileModify(memberData)

	const handleForm = async (formData: FormData) => {
		const uploadBanner = formData.get("bannerImageUrl") as string | undefined
		const auplaodAvatar = formData.get("avatarImageUrl") as string | undefined

		if (
			uploadBanner !== undefined &&
			uploadBanner !== memberData.bannerImageUrl
		) {
			if (uploadBanner !== memberData.bannerImageUrl) {
				const result = await uploadProfileImage(uploadBanner)
				if (result.isSuccess) {
					formData.set("bannerImageUrl", result.imageUrl as string)
				} else {
					// eslint-disable-next-line no-alert -- Comments to notify you of failed image upload
					alert("이미지 업로드에 실패하였습니다.")
					return
				}
			}
		}

		if (
			auplaodAvatar !== undefined &&
			auplaodAvatar !== memberData.avatarImageUrl
		) {
			if (auplaodAvatar !== memberData.avatarImageUrl) {
				const result = await uploadProfileImage(auplaodAvatar)
				if (result.isSuccess) {
					formData.set("avatarImageUrl", result.imageUrl as string)
				} else {
					// eslint-disable-next-line no-alert -- Comments to notify you of failed image upload
					alert("이미지 업로드에 실패하였습니다.")
					return
				}
			}
		}

		const payload: ProfileModifyType = {
			memberUUID: "test",
			bannerImageUrl: formData.get("bannerImageUrl") as string | undefined,
			avatarImageUrl: formData.get("avatarImageUrl") as string | undefined,
			hashTag: formData.get("hashTag") as string,
			bio: formData.get("bio") as string,
			email: formData.get("email") as string,
			nickname: formData.get("nickname") as string,
		}
		// eslint-disable-next-line no-console -- This is a server-side only log
		console.log(payload)
	}

	return (
		<div className="mb-20">
			<form action={handleForm}>
				<div className="h-[350px] xl:h-[400px]">
					<ProfileModifyBanner
						memberBanner={banner}
						handleFileChange={handleBannerChange}
						handleReset={handleReset}
					/>
					<div className="relative -top-[6.5rem] z-[5] mx-10 mt-10 flex h-24 items-center justify-between gap-4 md:h-40 xl:-top-[7.5rem] xl:h-44">
						<ProfileModifyAvatar
							memberAvatar={avatar}
							handleFileChange={handleAvatarChange}
							handleReset={handleReset}
						/>

						<div className="mt-[90px] flex h-[175px] flex-grow justify-between gap-2 rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-4 md:mt-0 md:h-[90%] md:items-center md:p-8">
							<ProfileModifyInfoLeft
								hashTag={hashTag}
								nickname={nickname}
								email={email}
								joined={memberData.joined}
							/>
							<ProfileModifyInfoRight
								bio={bio}
								following={memberData.following}
								follower={memberData.follower}
								viewer={memberData.viewer}
								sales={memberData.sales}
							/>
						</div>
					</div>
				</div>

				<div className="mx-auto mb-8 flex w-[90%] flex-col gap-8 sm:flex-row">
					<div className="flex flex-col justify-between gap-8 sm:w-[50%]">
						<ProfileModifyInput
							title="#해시태그"
							inputName="hashTag"
							inputValue={hashTag}
							handleValue="hashTag"
							placeholder="해시태그를 입력해주세요... (기본적으로 앞에 #이 붙습니다.)"
							handleInputChange={handleInputChange}
							handleReset={handleReset}
						/>

						<ProfileModifyInput
							title="@닉네임"
							inputName="nickname"
							inputValue={nickname}
							handleValue="nickname"
							placeholder="닉네임을 입력해주세요... (기본적으로 앞에 @이 붙습니다.)"
							handleInputChange={handleInputChange}
							handleReset={handleReset}
						/>

						<ProfileModifyInput
							title="이메일"
							inputName="email"
							inputValue={email}
							handleValue="email"
							placeholder="이메일을 입력해주세요...."
							handleInputChange={handleInputChange}
							handleReset={handleReset}
						/>
					</div>

					<ProfileModifyTextarea
						title="자기소개"
						inputName="bio"
						inputValue={bio}
						handleValue="bio"
						placeholder="자기소개를 입력해주세요...."
						handleInputChange={handleInputChange}
						handleReset={handleReset}
					/>
				</div>

				<div className="mx-auto flex w-[90%] justify-end py-12">
					<Link
						href="/profile/1"
						className="px-10py-6 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-[#FFCCDF] to-[#FFB6C1] px-10 py-6 text-sm font-medium text-white shadow transition-colors hover:from-[#FFB6C1] hover:to-[#FF69B4] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
						<span className="font-semibold text-gray-500">취소</span>
					</Link>

					<Button
						type="submit"
						className="ml-4 bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] px-10 py-6 hover:from-[#A213D6] hover:to-[#0094D8]">
						<span className="font-semibold">수정</span>
					</Button>
				</div>
			</form>
		</div>
	)
}
