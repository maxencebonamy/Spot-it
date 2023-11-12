import type { Location } from "@/stores"

type StreetViewService = google.maps.StreetViewService

export const randomStreetView = async(service: StreetViewService, location: Location, radius: number): Promise<Location | null> => {
	let output: Location | null = null

	await service.getPanorama({
		location,
		radius
	}, (data, _) => {
		if (data) {
			const newLoc = data.location?.latLng
			if (newLoc) output = {
				lat: newLoc.lat(),
				lng: newLoc.lng()
			}
		}
	})

	return output
}