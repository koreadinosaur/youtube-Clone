import React from "react";

const Video = (props) => {
  return (
    <li className="video">
      <img
        src={props.video.thumbnails.default.url}
        alt="thumbnal"
        srcset=""
        className="video__thumb"
      />
      <span className="video__title">{props.video.title}</span>
    </li>
  );
};

export default Video;
