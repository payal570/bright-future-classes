"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NotesModel({ open, onClose }) {
  const router = useRouter();
  const [showJoinLinks, setShowJoinLinks] = useState(false);

  if (!open) return null;

  const goToClass10 = () => {
    onClose();
    router.push("/class-10");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-xl p-6 rounded-lg relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">Notes</h2>

        <div className="space-y-3">
          <button
            onClick={goToClass10}
            className="w-full bg-gray-200 py-2 rounded"
          >
            Class 10
          </button>

          <button
          onClick={() => setShowJoinLinks(!showJoinLinks)}
          className="w-full py-2 bg-green-600 text-white rounded mb-2"
        >
          Class 11–12 
        </button>

        {/* Dropdown */}
        {showJoinLinks && (
          <div className="border rounded p-3 space-y-2">
            <a
              href="https://t.me/bc1_4"
              target="_blank"
              className="block text-center bg-blue-500 text-white py-2 rounded"
            >
              Join Telegram Channel
            </a>

            <a
              href="https://chat.whatsapp.com/https://whatsapp.com/channel/0029Vb7JsNAIN9igHVY9fl24"
              target="_blank"
              className="block text-center bg-green-500 text-white py-2 rounded"
            >
              Join WhatsApp Channel
            </a>
          </div>
        )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
