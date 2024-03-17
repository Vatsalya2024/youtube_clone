import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60"
        channel="Messi"
        verified
        subs="600K"
        noOfVideos={280}
        description="Great Messi Compilation"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="World Cup Final 2022"
        timestamp="1 hour ago"
        channel="Messi"
        title="The World Cup Final"
        image="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/ezgif-sixteen_nine_207.jpg?size=948:533"
      />
      <VideoRow
        views="20M"
        subs="600K"
        description="Champions Leaugue Final"
        timestamp="10 days ago"
        channel="Messi"
        title="The Champions Leaugue Final 2015"
        image="https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2015/11/25/1738986-36777946-2560-1440.jpg"
      />
      <VideoRow
        views="3M"
        subs="600K"
        description="Debut of Messi"
        timestamp="10 years ago"
        channel="Messi"
        title="Debut of Messi"
        image="https://staticg.sportskeeda.com/editor/2019/01/0b7b6-15487684614586-800.jpg"
      />
      <VideoRow
        views="50M"
        subs="600K"
        description="Messi Neymar Compilation"
        timestamp="1 year ago"
        channel="Messi"
        title="The Magical Duo"
        image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcce29b0c93b11a85/6368c93944a1047271af5e2a/GettyImages-1244220646.jpg?auto=webp&format=jpg&quality=100"
      />
    </div>
  );
}

export default SearchPage;
