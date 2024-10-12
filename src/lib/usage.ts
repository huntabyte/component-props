import { renderComponent } from "$lib";
import NotWorking from "./not-working.svelte";
import Working from "./working.svelte";


renderComponent(NotWorking, { title: "hello"})

renderComponent(Working, { title: "hello "})