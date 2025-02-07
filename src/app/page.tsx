import Hero from "~/components/sections/Hero";

export default function HomePage() {
    return (
        <main>
            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
                <Hero />
            </div>
        </main>
    );
}
