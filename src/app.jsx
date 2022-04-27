import "./app.css";
import React, { useEffect, useState } from "react";
import Videos from "./videos.jsx";

const App = (props) => {
  const YOUTUBE_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);
  const getVideos = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${YOUTUBE_APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const videosInfo = data.items.map((item) => {
          return item.snippet;
        });
        setVideos(videosInfo);
      });
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
};

export default App;
