import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Minimize2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ContactInfo {
  name?: string;
  email?: string;
  message?: string;
}

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Tarun's AI assistant. I can help you learn more about Tarun, get contact information, or connect you directly. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({});
  const [collectingContact, setCollectingContact] = useState(false);
  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'message' | 'done'>('name');
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  // Show notification for new bot messages when chat is closed
  useEffect(() => {
    if (!isOpen && messages.length > 1 && messages[messages.length - 1].sender === 'bot') {
      setHasNewMessage(true);
    }
  }, [messages, isOpen]);

  // Clear notification when chat is opened
  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  const quickResponses = [
    "How can I contact Tarun?",
    "Can I download the resume?",
    "What services does Tarun offer?",
    "Tell me about Tarun's experience"
  ];

  const botResponses = {
    contact: [
      "You can reach Tarun in several ways:\n📧 Email: tarunvinodhkumar@gmail.com\n📞 Phone: +1 (807) 357-3713\n📍 Location: Oakville, On, Canada\n\nWould you like me to help you send a message directly?",
      "Tarun is available via email at tarunvinodhkumar@gmail.com or phone at +1 (807) 357-3713. I can also help you send a message right now if you'd like!"
    ],
    resume: [
      "I'd be happy to help you get Tarun's resume! You can download it directly or I can send it to your email. What would you prefer?",
      "Tarun's resume showcases extensive experience in full-stack development, React, Node.js, and modern web technologies. Would you like me to send you the download link?"
    ],
    services: [
      "Tarun offers a comprehensive range of development services:\n• Full-stack web development\n• React & Next.js applications\n• Node.js backend development\n• UI/UX design\n• Database design & optimization\n• DevOps & deployment\n\nInterested in discussing a specific project?",
      "Tarun specializes in creating modern, scalable web applications using cutting-edge technologies. From concept to deployment, Tarun can handle your entire project. What kind of project do you have in mind?"
    ],
    experience: [
      "Tarun has experience as a Full-Stack Developer, working with companies from startups to enterprise level. Key expertise includes React, TypeScript, Node.js, Python, and cloud technologies.",
      "With a strong background in both frontend and backend development, Tarun has successfully delivered 10+ projects ranging from e-commerce platforms to complex enterprise applications. Want to know more about any specific area?"
    ],
    default: [
      "That's an interesting question! While I'd love to help, I think Tarun would be the best person to give you a detailed answer. Would you like me to help you get in touch?",
      "I'm here to help connect you with Tarun and answer basic questions about services and contact information. Is there something specific about Tarun's work you'd like to know?",
      "Great question! For detailed technical discussions and project specifics, Tarun would love to chat with you directly. Shall I help you send a message?"
    ]
  };

  const getRandomResponse = (category: keyof typeof botResponses) => {
    const responses = botResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
      return getRandomResponse('contact');
    }
    if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
      return getRandomResponse('resume');
    }
    if (message.includes('service') || message.includes('offer') || message.includes('do') || message.includes('work')) {
      return getRandomResponse('services');
    }
    if (message.includes('experience') || message.includes('background') || message.includes('about')) {
      return getRandomResponse('experience');
    }
    if (message.includes('yes') || message.includes('sure') || message.includes('ok')) {
      if (collectingContact) {
        return "Perfect! Let's start with your name.";
      }
      return "Great! I'd be happy to help you get in touch with Tarun. Let me collect some information to forward to him.";
    }
    
    return getRandomResponse('default');
  };

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    setIsTyping(false);
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const handleContactCollection = async (userInput: string) => {
    let response = '';
    
    switch (currentStep) {
      case 'name':
        setContactInfo(prev => ({ ...prev, name: userInput }));
        setCurrentStep('email');
        response = `Nice to meet you, ${userInput}! What's your email address?`;
        break;
      case 'email':
        setContactInfo(prev => ({ ...prev, email: userInput }));
        setCurrentStep('message');
        response = "Great! Now, what would you like to tell Tarun?";
        break;
      case 'message':
        setContactInfo(prev => ({ ...prev, message: userInput }));
        setCurrentStep('done');
        setCollectingContact(false);
        response = `Perfect! I've collected your information:\n\n📝 Name: ${contactInfo.name}\n📧 Email: ${contactInfo.email}\n💬 Message: ${userInput}\n\nI'll make sure Tarun gets this right away! He typically responds within 24 hours. Is there anything else I can help you with?`;
        break;
    }
    
    await simulateTyping(response);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue.trim();
    setInputValue('');
    
    if (collectingContact) {
      await handleContactCollection(currentInput);
      return;
    }
    
    // Check if user wants to start contact collection
    const message = currentInput.toLowerCase();
    if ((message.includes('send') && message.includes('message')) || 
        message.includes('get in touch') || 
        message.includes('contact Tarun') ||
        (message.includes('yes') && messages[messages.length - 1]?.content.includes('send a message'))) {
      setCollectingContact(true);
      setCurrentStep('name');
      await simulateTyping("Perfect! I'd be happy to help you send a message to Tarun. Let's start with your name.");
      return;
    }
    
    const response = generateBotResponse(currentInput);
    await simulateTyping(response);
  };

  const handleQuickResponse = (response: string) => {
    setInputValue(response);
  };

  const formatMessageContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 h-[500px] glass-card shadow-2xl"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Tarun's AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 h-[320px]">
              <ScrollArea className="h-full">
                <div ref={scrollAreaRef} className="p-4 space-y-3">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'bot' 
                            ? 'bg-gradient-primary' 
                            : 'bg-muted'
                        }`}>
                          {message.sender === 'bot' ? (
                            <Bot className="w-3 h-3 text-primary-foreground" />
                          ) : (
                            <User className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                        <div className={`max-w-[240px] ${message.sender === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block p-2.5 rounded-lg text-xs leading-relaxed ${
                            message.sender === 'bot'
                              ? 'bg-background border border-border'
                              : 'bg-primary text-primary-foreground'
                          }`}>
                            {formatMessageContent(message.content)}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-2"
                      >
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <div className="bg-background border border-border p-2.5 rounded-lg">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollArea>
            </div>

            {/* Quick Responses */}
            {!collectingContact && (
              <div className="px-4 py-2 border-t border-border">
                <div className="flex flex-wrap gap-1">
                  {quickResponses.slice(0, 2).map((response, index) => (
                    <motion.button
                      key={response}
                      onClick={() => handleQuickResponse(response)}
                      className="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {response}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    collectingContact 
                      ? currentStep === 'name' 
                        ? "Enter your name..."
                        : currentStep === 'email'
                        ? "Enter your email..."
                        : "Enter your message..."
                      : "Ask me anything..."
                  }
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="minimize"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Minimize2 className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background"
            />
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary animate-ping opacity-20"></div>
      </motion.button>
    </div>
  );
};

export default FloatingChatBot;