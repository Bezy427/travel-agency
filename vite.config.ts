import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),

    // 👇 Fix: Ignore Chrome DevTools ".well-known" requests
    {
      name: "ignore-well-known",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/.well-known")) {
            res.statusCode = 404;
            return res.end(); // Do not let React Router try to handle this
          }
          next();
        });
      }
    }
  ],

  ssr: {
    noExternal: [/@syncfusion/]
  }
});
