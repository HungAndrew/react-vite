import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./tests/setup.ts", // assuming the test folder is in the root of our project
        include: ["**/*.test.tsx", "**/*.test.ts", "**/*.test.js", "**/*.test.jsx"],
        exclude: ["**/node_modules/**", "**/dist/**", "**/cypress/**", "**/.{idea,git,cache,output,temp}/**"],
    },

});
