import { create } from "zustand"
import type { LocationState, Location } from "./location.type"

export const useLocationStore = create<LocationState>()(set => ({
	actual: {
		lat: 0,
		lng: 0
	},
	guess: {
		lat: 0,
		lng: 0
	},
	setActual: (location: Location) => {
		console.log(`setActual: ${location.lat} / ${location.lng}`)
		set(() => ({ actual: location }))
	},
	setGuess: (location: Location) => {
		console.log(`setGuess: ${location.lat} / ${location.lng}`)
		set(() => ({ guess: location }))
	}
}))