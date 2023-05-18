import React, { useContext } from "react";
import { Title } from "@tremor/react";
import { AppStateContext } from "../context/AppStateContext";

const OrganizationPanel = () => {
  const { userInfo } = useContext(AppStateContext);

  const getLogo = () => {
    let logo = null;
    if (userInfo) {
      logo = `logos/${userInfo?.organization.logo}`;
    }
    return logo;
  };

  return (
    <div className="mr-6 flex items-center">
      {getLogo() ? (
        <div className="m-1 h-full flex justify-center items-center ">
          <img src={getLogo()} className="h-6" />
        </div>
      ) : (
        <div className="h-full m-1">
          {userInfo ? (
            <Title className="items-center">
              {userInfo.organization.name}
            </Title>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default OrganizationPanel;
