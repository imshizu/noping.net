import ChatBubble from "../components/ChatBubble";

export default function Dont() {
    return (
        <div className="flex flex-col items-center px-4 lg:px-0 mt-16 lg:mt-[10rem]">
            {/* Heading placed above the card */}
            <h2 className="text-2xl font-bold mb-4 lg:mb-8">
                ❌ Don't do this
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-32">
                {/* Chat Bubbles */}
                <div className="rounded-xl shadow-lg p-4 w-full lg:max-w-xs">
                    <div className="flex flex-col gap-4">
                        <ChatBubble
                            name="Keith"
                            time="2:15 PM"
                            message="hi"
                        />
                        <ChatBubble
                            name="Tim"
                            time="2:19 PM"
                            message="...?"
                        />
                        <ChatBubble
                            name="Keith"
                            time="2:20 PM"
                            message="what time was taht thing again?"
                        />
                        <ChatBubble
                            name="Tim"
                            time="2:20 PM"
                            message="oh - 3:30 mate"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full lg:max-w-2xl">
                    <p className="text-gray-700 mt-4">
                        Note that Keith could have got this answer minutes sooner, and needn't have kept
                        Tim waiting. In fact, Tim could have started thinking about the question right away!
                        <br /><br />
                        People who do this are generally trying to be polite by not jumping right into the request, like one would in person or on the phone - and that's great! But it's 2022 and chat is neither of those things. For most people, typing is much slower than talking. So despite best intentions,
                        <strong>you're actually just making the other person wait</strong> for you to phrase your question, which is lost productivity (and kinda annoying).
                    </p>

                    <p className="mt-4 -mb-4 font-bold">The same goes for:</p>
                    <ul className="mt-4 list-inside">
                        <li>✗ "Hello, are you around?"</li>
                        <li>✗ "hi sophie - quick question?"</li>
                        <li>✗ "You got a sec?"</li>
                        <li>✗ "yt?"</li>
                        <li>✗ "ping"</li>
                        <li>✗ "etc."</li>
                    </ul>
                    <p className="mt-4 -mb-4 font-bold">Just ask the question! 😫</p>
                </div>
            </div>
        </div>
    );
}
