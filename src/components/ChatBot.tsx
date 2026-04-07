"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const QA = [
  {
    question: "I want to get to know you",
    answer: (
      <>
        You can learn more in the{" "}
        <Link href="/about" className="underline font-medium hover:opacity-70">
          About Me
        </Link>{" "}
        page!
      </>
    ),
  },
  {
    question: "How do I contact you?",
    answer: (
      <>
        You can find me on{" "}
        <a
          href="https://www.linkedin.com/in/nicoleyproduct"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:opacity-70"
        >
          LinkedIn
        </a>
        , and email me at{" "}
        <a
          href="mailto:nicoleeyts1@gmail.com"
          className="underline font-medium hover:opacity-70"
        >
          nicoleeyts1@gmail.com
        </a>
        .
      </>
    ),
  },
  {
    question: "What is your favourite food?",
    answer:
      "I am a big foodie and I love all types of food 🍕🍣🌮🍜🥐🍔🍰🥗🍫🍩🍪🧁🍦🤤😋",
  },
];

export default function ChatBot({ hidden }: { hidden: boolean }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function handleQuestion(index: number) {
    setSelectedIndex(index);
  }

  function handleBack() {
    setSelectedIndex(null);
  }

  if (hidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#e13400] px-4 py-3 flex items-center justify-between">
            <span className="text-white font-semibold text-sm">
              Nicole&apos;s Assistant
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white opacity-80 hover:opacity-100 text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4 max-h-72 overflow-y-auto">
            {selectedIndex === null ? (
              <>
                {/* Greeting */}
                <div className="text-sm px-3 py-2 rounded-xl bg-gray-100 text-[#1a1a1a] self-start leading-snug">
                  Hi, fancy to meet you here! How can I help you?
                </div>
              </>
            ) : (
              <>
                {/* User question */}
                <div className="text-sm px-3 py-2 rounded-xl bg-[#e13400] text-white self-end leading-snug max-w-[85%]">
                  {QA[selectedIndex].question}
                </div>
                {/* Bot answer */}
                <div className="text-sm px-3 py-2 rounded-xl bg-gray-100 text-[#1a1a1a] self-start leading-snug max-w-[85%]">
                  {QA[selectedIndex].answer}
                </div>
              </>
            )}
          </div>

          {/* Options or Back */}
          <div className="flex flex-col gap-2 px-4 pb-4">
            {selectedIndex === null ? (
              QA.map((qa, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestion(i)}
                  className="text-left text-xs px-3 py-2 rounded-xl border border-[#e13400] text-[#e13400] hover:bg-[#e13400] hover:text-white transition-all"
                >
                  {qa.question}
                </button>
              ))
            ) : (
              <button
                onClick={handleBack}
                className="text-left text-xs px-3 py-2 rounded-xl border border-[#e13400] text-[#e13400] hover:bg-[#e13400] hover:text-white transition-all"
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      )}

      {/* Dog icon button */}
      <div className="flex flex-col items-center">
        {/* Speech bubble */}
        {!open && (
          <div className="relative mb-1">
            <div className="bg-white border border-gray-200 text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
              ruff ruff
            </div>
            {/* Bubble tail */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white border-b border-r border-gray-200 rotate-45" />
          </div>
        )}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          <Image
            src="/chatbot-dog.png"
            alt="Chat with Nicole's assistant"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        </button>
      </div>
    </div>
  );
}
