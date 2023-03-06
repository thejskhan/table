/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [
		require("@headlessui/tailwindcss")({ prefix: "ui" }),
		require("prettier-plugin-tailwindcss"),
	],
}
