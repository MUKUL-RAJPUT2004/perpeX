import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingChatButton;