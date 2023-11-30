import type { StreetViewService } from "@/lib/utils/maps.type"

export type StreetViewState = {
    streetView: StreetViewService | null
    setStreetView: (streetView: StreetViewService) => void
}