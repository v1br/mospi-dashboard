import { useState } from "react"
// import { geminiHandler } from "../../handlers/gemini"
import { Bot, BotOff } from "lucide-react"

const GeminiButton = () => {

  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <button 
        className='fixed bottom-4 right-4 flex items-center justify-center bg-secondary text-primary w-16 h-16 p-2 rounded-full cursor-pointer'
        onClick={() => {
          setIsActive(!isActive)
          // geminiHandler("Introduce yourself.")}
        }}
    >

      {isActive?
        <BotOff className="w-8 h-8 text-accent"/>
        :<Bot className="w-8 h-8"/>
      }

    </button>
  )
}

export default GeminiButton