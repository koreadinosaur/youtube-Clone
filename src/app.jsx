import "./app.css";
import React, { useEffect, useState } from "react";
import Videos from "./component/videos.jsx";
import Search from "./component/search";
import Watch from "./component/watch";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSearch = (value) => {
    youtube.handleSearch(value).then((videos) => setVideos(videos));
    setSelectedVideo(null);
  };

  useEffect(() => {
    youtube.getVideos().then((videos) => setVideos(videos));
  }, []);
  const handleWatch = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };
  return (
    <div className="componentContainer">
      <section className="search">
        <Search onSearch={handleSearch} />
      </section>
      <section className={selectedVideo === null ? "List" : "sideList"}>
        {selectedVideo && (
          <div className="videoDetail">
            <Watch video={selectedVideo} />
          </div>
        )}
        <div className="videoSideList">
          <Videos videos={videos} onClickWatch={handleWatch} />
        </div>
      </section>
    </div>
  );
};

export default App;
