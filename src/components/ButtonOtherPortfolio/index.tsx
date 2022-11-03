import { Tooltip } from "../ToolTip";
import { AnimatePresence } from "framer-motion";

export function ButtonOtherPortfolio() {
  return (
    <AnimatePresence>
      <div className="fixed bottom-8 right-8 z-50">
        <Tooltip duration={100} content="See a simpler version!!!">
          <a
            href="https://portfolio-v2-orcin-nu.vercel.app/"
            target={"_blank"}
            className="bg-slate-700  w-20 \
            h-20 rounded-full flex items-center justify-center \
            shadow-2xl after:content-[''] after:absolute \
            after:bg-slate-700 after:-bottom-6 after:w-12 after:h-4 after:blur \
            after:rounded-full"
            rel="noreferrer"
          >
            <span className="text-3xl animate-bye select-none">👋</span>
          </a>
        </Tooltip>
      </div>
    </AnimatePresence>
  );
}