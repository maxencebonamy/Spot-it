import clsx from "clsx"
import type { ReactElement } from "react"
import type { SpinnerProps } from "./spinner.type"

export const Spinner = ({ color = "#ffffff" }: SpinnerProps): ReactElement => {
	return (
		<div
			className={clsx(
				"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent",
				"align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
				`color-[${color}]`
			)}
			role="status"
		>
			<span
				className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>
                Loading...
			</span>
		</div>
	)
}