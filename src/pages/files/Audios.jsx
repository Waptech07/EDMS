import React from 'react'
import { motion } from 'framer-motion'
import SearchBar from '../../components/search/SearchBar'
import VideoCard from '../../components/cards/VideoCard'
import AudioCard from '../../components/cards/AudioCard'


const Audios = () => {
  return (
    <>
     <section>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-5 rounded-lg shadow-lg lg:my-28 mb-10 mx-5 lg:w-[70%] lg:fixed right-0 top-0 lg:h-[80%] overflow-y-auto"
        >
          <div className="flex justify-between my-2">
            <SearchBar size={"small"} placeholder={"Search Audios..."} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Audios</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            <AudioCard/>
            <AudioCard/>
            <AudioCard/>
            <AudioCard/>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Audios
