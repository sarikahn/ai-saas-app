import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [ai, setAi] = useState("");

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/api/ai", {
      prompt: text
    });
    setAi(res.data.content);
  };

  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Workspace</h2>
        <button className="bg-blue-500 px-3 py-1 rounded">
          + New Note
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">
        <textarea 
          className="w-full border p-3 rounded"
          placeholder="Write something..."
          onChange={e=>setText(e.target.value)}
        />

        <button 
          className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
          onClick={generate}
        >
          Generate AI
        </button>

        <div className="mt-5 p-4 bg-gray-100 rounded">
          {ai}
        </div>
      </div>

    </div>
  );
}