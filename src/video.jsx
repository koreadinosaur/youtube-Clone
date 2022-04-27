import React from "react";
import Videos from "./videos";

const Video = (props) => {
  return <li>{props.video.title}</li>;
};

export default Video;
