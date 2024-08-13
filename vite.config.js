import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/react/App.jsx"],
            refresh: true,
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: "resources/react/App.jsx",
        },
    },
});
