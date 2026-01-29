import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const StoryModal = ({ setShowModal, fetchStories }) => {

  const bgColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
  ];

  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // reset + close modal
  const handleGoBack = () => {
    setMode("text");
    setBackground(bgColors[0]);
    setText("");
    setMedia(null);
    setPreviewUrl(null);
    setShowModal(false); // 👈 THIS hides the story modal
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMedia(file);
    setPreviewUrl(URL.createObjectURL(file));
    setMode(file.type.startsWith("image") ? "image" : "video");
  };

  const handleCreateStory = async () => {
    console.log({ mode, text, media, background });

    fetchStories?.();
    handleGoBack();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-4">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={handleGoBack}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeft />
          </button>

          <h2 className="text-lg font-semibold">Create a Story</h2>
          <span className="w-10" />
        </div>

        {/* Preview */}
        <div
          className={`w-full aspect-[3/4] rounded-lg flex items-center justify-center text-white mb-4 ${background}`}
        >
          {mode === "text" && (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write something..."
              className="bg-transparent resize-none outline-none text-center text-lg w-full h-full p-4 placeholder-white/70"
            />
          )}

          {mode === "image" && previewUrl && (
            <img
              src={previewUrl}
              alt="preview"
              className="w-full h-full object-cover rounded-lg"
            />
          )}

          {mode === "video" && previewUrl && (
            <video
              src={previewUrl}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
            />
          )}
        </div>

        {/* Background selector */}
        {mode === "text" && (
          <div className="flex gap-2 mb-4 justify-center">
            {bgColors.map((color) => (
              <button
                key={color}
                onClick={() => setBackground(color)}
                className={`w-8 h-8 rounded-full ${color} ring-2 ring-white`}
              />
            ))}
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-3">
          <label className="flex-1 text-center cursor-pointer py-2 rounded bg-gray-100">
            Upload
            <input
              type="file"
              accept="image/*,video/*"
              hidden
              onChange={handleMediaUpload}
            />
          </label>

          <button
            onClick={handleCreateStory}
            className="flex-1 py-2 rounded bg-indigo-600 text-white font-medium"
          >
            Share
          </button>
          {/* Floating Back Arrow */}
<button
  onClick={handleGoBack}
  className="absolute top-4 left-4 z-50
             bg-black/60 text-white
             p-2 rounded-full
             hover:bg-black/80 transition"
>
  <ArrowLeft size={20} />
</button>

        </div>
      </div>
    </div>
  );
};

export default StoryModal;
