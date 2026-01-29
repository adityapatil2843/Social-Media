import React, { useEffect, useState } from 'react'
import {dummyPostsData} from '../assets/assets.js'
import Loading from '../components/Loading.jsx'
import StoriesBar from '../components/StoriesBar.jsx'
import moment from 'moment'
const Feed = () => {

  const [feed, setFeed] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async () => {
    setFeed(dummyPostsData)
    setLoading(false)
  }

  useEffect(()=>{
    fetchFeeds()
  },[])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex
    items-start justify-center xl:gap-8'>
      {/*stories and post list */}
      <div>
        <StoriesBar/>
        <div className='p-4 space-y-6'>
          list of post
        </div>
      </div>
      {/**Right sidebar */}
      <div>
        <div><h1>sponser</h1></div>
        <h1>Recent Messages</h1>
      </div>
    </div>
  ) : <Loading/>
}

export default Feed
