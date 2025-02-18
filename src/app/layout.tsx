import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aileron = localFont({
    src: [
        {
            path: "./fonts/Aileron/Aileron-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Aileron/Aileron-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-aileron",
});
const dmSans = localFont({
    src: [
        {
            path: "./fonts/dm-sans/dm-sans-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/dm-sans/dm-sans-semibold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-dm-sans",
});

const larken = localFont({
    src: [
        {
            path: "./fonts/Larken/Larken-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Larken/Larken-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./fonts/Larken/Larken-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Larken/Larken-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./fonts/Larken/Larken-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-larken",
});

export const metadata: Metadata = {
    title: "Out The Archive",
    description: "Out The Archive Main Site",
};

import Footer from "./components/Footer/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${larken.variable} ${dmSans.variable} ${aileron.variable} antialiased`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
