// app/not-found.js
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 max-w-2xl mx-auto">
      <div className="mb-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-24 w-24 text-[#194185] mb-4"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-3 text-gray-800">Under Construction</h1>
      <div className="w-16 h-1 bg-[#194185] mb-6 mx-auto"></div>
      <p className="text-gray-600 mb-8 text-lg">
        We're currently working on this page. Please check back soon!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#194185] text-white rounded-lg hover:bg-blue-800 transition duration-300 font-medium flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Return to Home
      </a>
    </div>
  );
}