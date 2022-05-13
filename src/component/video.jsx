import React from "react";
import "../css/video.css";
const Video = ({ video, video: { snippet }, onClickWatch }) => {
  const handleWatch = () => {
    onClickWatch(video);
  };
  return (
    <li className="video">
      <div className="thumbnailContainer">
        <img
          src={snippet.thumbnails.default.url}
          alt="thumbnal"
          className="video__thumb"
          onClick={handleWatch}
        />
      </div>
      <div className="title">
        <span className="video__title">{snippet.title}</span>
        <span className="video__channel">{snippet.channelTitle}</span>
      </div>
    </li>
  );
};

export default Video;
