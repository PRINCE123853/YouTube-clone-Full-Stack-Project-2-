import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "../utils/abbreviateNumber";
import Suggestedvdo from "./Suggestedvdo";

function PlayingVideo() {
  const [video, setVideo] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchVideoDetails();
      fetchRelatedVideo();
    }
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`)
      .then((res) => setVideo(res))
      .catch(console.error);
  };

  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`)
      .then((res) => setRelatedVideo(res?.contents || []))
      .catch(console.error);
  };

  return (
    <div className="flex justify-start mt-16 bg-white">
      <div className="w-full max-w-[1600px] flex px-6 gap-6">

        {/* LEFT */}
        <div className="w-full lg:w-[65%]">
          <div className="w-full h-[220px] md:h-[500px] bg-black rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              className="w-full h-full"
              allowFullScreen
              title="YouTube player"
            />
          </div>

          <h1 className="text-lg md:text-xl font-semibold mt-4">
            {video?.title}
          </h1>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <img
                src={video?.author?.avatar?.[0]?.url}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div>
                <p className="font-semibold">{video?.author?.title}</p>
                <p className="text-xs text-gray-500">
                  {video?.author?.stats?.subscribersText}
                </p>
              </div>
              <button className="ml-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                Subscribe
              </button>
            </div>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full text-sm">
                <AiOutlineLike />
                {abbreviateNumber(video?.stats?.likes, 2)}
              </div>
              <div className="bg-gray-200 px-4 py-2 rounded-full text-sm">
                {abbreviateNumber(video?.stats?.views, 2)} Views
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 mt-4 text-sm whitespace-pre-line">
            {video?.description}
          </div>

          <div className="mt-4 font-semibold text-lg">
            {video?.stats?.comments} Comments
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block w-[35%] space-y-4">
          {relatedVideo.map((item, index) => {
            if (item?.type !== "video") return null;
            return <Suggestedvdo key={index} video={item.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
