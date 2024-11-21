"use client"

import { useEffect, useState } from "react"
import { ProfileFilterSearchInput } from "../atoms/filter/ProfileFilterSearchInput"
import { ProfileFilterSection } from "../atoms/filter/ProfileFilterSection"
import { ProfileFilterCategory } from "../atoms/filter/ProfileFilterCategory"
import { ProfileFilterEnable } from "../atoms/filter/ProfileFilterEnable"
import { ProfileFilterPrice } from "../atoms/filter/ProfileFilterPrice"
import ProfileSidebarButtonGroup from "../molecules/ProfileSidebarButtonGroup"

export default function ProfileFilterSidebar() {
	const [sidebarPosition, setSidebarPosition] = useState(0)
	const [filters, setFilters] = useState({
		search: "",
		topCategoryUuid: "",
		subCategoryUuid: "",
		enable: [] as string[],
		minPrice: "",
		maxPrice: "",
	})

	const handleClear = () => {
		setFilters({
			search: "",
			topCategoryUuid: "",
			subCategoryUuid: "",
			enable: [],
			minPrice: "",
			maxPrice: "",
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			setSidebarPosition(scrollY * 0.001)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div
			className="sticky hidden h-full rounded-lg bg-opacity-20 bg-gradient-to-r from-[#3F1C24] to-[#262038] p-4 sm:max-w-[200px] lg:block"
			style={{
				top: Math.max(sidebarPosition, 100),
			}}>
			<h2 className="mb-4 font-medium text-white">FILTER BY</h2>

			<ProfileFilterSearchInput
				value={filters.search}
				name="searchBar"
				onChange={(value) => setFilters({ ...filters, search: value })}
			/>

			<ProfileFilterSection title="Category">
				<ProfileFilterCategory
					value={filters.topCategoryUuid}
					name="topCategoryUuid"
					onChange={(value) =>
						setFilters({ ...filters, topCategoryUuid: value })
					}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Status">
				<ProfileFilterEnable
					values={filters.enable}
					name="enable"
					onChange={(values) => setFilters({ ...filters, enable: values })}
				/>
			</ProfileFilterSection>

			<ProfileFilterSection title="Price">
				<ProfileFilterPrice
					minName="minPrice"
					maxName="maxPrice"
					minValue={filters.minPrice}
					maxValue={filters.maxPrice}
					onMinChange={(value) => setFilters({ ...filters, minPrice: value })}
					onMaxChange={(value) => setFilters({ ...filters, maxPrice: value })}
				/>
			</ProfileFilterSection>

			<ProfileSidebarButtonGroup onClear={handleClear} />
		</div>
	)
}

/* <ProfileFilterSection title="Filter By Color">
				<ProfileFilterColor
					selected={filters.colors}
					onChange={(values) => setFilters({ ...filters, colors: values })}
				/>
			</ProfileFilterSection> */
