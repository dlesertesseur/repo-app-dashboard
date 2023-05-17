import { useEffect, useContext, useState } from "react";
import { Grid, Col } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findUserById } from "../../api/user.api";
import { AppStateContext } from "../../context/AppStateContext";

import MenuCard from "../../components/MenuCard";
import { UsersIcon } from "@heroicons/react/outline";

import { getAllIndicators } from "../../api/indicators.api";

const MenuPanel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth.value);
  const { setUserInfo } = useContext(AppStateContext);
  const [indicators, setIndicators] = useState(null);

  // const onPress = () => {
  //   navigate("shifts");
  // };

  // const onPressDefault = () => {
  //   navigate("default");
  // };

  // const onNavigate = (screen) => {
  //   navigate(screen);
  // };

  const getData = async () => {
    const params = { id: user.id };
    const ret = await findUserById(params);
    const indicators = await getAllIndicators();

    setUserInfo(ret);

    setIndicators(indicators[0].indicador);
  };

  const onDetail = (title, detail) => {
    navigate("detail", {
      state: {
        title: title,
        detail: detail,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [user.id]);

  return (
    <div className="px-10 pt-2 w-screen">
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        {indicators?.map((indicator) => {
          return (
            <Col key={indicator.indicador}>
              <MenuCard
                title={indicator.descripcion}
                metric={indicator.cantidad}
                onPress={() => {
                  onDetail(indicator.descripcion, indicator.detalle);
                }}
                icon={UsersIcon}
                color={"blue"}
              />
            </Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default MenuPanel;
