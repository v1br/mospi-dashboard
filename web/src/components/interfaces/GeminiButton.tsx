import { geminiHandler } from "../../handlers/gemini"

const GeminiButton = () => {
  return (
    <button 
        className='fixed bottom-4 right-4 bg-secondary text-primary font-semibold text-md w-16 h-16 p-4 rounded-full cursor-pointer'
        onClick={() => geminiHandler("Introduce yourself.")}
    >
        chat
    </button>
  )
}

export default GeminiButton