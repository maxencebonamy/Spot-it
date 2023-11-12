import type { ReactElement } from "react"
import { Spinner } from "../spinner"
import type { LoaderProps } from "./loader.type"

export const Loader = ({ color }: LoaderProps): ReactElement => {
	return (
		<div className="w-full h-full overflow-hidden flex items-center justify-center">
			<Spinner color={color} />
		</div>
	)
}