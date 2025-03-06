import { cn } from "../../lib/utils";
import { Skeleton } from "./skeleton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  open
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  open:boolean;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {open ? (
             <Skeleton className="h-[50%] w-[50%]  bg-gray-300 rounded-full opacity-5" />
          ) : (
           header
          )}
          {/* {header} */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        {open ? (
             <Skeleton className="h-4 w-[50%] bg-gray-600" />
          ) : (
           title
          )}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {open ? (
             <Skeleton className="h-4 w-[70%] bg-gray-600" />
          ) : (
            description
          )}
        </div>
      </div>
    </div>
  );
};
