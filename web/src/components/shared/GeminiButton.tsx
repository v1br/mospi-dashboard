import { useState } from "react"
import { Bot, BotOff } from "lucide-react"
import { geminiHandler } from "../../handlers/gemini"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import toast from "react-hot-toast";

const GeminiButton = () => {

  const [isActive, setIsActive] = useState<boolean>(false)
  const [geminiPrompt, setGeminiPrompt] = useState<string>("Hi! I am a Gemini-powered AI Assistant, here to answer your questions! 😀")
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    const query = userInput.trim();
    setUserInput(""); // clear input
    setGeminiPrompt("Thinking... 🤔");

    try {
      toast.loading("Sending request... 🚛");
      const response = await geminiHandler(query)
      if (!response) throw Error;
      setGeminiPrompt(response);

    } catch (error) {
      console.log(error)
      setGeminiPrompt("Sorry, something went wrong. Please try again. 🙇🏼‍♀️");
      toast.error("Gemini API is busy (rate-limit)... 🪅");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
    <button 
        className='fixed bottom-4 right-4 flex items-center justify-center bg-secondary text-primary w-16 h-16 p-2 rounded-full cursor-pointer z-50'
        onClick={() => {
          setIsActive(!isActive)
        }}
    >

      {isActive?
        <BotOff className="w-8 h-8 text-accent"/>
        :<Bot className="w-8 h-8"/>
      }

    </button>

    {isActive &&
    <div className="fixed mx-4 md:mx-0 left-4 right-4 bottom-8 md:left-auto md:w-1/3 bg-secondary2 text-primary rounded-2xl shadow-lg p-6 flex flex-col gap-4 z-40">
      <p id="dialogue-box" className="text-base md:text-xs font-medium leading-relaxed break-words whitespace-pre-wrap overflow-y-auto max-h-64">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {geminiPrompt}
        </ReactMarkdown>
      </p>
      <div className="flex flex-row items-center justify-center gap-2">
        <textarea
          id="user-input"
          placeholder="Ask me something..."
          className="flex-1 text-base md:text-xs focus:text-blue-300 focus:outline-none transition duration-200 ease-in-out"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
        />
      </div>
    </div>
    }
    </>
  )
}

export default GeminiButton