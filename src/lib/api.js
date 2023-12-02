import { API_BASE_URL } from "../globals.js";

export async function getJson(path) {
	const resp = await fetch(`${API_BASE_URL}${path}`);
	return await resp.json();
}

export async function getJsonRaw(url) {
	const resp = await fetch(url);
	return await resp.json();
}
