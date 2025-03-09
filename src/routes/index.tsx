import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { Checkbox } from "~/components/checkbox";
import { LuCheck } from "@qwikest/icons/lucide";

export default component$(() => {
	return (
		<Checkbox.Root>
			<Checkbox.Trigger asChild>
				<button data-child type="button">
					<Checkbox.Indicator>
						<LuCheck />
					</Checkbox.Indicator>
				</button>
			</Checkbox.Trigger>
		</Checkbox.Root>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
