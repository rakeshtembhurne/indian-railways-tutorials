import React from 'react';

export default ({ videoId, title }) => {
  return (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe 
      title={title}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
      src={`https://player.vimeo.com/video/${videoId}`}
      frameBorder = "0"
      allow = "autoplay; fullscreen"
      allowfullscreen />
    </div>
  );
};