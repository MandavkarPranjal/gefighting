import Link from "next/link";
// import About from "./pages/About";

export default function HomePage() {
    return (
        <div>

        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-6xl font-bold">GeFighting</h1>
            </div>

            <Link href="/about">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Go to About</button>
                    </Link>
        </main>

       
        </div>
    );
}
