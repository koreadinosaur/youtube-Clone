import React from "react";
import Video from "./video.jsx";

const Videos = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <Video video={video} />
      ))}
    </ul>
  );
};

export default Videos;
