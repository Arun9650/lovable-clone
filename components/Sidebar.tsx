"use client";

import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react"; // Added ChangeEvent, KeyboardEvent
import { Plus, Paperclip, Target, Lightbulb, ArrowUp, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  type?: "code_block" | "text";
  code?: string;
}

export default function Sidebar() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    // Example initial messages if needed, or leave empty
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Ref for the textarea

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString() + "-user",
        text: inputValue,
        sender: "user",
        type: "text",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
      // Reset textarea height after sending
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; 
      }
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Adjust textarea height dynamically
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  };
  
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };


  const messageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
  };

  return (
    <div className="bg-[#1E1E1E] text-gray-200 flex flex-col h-screen w-full md:w-[450px] p-4">
      {/* Header Section - Can be used for titles or other static elements if needed later */}
      {/* The static message block has been removed from here */}
      
      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto mb-4 pr-1 space-y-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`p-3 rounded-xl text-sm break-words shadow-md
                ${
                  msg.sender === "user"
                    ? "bg-white/10 backdrop-blur-md border border-white/20 text-white ml-auto max-w-[85%]" // User message glass style
                    : "bg-black/20 backdrop-blur-md border border-white/10 text-gray-200 max-w-[85%]" // Bot message glass style
                }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="bg-black/30 backdrop-blur-lg p-2.5 rounded-xl shadow-xl border border-white/10">
        <div className="flex items-start bg-white/5 backdrop-blur-sm p-1.5 rounded-lg border border-white/10 scrollbar-thumb-rounded-full scrollbar-track-black"> {/* Changed items-center to items-start for textarea alignment */}
          <textarea
            ref={textareaRef}
            rows={1} // Start with a single row
            value={inputValue}
            onChange={handleInputChange} // Use the new handler
            onKeyDown={handleKeyDown} // Use the new handler
            placeholder="Ask Lovable..."
                       className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm px-2 py-1 resize-none overflow-y-auto max-h-96  scrollbar-thumb-rounded-full scrollbar-track-black" // Added scrollbar styling classes
 // Added resize-none and overflow-y-hidden
            style={{ minHeight: '2.25rem' }} // Ensure a minimum height consistent with original input
          />
        </div>
        <div className="flex items-center justify-between mt-2.5 text-gray-400 text-xs">
          <div className="flex items-center space-x-1">
            <button className="p-1.5 hover:bg-white/10 rounded-md"><Plus size={18} /></button>
            <button className="p-1.5 hover:bg-white/10 rounded-md flex items-center space-x-1">
              <Paperclip size={14} /> <span className="hidden sm:inline">Attach</span>
            </button>
            <button className="p-1.5 hover:bg-white/10 rounded-md flex items-center space-x-1">
              <Target size={14} /> <span className="hidden sm:inline">Edit</span>
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={handleSend}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-md flex items-center space-x-1.5 border border-white/20"
            >
              <Lightbulb size={14} /> <span>Chat</span>
            </button>
            <button 
              onClick={handleSend}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-md border border-white/20"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}