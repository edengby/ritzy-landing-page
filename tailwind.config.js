/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0b0f1a",
                panel: "#0f172a",
                card: "#111827",
                border: "#1f2937",
                accent: "#34d399",
                accent2: "#f59e0b"
            },
            boxShadow: { soft: "0 10px 32px rgba(0,0,0,0.35)" },
            borderRadius: { xl: "1rem", "2xl": "1.25rem" }
        }
    },
    plugins: []
};
