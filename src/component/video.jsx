import React from "react";
import "../css/video.css";
const Video = (props) => {
  const handleWatch = () => {
    props.onClickWatch(props.video);
  };
  return (
    <li className="video">
      <img
        src={props.video.thumbnails.default.url}
        alt="thumbnal"
        className="video__thumb"
        onClick={handleWatch}
      />
      <span className="video__title">{props.video.title}</span>
      <span className="video__channel">{props.video.channelTitle}</span>
    </li>
  );
};

export default Video;
