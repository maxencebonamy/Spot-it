import type { Location, StreetViewService } from "@/lib/utils/maps.type"

export type RandomStreetViewProps = {
    streetView: StreetViewService | null
    location: Location,
    radius: number
}