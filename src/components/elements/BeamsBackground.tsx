import { BackgroundBeams } from "../ui/background-beams";

export function BackgroundBeamsDemo({ children }: { children?: React.ReactNode }) {
    return (
        <>
        <div className="h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 z-10">
                {children}
            </div>
            <BackgroundBeams />
        </div>
        </>
    );
}
