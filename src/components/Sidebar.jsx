import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";//extra
import { RiPlayList2Line } from "react-icons/ri";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from 'react-icons/bi';
import { GiLinkedRings } from 'react-icons/gi';//extra
import { AiOutlineHistory, AiOutlineLike } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";


function Sidebar() {
  const sidebarItems=[
{
  id:1,
  name:"Home",
  icon:<GoHome/>
},
{
  id:2,
  name:"Shorts",
  icon:<SiYoutubeshorts/>
},
{
  id:3,
  name:"Subscription",
  icon:<MdOutlineSubscriptions/>
}
  ];
 
    const sidebarItems2=[
{
  id:1, 
  name:"Your channel",
  icon:<GoHome/>
},
{
  id:2,
  name:"History",
  icon:<AiOutlineHistory/>
},
{
  id:3,
  name:"Playlists",
  icon:<RiPlayList2Line />
},
{
  id:4,
  name:"Your Videos",
  icon:<BiVideo/>
},
{
  id:5,
  name:"Watch later",
  icon:<MdWatchLater/>
},
{
  id:6,
  name:"Liked videos",
  icon:<AiOutlineLike/>
},

  ];

const sidebarItems3 = [
  {
    id: 1,
    name: "Trending",
    icon: <HiOutlineTrendingUp />
  },
  {
    id: 2,
    name: "Shopping",
    icon: <HiOutlineShoppingBag />
  },
  {
    id: 3,
    name: "Music",
    icon: <PiMusicNoteLight />
  },
  {
    id: 4,
    name: "Films",
    icon: <PiFilmSlateLight />
  },
  {
    id: 5,
    name: "Live",
    icon: <CgMediaLive />
  },
  {
    id: 6,
    name: "Gaming",
    icon: <SiYoutubegaming />
  },
  {
    id: 7,
    name: "News",
    icon: <FaRegNewspaper />
  },
  {
    id: 8,
    name: "Sport",
    icon: <TfiCup />
  },
  {
    id: 9,
    name: "Courses",
    icon: <PiLightbulbLight />
  },
  {
    id: 10,
    name: "Fashion & beauty",
    icon: <SiYoutubekids />
  },
  {
    id: 11,
    name: "Podcasts",
    icon: <MdPodcasts />
  }
];

 const sidebarItems4 = [
  {
    id: 1,
    name: "Youtube Premium",
    icon: <FaYoutube />
  },
  {
    id: 2,
    name: "Youtube Studio",
    icon: <SiYoutubestudio />
  },
  {
    id: 3,
    name: "Youtube Music",
    icon: <SiYoutubemusic />
  },
  {
    id: 4,
    name: "Youtube Kids",
    icon: <SiYoutubekids />
  },
];

const sidebarItems5 = [
  {
    id: 1,
    name: "Settings",
    icon: <FiSettings />
  },
  {
    id: 2,
    name: "Report history",
    icon: <AiOutlineHistory />
  },
  {
    id: 3,
    name: "Help",
    icon: <MdHelpOutline />
  },
  {
    id: 4,
    name: "Send feedback",
    icon: <PiLightbulbLight />
  }
];


  return (

   <div className='px-6 w-[29%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden '> 
{/* Home */}
    <div className=' space-y-3 items-center'>

    {
      sidebarItems.map((item)=>{ 
      return(
          <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer'> 
          {item.icon}
           </div>
      <span className='cursor-pointer'>{item.name}</span>
      </div>
      )
      })
    }

    </div>
    <br />
<hr />
{/* You */}
<div className='mt-4 space-y-3 items-center'>
 <div className='flex items-center space-x-2'>
  <h1>You</h1>
  <FaChevronRight/>
 </div>
    {
      sidebarItems2.map((item)=>{ 
      return(
          <div className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer'> 
          {item.icon}
           </div>
      <span className='cursor-pointer'>{item.name}</span>
      </div>
      )
      })
    }

    </div>
    <br />
<hr />

{/* Explore */}
<div className='mt-4 space-y-3 items-center'>
 <div className='items-center space-x-2'>
  <h1 className='font-semibold'>Explore</h1>
 </div>
    {
      sidebarItems3.map((item)=>{ 
      return(
          <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer'> 
          {item.icon}
           </div>
      <span className='cursor-pointer'>{item.name}</span>
      </div>
      )
      })
    }

    </div>
    <br />
    <hr />
    {/* More section */}
    <div className='mt-4 space-y-3 items-center'>
 <div className='items-center space-x-2'>
  <h1 className='font-semibold'>More From Youtube</h1>
 </div>
    {
      sidebarItems4.map((item)=>{ 
      return(
          <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer text-red-500'> 
          {item.icon}
           </div>
      <span className='cursor-pointer'>{item.name}</span>
      </div>
      )
      })
    }

    </div>
<br />
<hr />


    <div className='mt-4 space-y-3 items-center'>
 <div className='items-center space-x-2'>
 </div>
    {
      sidebarItems5.map((item)=>{ 
      return(
          <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
        <div className='text-xl cursor-pointer '> 
          {item.icon}
           </div>
      <span className='cursor-pointer'>{item.name}</span>
      </div>
      )
      })
    }
<hr />
    </div> <br />
<span className='text-xs font-semibold text-gray-500'>About Press Copyright<br />Contact usbCreators<br />Advertise Developers<br /> <br />
<p>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features</p>
</span>
<br />
<p className='text-xs text-gray-800 mt-1'>© Prince Kumar (B-tech CSE)</p>
</div>
  )
}

export default Sidebar;
