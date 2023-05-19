import { useEffect, useContext, useState } from "react";
import { Grid, Col, Button } from "@tremor/react";
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

  const viewOnMap = () => {
    navigate("workingInStore");
  };

  return (
    <div className="px-10 w-screen">
      <div className="flex flex-row h-10 items-center justify-start">
        <div>
          <Button size="xs" variant="secondary" onClick={viewOnMap} className="">
            {t("button.viewOnMap")}
          </Button>
        </div>
      </div>
      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-2">
        {indicators ? (
          indicators?.map((indicator) => {
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
          })
        ) : null}
      </Grid>
    </div>
  );
};

export default MenuPanel;
