import { colors } from "@/lib/utils/colors"
import type { CSSProperties } from "react"

export const options: google.maps.MapOptions = {
	clickableIcons: false,
	disableDefaultUI: true,
	disableDoubleClickZoom: true,
	draggingCursor: "crosshair",
	draggableCursor: "crosshair",
	backgroundColor: "#020817",
	styles: [
		{ elementType: "labels.text.stroke", stylers: [{ color: colors.TRANSPARENT }] },
		{ elementType: "labels.text.fill", stylers: [{ color: colors.BACKGROUND }] },
		{
			featureType: "administrative.locality",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.BORDER }]
		},
		{
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.TRANSPARENT }]
		},
		{
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [{ color: colors.TRANSPARENT }]
		},
		{
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.TRANSPARENT }]
		},
		{
			featureType: "road",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.BORDER }]
		},
		{
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.BORDER }]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [{ color: colors.PRIMARY }]
		},
		{
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [{ color: colors.TEXT }]
		},
		{
			featureType: "water",
			elementType: "labels.text.stroke",
			stylers: [{ color: colors.BORDER }]
		}
	]
}

export const style: CSSProperties = {
	height: "calc(100% + 24px)",
	width: "100%",
	overflow: "hidden"
}