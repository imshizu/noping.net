import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center md:-ml-[30rem] mt-60 px-4 md:px-10">
      <h1 className="text-left text-4xl md:text-6xl font-bold text-blue-950 mb-3">
        @support
      </h1>

      <p className="text-left text-sm md:text-base text-gray-500 mb-8">
        please avoid spamming me with pings, I'm here to help you! 🤗
      </p>

      <p className="text-left text-lg md:text-2xl text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Ea expedita architecto voluptatibus, explicabo laboriosam obcaecati.
      </p>
    </section>
  );
}
