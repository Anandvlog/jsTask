import { tabs } from "./state.js";

export function getTabContent(tabName) {
return tabs[tabName]
}