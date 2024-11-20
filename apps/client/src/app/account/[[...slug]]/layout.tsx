import React from "react"
import { SideMenuToggleStoreProvider } from "@/provider/account/sideMenuStoreProvider.tsx"

export default function Layout({
	children,
}: {
	children: Readonly<React.ReactNode>
}) {
	return <SideMenuToggleStoreProvider>{children}</SideMenuToggleStoreProvider>
}
