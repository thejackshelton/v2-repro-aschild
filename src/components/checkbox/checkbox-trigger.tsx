import { $, type PropsOf, Slot, component$, useContext } from "@qwik.dev/core";
import { withAsChild } from "../as-child/as-child";
import { Render } from "../render/render";
import { checkboxContextId } from "./checkbox-context";
type PublicCheckboxControlProps = PropsOf<"button">;

/** Interactive trigger component that handles checkbox toggling */
export const CheckboxTriggerBase = component$(
	(props: PublicCheckboxControlProps) => {
		const context = useContext(checkboxContextId);
		const triggerId = `${context.localId}-trigger`;
		const handleClick$ = $(() => {
			if (context.isCheckedSig.value === "mixed") {
				context.isCheckedSig.value = true;
			} else {
				context.isCheckedSig.value = !context.isCheckedSig.value;
			}
		});

		// const handleKeyDownSync$ = sync$((e: KeyboardEvent) => {
		// 	if (e.key === "Enter") {
		// 		e.preventDefault();
		// 	}
		// });

		return (
			<Render
				id={triggerId}
				ref={context.triggerRef}
				type="button"
				role="checkbox"
				fallback="button"
				aria-checked={context.isCheckedSig.value}
				aria-invalid={context.isErrorSig.value}
				disabled={context.isDisabledSig.value}
				// Indicates whether the checkbox trigger is disabled
				data-disabled={context.isDisabledSig.value ? "" : undefined}
				onClick$={[handleClick$, props.onClick$]}
				data-qds-checkbox-trigger
				{...props}
			>
				<Slot />
			</Render>
		);
	},
);

export const CheckboxTrigger = withAsChild(CheckboxTriggerBase);
