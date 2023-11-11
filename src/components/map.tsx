"use client"

import React from "react"
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api"
import type { ReactElement } from "react"
import { env } from "@/lib/env"
import { LoadScript } from "@react-google-maps/api"

export const Map = (): ReactElement => {
	const containerStyle = {
		height: "100%",
		width: "100%",
		overflow: "hidden"
	}

	const position = {
		lat: 54.364442,
		lng: 18.643173
	}

	const streetViewProperties = {
		position,
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

	return (
		<LoadScript googleMapsApiKey={env.NEXT_PUBLIC_MAPS_API_KEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={position}>
				<StreetViewPanorama options={streetViewProperties} />
			</GoogleMap>
		</LoadScript>
	)
}