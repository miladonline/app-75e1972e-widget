interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">👋</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-7xl mb-6 animate-bounce">👋</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to your React widget
        </p>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-full inline-block font-semibold shadow-lg">
          🚀 Built with React + TypeScript + Vite
        </div>
        {data && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 font-medium">View Data</summary>
            <pre className="mt-3 p-4 bg-gray-50 rounded-lg text-xs overflow-auto max-h-40 border border-gray-200">{JSON.stringify(data, null, 2)}</pre>
          </details>
        )}
      </div>
    </div>
  );
}

export default App;