import { MapView } from "@/components/map-view/map-view"
import { StreetView } from "@/components/street-view/street-view"
import type { ReactElement } from "react"

export default function Home(): ReactElement {
	return (
		<main className="w-screen h-screen overflow-hidden">
			<StreetView />
			<MapView zoom={5} />
		</main>
	)
}