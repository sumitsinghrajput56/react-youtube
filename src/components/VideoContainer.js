import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  console.log("videos",videos);

  useEffect(() => {
    getVideos();
  }, []);

const getVideos = async () => {
  try {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    if (json.error) {
      console.error("API Error:", json.error.message);
      return;
    }

    setVideos(json.items);
  } catch (err) {
    console.log("Fetch Error:", err);
  }
};


  return <div className="flex flex-wrap">
    {
        videos.map((video) => (
            <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
        ))
    }
  </div>;
};

export default VideoContainer;
