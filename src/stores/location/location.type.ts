import type { Location } from "@/lib/utils/maps.type"

export type LocationState = {
    actual: Location
    guess: Location
    setActual: (location: Location) => void
    setGuess: (location: Location) => void
}