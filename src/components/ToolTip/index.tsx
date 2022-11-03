import * as TooltipRadix from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: string;
  duration?: number;
}

export function Tooltip({ children, content, duration = 300 }: Props) {
  return (
    <TooltipRadix.Provider delayDuration={duration}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className="bg-gray-800 text-white px-6 py-2 rounded-md">
            {content}
            <TooltipRadix.Arrow />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
