import { create } from "zustand"
import type { StreetViewState } from "./street-view.type"
import type { StreetViewService } from "@/lib/utils/maps.type"

export const useStreetViewStore = create<StreetViewState>()(set => ({
	streetView: null,
	setStreetView: (streetView: StreetViewService) => set(() => ({ streetView }))
}))