function scramjetPath(path) {
	const cleanPath = path.replace(/^\/+/, "");
	return new URL(cleanPath, document.baseURI).pathname;
}

self.scramjetPath = scramjetPath;
