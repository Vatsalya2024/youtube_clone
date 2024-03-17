import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard';
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Messi the Goat"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
          channel="Leo Messi"
          image="https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg"
        />
        <VideoCard
          title="Neymar"
          views="10M Views"
          timestamp="5 days ago"
          channelImage="https://b.fssta.com/uploads/application/soccer/headshots/713.png"
          channel="Neymar"
          image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8023c43d51d527b2/64dbcba3a3d77be72013a3b8/twitter_F3l7Vq4WYAIOMHb_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60"
        />
        <VideoCard
          title="Suarez"
          views="10M Views"
          timestamp="5 days ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/6/6d/Luis_Su%C3%A1rez_2018.jpg"
          channel="Suarez"
          image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcb3842bf53e0ab48/60db86c6454f930f33f4df2c/029b3863c5ecf4e87843cd30367e9ac324b87aef.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        />
        <VideoCard
          title="Not Today"
          views="100M Views"
          timestamp="15 days ago"
          channelImage="https://i.pinimg.com/736x/18/2f/f1/182ff121fe4b629719e01820ecc5c949.jpg"
          channel="BTS"
          image="https://i1.sndcdn.com/artworks-000628932154-0qherc-t500x500.jpg"
        />
     
      </div>
    </div>
  );
}

export default RecommendedVideos;
