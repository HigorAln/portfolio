import * as TooltipRadix from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: string;
  duration?: number;
  side?: "left" | "right" | "top" | "bottom";
}

export function Tooltip({
  children,
  content,
  duration = 300,
  side = "top",
}: Props) {
  return (
    <TooltipRadix.Provider delayDuration={duration}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            side={side}
            className="z-20 bg-gray-700 dark:bg-style-g-2 text-white px-6 py-2 rounded-md"
          >
            {content}
            <TooltipRadix.Arrow className="fill-gray-700" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
