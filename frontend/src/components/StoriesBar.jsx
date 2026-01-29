import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets'
import { Plus } from 'lucide-react'

const StoriesBar = () => {
  const [stories, setStories] = useState([])

  const fetchStories = async () => {
    setStories(dummyStoriesData)
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">

        {/* Add story card */}
        <div className="rounded-lg shadow-sm min-w-[120px] max-w-[120px] aspect-[3/4]
        cursor-pointer hover:shadow-lg transition-all duration-200
        border-2 border-dashed border-indigo-300 bg-gradient-to-b
        from-indigo-50 to-white">
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium">Create Story</p>
          </div>
        </div>

        {/* Story cards */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow min-w-[120px] max-w-[120px] aspect-[3/4]
            cursor-pointer hover:shadow-lg transition-all duration-200
            bg-gradient-to-b from-indigo-500 to-purple-600
            hover:from-indigo-700 hover:to-purple-800 active:scale-95"
          >
            <img
              src={story.user.profile_picture}
              alt="profile"
              className="absolute top-3 left-3 w-8 h-8 rounded-full
              ring-2 ring-white shadow z-10"
            />

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs font-medium truncate">
                {story.content}
              </p>
              <p className="text-[10px] text-white/70">
                {story.createdAt}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default StoriesBar
