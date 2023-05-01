import React, { useContext } from "react";
import { Bold, Text } from "@tremor/react";
import { AppStateContext } from "../context/AppStateContext";

const UserPanel = () => {
  const { userInfo } = useContext(AppStateContext);

  const getUserPhoto = () => {
    let photo = "dashboard/photos/user_default.png";
    if (userInfo) {
      photo = `photos/${userInfo.photo}`;
    }
    return photo;
  };

  return (
    <div className="mr-6 flex items-center">
      <div className="m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
        <img src={getUserPhoto()} className="rounded-full" />
      </div>
      <div className="h-full">
        {userInfo ? (
          <>
            <Bold>{`${userInfo.firstName} ${userInfo.lastName}`}</Bold>
            <Text>{userInfo.role}</Text>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default UserPanel;
