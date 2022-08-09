import { AnimatePresence, motion as m } from "framer-motion";
import { useRef, useState } from "react";

interface InputActionProps {
  name: boolean;
  email: boolean;
  subject: boolean;
  locale: boolean;
  completed: boolean;
}

export function SayHello() {
  const [informations, setInformations] = useState({
    name: "false",
    email: "false",
    subject: "false",
    locale: "false",
    completed: false,
  });
  const inputAction = useRef<InputActionProps>({
    name: false,
    email: false,
    subject: false,
    locale: false,
    completed: false,
  });

  return (
    <m.div className="w-full mt-96 mb-24 flex flex-col justify-center items-center">
      <m.h1 className="text-2xl md:text-4xl font-poppins tracking-wider mt-5 mb-14">
        Say hello <m.span>👋</m.span>
      </m.h1>

      <m.form className="flex gap-10 w-full lg:w-8/12 flex-col items-center">
        <m.input
          type="text"
          className="border-b-2 w-5/6 md:w-4/6 text-lg md:text-2xl font-poppins p-4 text-gray-700 focus:outline-gray-400"
          placeholder="your name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onChange={(e) => {
            setInformations((c) => ({ ...c, name: e.target.value }));
            if (e.target.value.length > 4) {
              inputAction.current = {
                ...inputAction.current,
                email: true,
              };
            }
          }}
        />

        {inputAction.current?.email && (
          <AnimatePresence>
            <m.input
              type="email"
              className="border-b-2 w-5/6 md:w-4/6 text-lg md:text-2xl font-poppins p-4 text-gray-700 focus:outline-gray-400"
              placeholder="your email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onChange={(e) => {
                setInformations((c) => ({ ...c, email: e.target.value }));

                const reg = new RegExp(
                  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                );
                if (!reg.test(e.target.value)) {
                  inputAction.current = {
                    ...inputAction.current,
                    subject: false,
                  };
                  return;
                }
                inputAction.current = {
                  ...inputAction.current,
                  subject: true,
                };
              }}
            />
          </AnimatePresence>
        )}

        {inputAction.current?.subject && (
          <m.textarea
            className="border-b-2 w-5/6 md:w-4/6 max-h-96 text-lg md:text-2xl font-poppins p-4 text-gray-700 focus:outline-gray-400"
            placeholder="subject"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onChange={(e) => {
              setInformations((c) => ({ ...c, subject: e.target.value }));

              if (e.target.value.length < 20) {
                inputAction.current = {
                  ...inputAction.current,
                  locale: false,
                };
                return;
              }
              inputAction.current = {
                ...inputAction.current,
                locale: true,
              };
            }}
          />
        )}

        {inputAction.current?.locale && (
          <m.input
            type="text"
            className="border-b-2 w-5/6 md:w-4/6 text-lg md:text-2xl placeholder:text-sm md:placeholder:text-lg font-poppins p-4 text-gray-700 focus:outline-gray-400"
            placeholder="where are you speaking from? ex: en, fr, es, br"
            onChange={(e) => {
              setInformations((c) => ({ ...c, locale: e.target.value }));

              if (e.target.value.length < 2) {
                inputAction.current = {
                  ...inputAction.current,
                  completed: true,
                };
                return;
              }
            }}
          />
        )}

        {inputAction.current?.completed && (
          <m.button
            className="border-b-2 w-5/6 md:w-4/6 text-lg md:text-2xl font-poppins p-4 text-gray-700 focus:outline-gray-400 hover:bg-gray-200 transition-colors"
            type="submit"
          >
            Send
          </m.button>
        )}
      </m.form>
    </m.div>
  );
}
