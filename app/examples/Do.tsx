import ChatBubble from "../components/ChatBubble";

export default function Do() {
    return (
        <div className="flex flex-col items-center px-4 lg:px-0 -mt-[5rem]">
            {/* Heading placed above the card */}
            <h2 className="text-2xl font-bold mb-4 lg:mb-8">
                ✅ Instead try this
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-32">
                {/* Chat Bubbles */}
                <div className="rounded-xl shadow-lg p-4 w-full lg:max-w-xs">
                    <div className="flex flex-col gap-4">
                        <ChatBubble
                            name="Dawn"
                            time="2:15 PM"
                            message="Hiya! What time was that thing?"
                        />
                        <ChatBubble
                            name="Tim"
                            time="2:15 PM"
                            message="hey, 3:30"
                        />
                        <ChatBubble
                            name="Dawn"
                            time="2:15 PM"
                            message="Ta - seeya then!"
                        />
                        <ChatBubble
                            name="Tim"
                            time="2:16 PM"
                            message="👌 np"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:max-w-2xl">
                    <p className="text-gray-700 mt-4">
                        If you feel it's a bit brusque to simply say "Hi" and ask the question,
                        <strong> you can still preface your message with as many pleasantries as you see fit.</strong>
                    </p>

                    <ul className="mt-4 list-inside">
                        <li>✓ "hey man, what's up? also, any idea when that thing's due?"</li>
                        <li>✓ "Hi there! Hope you're well. I'm after the latest deck, when you get a sec :)"</li>
                        <li>✓ "hey, if you're not busy, could you update those NFRs?"</li>
                    </ul>

                    <p className="text-gray-700 mt-4">
                        It may seem trivial, but asking your question before getting that initial salutatory reply
                        also allows for <strong>asynchronous communication</strong>. If the other party is away,
                        and you leave before they come back, they can still answer your question, instead of just
                        staring at a "Hello" and wondering what they missed.
                    </p>

                    <p className="mt-4 text-gray-700">When done right - everyone's happy! 🎉</p>
                </div>
            </div>
        </div>
    );
}
