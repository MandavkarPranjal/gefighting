import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import MobileNav from "~/components/custom/MobileNav";

export const metadata: Metadata = {
    title: "Global Esports",
    description: "Esports org we all love",
    icons: [{ rel: "icon", url: "/gelogo.avif" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
                {/* MobileNav visible only on screens smaller than medium */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
                {children}
            </body>
        </html>
    );
}
