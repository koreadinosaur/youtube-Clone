import React from "react";
import "../css/watch.css";
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
      <div className="watch__tags">
        {snippet.tags.length > 3
          ? snippet.tags.slice(0, 4).map((item) => {
              return `#${item} `;
            })
          : snippet.tags.map((item) => {
              return `#${item} `;
            })}
      </div>
      <div className="watch__title">{snippet.title}</div>

      <div className="watch__channel">{snippet.channelTitle}</div>
      <div className="watch__description">{snippet.description}</div>
    </section>
  );
};

export default Watch;
