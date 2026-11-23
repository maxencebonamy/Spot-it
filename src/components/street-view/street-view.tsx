"use client"

import React, { useEffect, useState } from "react"
import { GoogleMap, StreetViewPanorama as StreetViewPanoramaComponent, StreetViewService } from "@react-google-maps/api"
import type { ReactElement } from "react"
import { env } from "@/lib/utils/env"
import { LoadScript } from "@react-google-maps/api"
import { useLocationStore } from "@/stores"
import { options, style } from "./street-view.util"
import { Loader } from "../loader"
import { useStreetViewStore } from "@/stores/street-view"
import { randomStreetView } from "@/lib/street-view"
import type { StreetViewPanorama } from "@/lib/utils/maps.type"

export const StreetView = (): ReactElement => {
	const { actual, setActual, guess } = useLocationStore()

	const [panorama, setPanorama] = useState<StreetViewPanorama | null>(null)

	const [enable, setEnable] = useState(false)

	const { streetView, setStreetView } = useStreetViewStore()

	const onLoad = (service: google.maps.StreetViewService | null): void => {
		if (!service) return

		setStreetView(service)
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
		setEnable(false)
		const newLoc = await randomStreetView({
			streetView,
			location: guess,
			radius: 1000
		})
		console.log(newLoc)
		if (newLoc) {
			setActual(newLoc)
			setEnable(true)
		}
	}

	const onPanoLoad = (e: StreetViewPanorama): void => {
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

			<GoogleMap mapContainerStyle={style} center={actual}>
				<StreetViewService onLoad={service => void onLoad(service)} />
				{
					enable ? (
						<StreetViewPanoramaComponent
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