"use server";

import { cn } from "@/lib/utils";
import appTheme from "@/config/theme";
import { ThemeConfig } from "./Links/types";

const theme = appTheme as ThemeConfig;

export type ContainerProps = {
  backgroundImage?: string | null;
  children?: React.ReactNode;
};

export const Container = async ({
  children,
  backgroundImage,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "relative min-h-full px-4 pb-8 pt-10",
        theme?.font.body.className,
        theme?.container?.className
      )}
    >
      <main className="w-full max-w-md min-h-full mx-auto flex flex-col gap-8 relative z-10">
        {children}
      </main>
      {backgroundImage && (
        <div
          className="absolute z-0 top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
    </div>
  );
};
