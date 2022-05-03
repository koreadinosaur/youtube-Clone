import React from "react";
import Video from "./video.jsx";
import "../css/videos.css";

const Videos = (props) => {
  return (
    <ul className="videoList">
      {props.videos.map((video) => (
        <Video video={video.snippet} key={video.id.videoId} />
      ))}
    </ul>
  );
};

export default Videos;
