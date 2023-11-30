import type { Location } from "@/lib/utils/maps.type"

import type { RandomStreetViewProps } from "./street-view.type"

export const randomStreetView = async({ streetView, location, radius }: RandomStreetViewProps): Promise<Location | null> => {
	if (!streetView) return null

	let newLoc = null

	await streetView.getPanorama({ location, radius }, (data, _) => {
		if (data) {
			newLoc = data.location?.latLng
			if (newLoc) return {
				lat: newLoc.lat(),
				lng: newLoc.lng()
			}
		}
	})

	return newLoc
}