import { Map } from "@/components/map"
import type { ReactElement } from "react"

export default function Home(): ReactElement {
	return (
		<main className="w-screen h-screen overflow-hidden">
			<Map />
		</main>
	)
}