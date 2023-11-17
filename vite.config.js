import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		react(),
		{
			configureServer: (server) => {
				return () => {
					server.middlewares.use((req, res, next) => {
						if (req.url.endsWith(".module.css")) {
							const cssPath = resolve(
								process.cwd(),
								req.url.replace("/@fs/", ""),
							);
							res.setHeader("Content-Type", "text/css");
							res.statusCode = 200;
							res.end(
								require("css-loader").default.stringify({
									[cssPath]: {},
								}),
							);
						} else {
							next();
						}
					});
				};
			},
		},
	],
});
