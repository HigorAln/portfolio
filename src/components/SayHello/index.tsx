import { AnimatePresence, motion as m } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { api } from "../../utils/axios";

interface InputActionProps {
  name: boolean;
  email: boolean;
  subject: boolean;
  locale: boolean;
  completed: boolean;
}

interface Props {
  setMessageIsSend: (value: boolean) => void;
  messageIsSend: boolean;
}

export function SayHello({ setMessageIsSend, messageIsSend }: Props) {
  const [informations, setInformations] = useState({
    name: "",
    email: "",
    subject: "",
    locale: "",
    completed: false,
  });
  const { width, height } = useWindowSize();

  const inputAction = useRef<InputActionProps>({
    name: true,
    email: false,
    subject: false,
    locale: false,
    completed: false,
  });

  console.log({ width, height });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const { name, email, subject, locale } = informations;
    console.log({ name, email, subject, locale });

    if (!name || !email || !subject || !locale) {
      return;
    }

    try {
      await api.post("/create", {
        name,
        email,
        subject,
        locale,
      });

      document
        ?.getElementById("home")
        ?.scrollIntoView({ behavior: "smooth", inline: "start" });

      setMessageIsSend(true);
      inputAction.current = {
        name: true,
        email: false,
        subject: false,
        locale: false,
        completed: false,
      };
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <m.div className="w-full mt-96 mb-24 flex flex-col justify-center items-center">
      <m.h1 className="text-2xl md:text-4xl font-poppins tracking-wider mt-5 mb-14">
        Say hello <m.span>👋</m.span>
      </m.h1>

      {messageIsSend ? (
        <Confetti width={width - 50} height={height} numberOfPieces={200} />
      ) : (
        <m.form
          onSubmit={handleSubmit}
          className="flex gap-10 w-full lg:w-8/12 flex-col items-center"
        >
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
                setTimeout(() => {
                  document
                    .getElementById("email")
                    ?.scrollIntoView({ behavior: "smooth", inline: "end" });
                }, 200);
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
                id="email"
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
                  setTimeout(() => {
                    document
                      .getElementById("subject")
                      ?.scrollIntoView({ behavior: "smooth", inline: "end" });
                  }, 200);
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
              id="subject"
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
                setTimeout(() => {
                  document
                    .getElementById("locale")
                    ?.scrollIntoView({ behavior: "smooth", inline: "end" });
                }, 200);
              }}
            />
          )}

          {inputAction.current?.locale && (
            <m.input
              type="text"
              id="locale"
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
      )}
    </m.div>
  );
}
