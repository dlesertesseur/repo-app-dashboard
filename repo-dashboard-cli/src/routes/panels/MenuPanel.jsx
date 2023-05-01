import { useEffect, useContext } from "react";
import { Grid, Col } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findUserById } from "../../api/user.api";
import { AppStateContext } from "../../context/AppStateContext";
import MenuCard from "../../components/MenuCard";
import {
  ChartBarIcon,
  InboxIcon,
  ShoppingBagIcon,
  UsersIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const MenuPanel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth.value);
  const { setUserInfo } = useContext(AppStateContext);

  const onPress = () => {
    navigate("shifts");
  };

  const onPressDefault = () => {
    navigate("default");
  };

  const getUserInfo = async () => {
    const params = { id: user.id };
    const ret = await findUserById(params);
    setUserInfo(ret);
  };

  useEffect(() => {
    getUserInfo();
  }, [user.id]);

  return (
    <div className="px-10 pt-2 w-screen">
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        <Col>
          <MenuCard
            title={t("panels.menu.section1.title")}
            onPress={onPress}
            icon={UsersIcon}
            color={"blue"}
          />
        </Col>
        <Col>
          <MenuCard
            title={t("panels.menu.section2.title")}
            onPress={onPressDefault}
            icon={InboxIcon}
            color={"red"}
          />
        </Col>
        <Col>
          <MenuCard
            title={t("panels.menu.section3.title")}
            onPress={onPressDefault}
            icon={ShoppingBagIcon}
            color={"green"}
          />
        </Col>
        <Col>
          <MenuCard
            title={t("panels.menu.section4.title")}
            onPress={onPressDefault}
            icon={ViewListIcon}
            color={"orange"}
          />
        </Col>
        <Col>
          <MenuCard
            title={t("panels.menu.section5.title")}
            onPress={onPressDefault}
            icon={ChartBarIcon}
            color={"teal"}
          />
        </Col>
      </Grid>
    </div>
  );
};

export default MenuPanel;
