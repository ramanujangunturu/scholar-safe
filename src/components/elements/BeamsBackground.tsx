import { BackgroundBeams } from "../ui/background-beams";

import { ReactNode } from 'react';

export function BackgroundBeamsDemo({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl z-10 mx-auto p-4">
        {children}
      </div>
      <BackgroundBeams />
    </div>
  );
}
