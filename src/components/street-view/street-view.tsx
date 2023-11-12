"use client"

import React, { useEffect, useState } from "react"
import { GoogleMap, StreetViewPanorama, StreetViewService } from "@react-google-maps/api"
import type { ReactElement } from "react"
import { env } from "@/lib/env"
import { LoadScript } from "@react-google-maps/api"
import { randint } from "@/lib/random"
import { useLocationStore } from "@/stores"
import { options } from "./street-view.util"
import { randomStreetView } from "@/lib/random-street-view"
import { Spinner } from "../spinner"
import { Loader } from "../loader"

const containerStyle = {
	height: "calc(100% + 24px)",
	width: "100%",
	overflow: "hidden"
}

export const StreetView = (): ReactElement => {
	const { actual, setActual, guess, setGuess } = useLocationStore()

	const [panorama, setPanorama] = useState<google.maps.StreetViewPanorama | null>(null)

	const [enable, setEnable] = useState(false)
	const [service, setService] = useState<google.maps.StreetViewService | null>(null)

	// const randomizeLocation = (): void => {
	// 	setLocation({
	// 		...location,
	// 		lat: randint(-90, 90),
	// 		lng: randint(-180, 180)
	// 	})
	// }

	const onLoad = async(service: google.maps.StreetViewService | null): Promise<void> => {
		if (!service) return

		setService(service)
		setEnable(false)
	}

	useEffect(() => {
		const callback = (): void => void update()
		window.addEventListener("keypress", callback)
		return () => {
			window.removeEventListener("keypress", callback)
		}
	})

	const update = async(): Promise<void> => {
		if (!service) return

		setEnable(false)
		const newLoc = await randomStreetView(service, guess, 1_000)
		console.log(newLoc)
		if (newLoc) {
			setActual(newLoc)
			setEnable(true)
		}
	}

	const onPanoLoad = (e: google.maps.StreetViewPanorama): void => {
		setPanorama(e)
	}

	const onPositionChanged = (): void => {
		const pos = panorama?.getPosition()
		if (!pos) return
		if (pos.lat() === actual.lat && pos.lng() === actual.lng) return
		setActual({
			lat: pos.lat(),
			lng: pos.lng()
		})
	}

	return (
		<LoadScript googleMapsApiKey={env.NEXT_PUBLIC_MAPS_API_KEY} loadingElement={<Loader color="#000000" />}>
			<GoogleMap mapContainerStyle={containerStyle} center={actual}>
				<StreetViewService onLoad={service => void onLoad(service)} />
				{
					enable ? (
						<StreetViewPanorama
							options={{ ...options, position: actual }}
							onLoad={e => onPanoLoad(e)}
							onPositionChanged={onPositionChanged}
						/>
					) : (
						<Loader color="#000000" />
					)
				}
			</GoogleMap>

		</LoadScript>
	)
}