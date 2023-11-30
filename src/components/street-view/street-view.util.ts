import type { CSSProperties } from "react"

export const options: google.maps.StreetViewPanoramaOptions = {
	visible: true,
	disableDefaultUI: true,
	showRoadLabels: false,
	enableCloseButton: false,
	imageDateControl: false,
	panControl: false,
	disableDoubleClickZoom: true,
	linksControl: false,
	motionTracking: false
}

export const style: CSSProperties = {
	height: "calc(100vh + 24px)",
	width: "100vw",
	overflow: "hidden"
}