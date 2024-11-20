"use client"

import React, { useState } from "react"
import { Button } from "@repo/ui/button"
import ImageCarousel from "@/components/main/molecule/ImageCarousel.tsx"

interface PromptImageCarouselProps {
	images: {
		id?: string
		src: string
		alt: string
		title: string
		creator: string
		mainDesc?: string
		subDesc?: string
	}[]
}

function PromptImageCarousel({ images }: PromptImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const changeCallbackFnHandler = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<div className="container flex w-full items-center justify-center gap-[100px] py-40">
			<ImageCarousel
				images={images}
				changeCallbackFn={changeCallbackFnHandler}
			/>

			{/* todo - 이미지 카로셀과 연관된 데이터가 필요하므로 ImageCarousel 컴포넌트와 같이 구성된 새로운 컴포넌트 또는 해당 컴포넌트로 옮길 필요가 있음 */}
			<div className="relative max-w-[724px]">
				<h1 className="mb-6 font-sora text-[55px] font-semibold leading-[64px] text-white">
					{images[currentIndex].mainDesc}
				</h1>

				<p className="mb-8 font-sora text-[19px] leading-[28px] text-[#969696]">
					{images[currentIndex].subDesc}
				</p>

				<div className="flex gap-4">
					<Button className="h-[50px] w-[152px] bg-gradient-to-r from-[#A913F9] to-[#3F5EFB] font-sora text-[15px] font-semibold">
						ADD CART
					</Button>
					<Button
						variant="outline"
						className="h-[50px] w-[118px] border-[#424242] bg-[#111111] font-sora text-[15px] font-semibold text-white">
						Share
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PromptImageCarousel
