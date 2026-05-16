import { X } from "lucide-react";

export const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-lg ${
          isBot
            ? "bg-primary/20 text-foreground border border-primary/30"
            : "bg-primary text-white"
        } animate-fade-in`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};
