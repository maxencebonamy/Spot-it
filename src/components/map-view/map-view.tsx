"use client"

import React, { useEffect, useState } from "react"
import { GoogleMap, Marker } from "@react-google-maps/api"
import type { ReactElement } from "react"
import { env } from "@/lib/utils/env"
import { LoadScript } from "@react-google-maps/api"
import type { MapViewProps } from "./map-view.type"
import type { Location } from "@/lib/utils/maps.type"
import { useLocationStore } from "@/stores"
import { options, style } from "./map-view.util"
import { Loader } from "../loader"

export const MapView = ({ zoom = 50 }: MapViewProps): ReactElement => {
	const [currentLocation] = useState<Location>({
		lat: 47.47229178394306,
		lng: -0.5460850812616046
	})

	const { setGuess, actual, guess, setActual } = useLocationStore()

	useEffect(() => {
		setGuess(currentLocation)
		setActual(currentLocation)
	}, [currentLocation])

	const onClick = (e: google.maps.MapMouseEvent): void => {
		if (!e.latLng) return
		setGuess({
			lat: e.latLng.lat(),
			lng: e.latLng.lng()
		})
	}

	return (
		<div className="absolute w-96 h-56 right-2 bottom-2 z-10">
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
		</div>
	)
}