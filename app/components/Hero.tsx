import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center md:-ml-[30rem] mt-60 px-4 mb-[5rem] md:px-10 md:mb-0">
      <h1 className="text-left text-4xl md:text-6xl font-bold text-blue-950 mb-3">
        @support
      </h1>

      <p className="text-left text-sm md:text-base text-gray-500 mb-8">
        @mentions don't help – we check the chat when we can! 🤗
      </p>

      <p className="text-left text-lg md:text-2xl text-gray-700">
        We read messages when we have time. You don’t need to @mention us –<br /> it won’t make us respond any faster. 🚀
      </p>
    </section>
  );
}
