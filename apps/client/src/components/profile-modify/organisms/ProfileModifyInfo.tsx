"use client"

import { useState } from "react"
import { Input } from "@repo/ui/input"
import { Button } from "@repo/ui/button"
import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileModifyAvatar from "../molecules/ProfileModifyAvatar"
import ProfileModifyBanner from "../molecules/ProfileModifyBanner"
import ProfileModifyInfoLeft from "../molecules/ProfileModifyInfoLeft"
import ProfileModifyInfoRight from "../molecules/ProfileModifyInfoRight"

interface MemberDataProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileModifyInfo({ memberData }: MemberDataProps) {
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

	return (
		<div className="mb-20">
			<div className="h-[350px] xl:h-[400px]">
				<ProfileModifyBanner memberBanner={memberData.bannerImageUrl} />
				<div className="relative -top-[6.5rem] z-[5] mx-10 mt-10 flex h-24 items-center justify-between gap-4 md:h-40 xl:-top-[7.5rem] xl:h-44">
					<ProfileModifyAvatar memberAvatar={memberData.avatarImageUrl} />

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

			<div className="mx-10 flex flex-col gap-8">
				<div className="flex flex-col gap-1 text-white">
					<p className="text-xl font-semibold">#해시태그</p>
					<div className="flex items-center gap-5">
						<Input
							className="flex h-[40px] items-center rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4"
							value={hashTag}
							onChange={(e) => handleInputChange("hashTag", e.target.value)}
							placeholder="해시태그를 입력해주세요... (기본적으로 앞에 #이 붙습니다)"
						/>
						{/* <Button className="bg-[#1a2642] hover:bg-[#10192e]">Apply</Button> */}
						<Button
							className="bg-[#fc5113] font-semibold hover:bg-[#a55335]"
							onClick={() => handleReset("hashTag")}>
							초기화
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-1 text-white">
					<p className="text-xl font-semibold">@닉네임</p>
					<div className="flex items-center gap-5">
						<Input
							className="flex h-[40px] items-center rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4"
							value={nickname}
							onChange={(e) => handleInputChange("nickname", e.target.value)}
							placeholder="닉네임을 입력해주세요... (기본적으로 앞에 @이 붙습니다)"
						/>
						{/* <Button className="bg-[#1a2642] hover:bg-[#10192e]">Apply</Button> */}
						<Button
							className="bg-[#fc5113] font-semibold hover:bg-[#a55335]"
							onClick={() => handleReset("nickname")}>
							초기화
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-1 text-white">
					<p className="text-xl font-semibold">이메일</p>
					<div className="flex items-center gap-5">
						<Input
							className="flex h-[40px] items-center rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4"
							value={email}
							onChange={(e) => handleInputChange("email", e.target.value)}
							placeholder="이메일을 입력해주세요..."
						/>
						{/* <Button className="bg-[#1a2642] hover:bg-[#10192e]">Apply</Button> */}
						<Button
							className="bg-[#fc5113] font-semibold hover:bg-[#a55335]"
							onClick={() => handleReset("email")}>
							초기화
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-1 text-white">
					<p className="text-xl font-semibold">자기소개</p>
					<div className="flex items-center gap-5">
						<textarea
							className="min-h-[80px] w-full rounded-lg border border-white/20 bg-gradient-to-r from-[#3F1C24] to-[#262038] px-4 pt-2"
							value={bio}
							onChange={(e) => handleInputChange("bio", e.target.value)}
							placeholder="자기소개를 입력해주세요..."
						/>
						{/* <Button className="bg-[#1a2642] hover:bg-[#10192e]">Apply</Button> */}
						<Button
							className="bg-[#e96637] font-semibold hover:bg-[#a55335]"
							onClick={() => handleReset("bio")}>
							초기화
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
