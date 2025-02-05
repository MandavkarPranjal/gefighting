import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Global Esports",
    description: "Esports org we all love",
    icons: [{ rel: "icon", url: "/gelogo.avif" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>{children}</body>
        </html>
    );
}
