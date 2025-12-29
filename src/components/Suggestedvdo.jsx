import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "../utils/abbreviateNumber";

function Suggestedvdo({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex gap-3 cursor-pointer">
        <div className="relative h-24 w-40 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
            alt=""
          />
          {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
        </div>

        <div className="flex flex-col text-sm">
          <p className="font-semibold line-clamp-2">{video?.title}</p>

          <span className="flex items-center text-xs text-gray-600 mt-1">
            {video?.author?.title}
            {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="ml-1 text-xs" />
            )}
          </span>

          <div className="flex text-gray-500 text-xs mt-1">
            <span>{abbreviateNumber(video?.stats?.views, 1)} views</span>
            <span className="mx-1">•</span>
            <span>{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Suggestedvdo;
