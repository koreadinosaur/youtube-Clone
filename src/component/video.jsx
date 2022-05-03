import React from "react";

const Video = (props) => {
  return (
    <li className="video">
      <img
        src={props.video.thumbnails.default.url}
        alt="thumbnal"
        className="video__thumb"
      />
      <span className="video__title">{props.video.title}</span>
      <span className="video__channel">{props.video.channelTitle}</span>
    </li>
  );
};

export default Video;
