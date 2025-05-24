"use client";
import React, { useState, useEffect, useRef } from 'react';

function Charts() {
  const tabs = ["Quote", "Order", "Production", "Shipment"];
  const [activeTab, setActiveTab] = useState("Shipment");
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = { sender: "sender", text: newMessage.trim() };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
      
      // Scroll to bottom after sending
      setTimeout(() => {
        const container = chatRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, 10);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const [messages, setMessages] = useState([
    { sender: "receiver", text: "we will be fine with 7 days extension thank you" },
    { sender: "sender", text: " we can only postpone upto 1 week, 10 days is not acceptable." },
    { sender: "receiver", text: "please manage extension of 7-10 days without discount" },
    { sender: "sender", text: " we cannot accept we will need to apply a 3% discount" },
    { sender: "receiver", text: "its being resolved right now, could cause a delay of 10days" },
    { sender: "receiver", text: "Dear anya, we experienced rib shortage for approximately 500 pieces." },
  ]);
  
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const conversationData = [
    { id: 87432, text: "Shipment delayed by 3 days", time: "5 min" },
    { id: 65219, text: "Quality check completed", time: "12 min" },
    { id: 94753, text: "Payment confirmed", time: "25 min" },
    { id: 38164, text: "Custom specs approved", time: "1 hr" },
    { id: 52897, text: "Production resumed", time: "2 hrs" }
  ];

  const olderMessagesPool = [
    { sender: "sender", text: "Please confirm the delivery address once more." },
    { sender: "receiver", text: "Address confirmed: 123 Business St, Suite 400" },
    { sender: "sender", text: "We'll need updated specifications by end of day." },
    { sender: "receiver", text: "Specifications document has been sent via email." },
    { sender: "sender", text: "Quality control team has approved the samples." },
    { sender: "receiver", text: "Great! When can we expect the full batch?" },
    { sender: "sender", text: "Production will start next Monday morning." },
    { sender: "receiver", text: "Perfect timing. Our warehouse will be ready." }
  ];

  const loadOlderMessages = () => {
    if (!canLoadMore || isLoading) return;
    
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const messagesToAdd = olderMessagesPool.slice(0, 3);
      if (messagesToAdd.length > 0) {
        setMessages(prev => [...messagesToAdd, ...prev]);
        // Remove loaded messages from pool
        olderMessagesPool.splice(0, 3);
        
        // If no more messages, disable loading
        if (olderMessagesPool.length === 0) {
          setCanLoadMore(false);
        }
      }
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const container = chatRef.current;
    const handleScroll = () => {
      // Check if scrolled to top for loading older messages
      if (container.scrollTop === 0 && canLoadMore && !isLoading) {
        loadOlderMessages();
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [canLoadMore, isLoading]);

  // Auto-scroll to bottom when new messages are added (not older messages)
  useEffect(() => {
    const container = chatRef.current;
    if (container && !isLoading) {
      // Only auto-scroll if user is near the bottom
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      if (isNearBottom) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [messages.length]);

  return (
    <div className="flex w-full h-[90vh] bg-white rounded-xl shadow-md overflow-hidden font-[NSregular] mb-8">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        div::-webkit-scrollbar {
          display: none;
        }
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* LEFT: Main Chat Panel */}
      <div className="flex flex-col w-2/3 px-8 py-6 my-4">
        {/* Order Header */}
        <div className="w-full bg-[#3F72AF] text-white font-medium py-3 px-5 rounded-md mb-6">
          Order 110598
        </div>

        {/* Status Tabs */}
        <div className="grid grid-cols-4 bg-gray-100 rounded-lg overflow-hidden mb-8 font-[Sregular]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gray-800 text-white mx-1 my-1 rounded-full"
                  : "text-gray-600 hover:bg-gray-200 hover:mx-1 hover:my-1 hover:rounded-full"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chat Section */}
        <div
          ref={chatRef}
          className="flex-1 flex flex-col gap-4 mb-4 overflow-y-auto pt-2 px-2 scroll-smooth scrollbar-hide"
          style={{ 
            maxHeight: 'calc(100vh - 300px)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Load More Messages Indicator */}
          {canLoadMore && (
            <div className="text-center py-2">
              {isLoading ? (
                <div className="text-sm text-gray-500">Loading older messages...</div>
              ) : (
                <button
                  onClick={loadOlderMessages}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors"
                >
                  Load older messages
                </button>
              )}
            </div>
          )}
          
          {/* Chat Messages */}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.sender === "sender" ? "justify-end" : ""
              }`}
            >
              {msg.sender === "receiver" && (
                <img
                  src="/LlogoBlue.svg"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-contain mt-1"
                />
              )}
              <div
                className={`px-4 py-3 max-w-sm rounded-xl text-sm border shadow-sm ${
                  msg.sender === "sender"
                    ? "bg-blue-100 text-blue-900 border-blue-200"
                    : "bg-white text-[#49454F] border-gray-300"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "sender" && (
                <img
                  src="/image.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover mt-1"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="flex items-center gap-3 pt-4 px-2">
          <img src="/PlusIcon.svg" alt="plus" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          <img src="/EmojiIcon.svg" alt="emoji" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
          <div className="relative flex-1">
            <img
              src="/InputTextIcon.svg"
              alt="attach"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="w-full pl-12 pr-20 py-3 h-12 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <img
              src="/VoiceIcon.svg"
              alt="voice"
              className="absolute right-12 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
            />
            <img
              src="/SendIcon.svg"
              alt="send"
              onClick={sendMessage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center px-2">
        <div className="w-0.5 h-[75vh] bg-gray-300"></div>
      </div>

      {/* RIGHT: Recent Orders */}
      <div 
        className="w-1/3 p-6 overflow-y-auto overflow-x-hidden max-h-full my-4"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="mb-6 sticky top-0 bg-white z-10 pb-2">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <h2 className="text-lg font-bold mb-4 ml-1 text-gray-800 sticky top-16 bg-white z-10 pb-2">Conversations</h2>
        <div className="space-y-3 pb-4">
          {conversationData.map((order) => (
            <div
              key={order.id}
              className="flex items-start justify-between text-sm hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200 min-w-0"
            >
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-xs">
                    {order.id.toString().slice(-2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-800 mb-1 truncate">Order {order.id}</div>
                  <div className="text-gray-600 text-xs leading-relaxed break-words">
                    {order.text}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 ml-3 flex-shrink-0 mt-1">{order.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Charts;