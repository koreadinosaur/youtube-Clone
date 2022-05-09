import React from "react";

const Watch = ({ video, video: { snippet } }) => {
  return (
    <section className="watch">
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="watch__title">{snippet.title}</div>
      <div className="watch__channel">{snippet.channelTitle}</div>
      <div className="watch__description">{snippet.description}</div>
    </section>
  );
};

export default Watch;
