"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

interface IComponentsVideoPlayerProps {}

const ComponentsVideoPlayer: React.FunctionComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
      <div className="containerVideoPlayers">
        <ReactPlayer
          url="/videos/videoAcierto.mp4"
          playing
          loop
          controls
          muted
          width="100%"
          height="100%"
        />
      </div>
  );
};

export default ComponentsVideoPlayer;
