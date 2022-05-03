import "./app.css";
import React, { useEffect, useState } from "react";
import Videos from "./component/videos.jsx";
import Search from "./component/search";
import response from "./response.json";
import data from "./data/data.json";

const App = (props) => {
  const YOUTUBE_APIKEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState([]);
  const handleSearch = (value) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=${YOUTUBE_APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("----------");
        console.log(data, value);
        const searchData = data.items.map((item) => {
          return item;
        });
        setVideos(searchData);
      })
      .catch((error) => console.log("error :", error));

    console.log(`검색했다`);
    // setVideos(data.items);
  };

  const getVideos = () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&key=${YOUTUBE_APIKEY}`;
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("getVideos");
        console.log(data);
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

  return (
    <div>
      <Search onSearch={handleSearch} />
      <Videos videos={videos} />
    </div>
  );
};

export default App;
