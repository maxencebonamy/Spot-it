export type Location = google.maps.LatLngLiteral

export type LocationState = {
    actual: Location
    guess: Location
    setActual: (location: Location) => void
    setGuess: (location: Location) => void
}