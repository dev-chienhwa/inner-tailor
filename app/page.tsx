import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-xl font-bold mb-4">Hey! 我是Kael, 你的成长助理。</h1>
      <p className="text-center mb-8">我可以帮你计算你的成绩，追踪你的成长和规划，帮助你实现自我。</p>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Type your message here..."
          className="p-2 grow"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
}