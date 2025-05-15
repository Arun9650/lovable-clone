'use client';

export default function PreviewPanel() {
  return (
    <div className="w-[70%] bg-white flex flex-col items-center justify-center p-10">
      <div className="max-w-md w-full bg-white border rounded-lg shadow p-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Welcome to ChatGPT Clone</h1>
        <p className="text-gray-600 mb-6">Sign in to start your conversations</p>
        <button className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-90 transition">
          Sign In
        </button>
        <p className="text-gray-500 text-sm mt-4">
          Don’t have an account? The sign-in button will create one for you automatically.
        </p>
      </div>
    </div>
  );
}
