import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Loader } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { getBotResponse } from "@/services/chatbotService";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 Welcome to my portfolio! I'm an AI assistant here to help answer questions about me, my projects, and services. What would you like to know?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Get bot response
      const botResponse = await getBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting bot response:", error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I encountered an error. Please try again!",
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-red-500 text-white"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-h-96 rounded-2xl shadow-2xl bg-background border border-primary/20 flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-t-2xl">
            <h3 className="text-lg font-semibold">Ask Me Anything! 🤖</h3>
            <p className="text-sm text-white/80">Questions about my work & experience</p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isBot={message.isBot}
              />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-primary/20 text-foreground border border-primary/30 px-4 py-3 rounded-lg flex items-center gap-2">
                  <Loader size={16} className="animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-primary/20 p-4 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              disabled={isLoading}
              className="flex-1 bg-background/50 border border-primary/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/60 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
