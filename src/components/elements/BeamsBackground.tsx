import { BackgroundBeams } from "../ui/background-beams";

import { ReactNode } from 'react';

export function BackgroundBeamsDemo({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-row items-center justify-center antialiased  border-red-600">
      <div className="max-w-xl z-10 mx-auto p-4  border-green-500 ">
        {children}
      </div>
      <BackgroundBeams />
      {/* <div className="h-[100vh] w-[18vw]  border-white flex flex-col justify-end"> */}
      {/* <div className="h-[10vh] w-[16vw]  bg-gray-700 border-blue-700 mb-[2vh]" > */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
