import type { Component, ComponentProps } from 'svelte'

export function renderComponent<T extends Component>(component: T, props: ComponentProps<T>) {
	// do something
}