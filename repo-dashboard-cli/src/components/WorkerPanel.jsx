import React from "react";
import { Bold, Text } from "@tremor/react";
import { config } from "../config/Config";

const WorkerPanel = ({ name, activity, photo }) => {
  const getUserPhoto = (userPhoto) => {
    let photo = "photos/user_default.png";
    if (userPhoto) {
      photo = config.URL_BASE_PHOTO + userPhoto;
    }
    return photo;
  };

  return (
    <div className="mr-6 flex items-center">
      <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
        <img src={getUserPhoto(photo)} className="rounded-full" />
      </div>
      <div className="h-full">
        <Bold>{`${name}`}</Bold>
        <Text>{activity}</Text>
      </div>
    </div>
  );
};

export default WorkerPanel;
