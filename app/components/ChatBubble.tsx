import React from 'react';

interface ChatBubbleProps {
  name: string;
  time: string;
  message: string;
}

export default function ChatBubble({ name, time, message }: ChatBubbleProps) {
  return (
    <div className="flex items-start gap-2">
      <img
        src={`${name}.jpg`}
        alt={name}
        className="w-10 h-10"
      />
      <div>
        <p className="font-bold">{name} <span className="text-xs text-gray-500">{time}</span></p>
        <p>{message}</p>
      </div>
    </div>
  );
}
