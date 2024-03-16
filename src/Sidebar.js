import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import {
  ExpandMoreOutlined,
  OndemandVideo,
  ThumbUpAltOutlined,
  WatchLater,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your Videos" />
      <SidebarRow Icon={WatchLater} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
