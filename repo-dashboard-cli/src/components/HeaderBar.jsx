import { Bold, Button } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { resetAuthData } from "../redux/Auth";
import React from "react";
import UserPanel from "./UserPanel";
import OrganizationPanel from "./OrganizationPanel";

const HeaderBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(resetAuthData());
  };

  return (
    <div>
      <nav className="flex justify-between bg-gray-100 p-2 w-screen sticky top-0 z-50">
        <div className="flex items-center">
          <img
            className="mx-auto h-10 w-auto"
            src="/app-logo.png"
            alt="app-log"
          ></img>
        </div>
        {/* <div className="flex flex-wrap content-center">
          <OrganizationPanel />
        </div> */}
        <div className="flex items-center">
          <div className="flex flex-wrap content-center">
            <UserPanel />
          </div>
          <div className="flex flex-wrap content-center">
            <Button size="xs" onClick={onLogOut}>
              <Bold>{t("button.logOut")}</Bold>
            </Button>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default HeaderBar;
