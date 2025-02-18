import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dmSans: ["var(--font-dm-sans)", "Arial", "sans-serif"],
                larken: ["var(--font-larken)", "Georgia", "serif"],
                aileron: ["var(--font-aileron)", "Helvetica", "sans-serif"],
            },
        },
    },
} satisfies Config;
