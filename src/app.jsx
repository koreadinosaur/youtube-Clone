import "./app.css";
import React, { useEffect, useState } from "react";
import Videos from "./component/videos.jsx";
import Search from "./component/search";
import Watch from "./component/watch";

const App = (props) => {
  const YOUTUBE_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSearch = (value) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=${YOUTUBE_APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const searchData = data.items.map((item) => {
          return { ...item, id: item.id.videoId };
        });
        setVideos(searchData);
      })
      .catch((error) => console.log("error :", error));
    setSelectedVideo(null);

    // setVideos(data.items);
  };

  const getVideos = () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${YOUTUBE_APIKEY}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const videosInfo = data.items.map((item) => {
          return item;
        });
        setVideos(videosInfo);
      })
      .catch((error) => console.log("error :", error));
  };
  useEffect(() => {
    // setVideos(response.items);
    getVideos();
  }, []);
  const handleWatch = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
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
