const params = new URLSearchParams(location.search);
let config = {};
const configParam = params.get("config");
if (configParam) {
	try {
		config = JSON.parse(atob(configParam));
	} catch (err) {
		console.warn("Failed to parse config query parameter", err);
	}
}

const store = $store(
	{
		url: config.targetUrl || "https://google.com",
		wispurl:
			config.wispUrl ||
			_CONFIG?.wispurl ||
			(location.protocol === "https:" ? "wss" : "ws") +
				"://" +
				location.host +
				"/wisp/",
		bareurl:
			config.bareUrl ||
			_CONFIG?.bareurl ||
			(location.protocol === "https:" ? "https" : "http") +
				"://" +
				location.host +
				"/bare/",
		proxy: "",
		transport: "/epoxy/index.mjs",
	},
	{ ident: "settings", backing: "localstorage", autosave: "auto" }
);
self.store = store;
