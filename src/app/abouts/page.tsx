import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About GeFighting',
    description: 'Learn more about GeFighting - your premier destination for esports.',
}


export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <h1 className="sm:text-7xl md:text-8xl text-9xl font-bold mb-8 tracking-tighter text-geblue/80 dark:text-geblue">
                <span className="inline-block mr-4 last:mr-0">About</span>
                <span className="inline-block mr-4 last:mr-0">
                    <span className="text-gered/85">Ge</span>Fighting
                </span>
            </h1>
            {/* I want to make */}
        </div >
    )
}
