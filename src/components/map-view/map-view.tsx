"use client"

import React, { useEffect, useState } from "react"
import { GoogleMap, Marker } from "@react-google-maps/api"
import type { ReactElement } from "react"
import { env } from "@/lib/env"
import { LoadScript } from "@react-google-maps/api"
import type { MapViewProps } from "./map-view.type"
import type { Location } from "@/stores"
import { useLocationStore } from "@/stores"
import { options, style } from "./map-view.util"
import { Loader } from "../loader"

export const MapView = ({ zoom = 50 }: MapViewProps): ReactElement => {
	const [currentLocation, setCurrentLocation] = useState<Location>({
		lat: 0,
		lng: 0
	})

	const { setGuess, actual, guess } = useLocationStore()

	const onClick = (e: google.maps.MapMouseEvent): void => {
		if (!e.latLng) return
		setGuess({
			lat: e.latLng.lat(),
			lng: e.latLng.lng()
		})
	}

	return (
		<LoadScript googleMapsApiKey={env.NEXT_PUBLIC_MAPS_API_KEY} loadingElement={<Loader color="#000000" />}>
			<GoogleMap
				mapContainerStyle={style}
				center={currentLocation}
				zoom={zoom}
				options={options}
				onClick={e => void onClick(e)}
			>
				<Marker position={actual} label="Actual" />
				<Marker position={guess} label="Guess" />
			</GoogleMap>
		</LoadScript>
	)
}