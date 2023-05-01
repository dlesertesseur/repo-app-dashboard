import TotalCard from "../../components/TotalCard";
import ProgressCard from "../../components/ProgressCard";
import { Grid, Col, Button, Flex, Metric, Subtitle } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPanelByName } from "../../api/panels.api";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateContext";

const cardColor = "blue";

const ShiftsPanel = () => {
  const [data, setData] = useState(null);
  const { selectedDate, userInfo, selectedRetailer, selectedStore } =
    useContext(AppStateContext);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const onPress = () => {
    //navigate("shifts");
    navigate("default");
  };

  const onPressDefault = () => {
    navigate("default");
  };

  const onBack = () => {
    navigate(-1);
  };

  const getData = async () => {
    const params = {
      organization: userInfo.organization.id,
      date: selectedDate,
      retailer: selectedRetailer,
      store: selectedStore,
      name: "shifts",
    };

    const ret = await getPanelByName(params);
    setData(ret);
  };

  useEffect(() => {
    getData();
  }, [selectedDate, selectedRetailer, selectedStore]);

  const getMetric = (kpi) => {
    let ret = 0;
    if (data) {
      ret = data[kpi];
    }

    return ret;
  };

  return (
    <div className="px-10 pt-2 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Metric>{t("panels.shifts.title")}</Metric>
          <Subtitle>{t("panels.shifts.description")}</Subtitle>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI1.title")}
            onPress={onPress}
            color={cardColor}
            decoration={"left"}
            metric={getMetric("KPI1")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI2.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            metric={getMetric("KPI2")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI3.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            metric={getMetric("KPI3")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI4.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            metric={getMetric("KPI4")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI5.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            badge={t("panels.shifts.KPI5.badge")}
            badgeColor={"yellow"}
            metric={getMetric("KPI5")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI6.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            badge={t("panels.shifts.KPI6.badge")}
            badgeColor={"yellow"}
            metric={getMetric("KPI6")}
          />
        </Col>
        <Col numColSpan={1} numColSpanSm={2} numColSpanLg={3}>
          <ProgressCard
            title={t("panels.shifts.KPI10.title")}
            value={getMetric("KPI10")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI7.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            badge={t("panels.shifts.KPI7.badge")}
            badgeColor={"red"}
            metric={getMetric("KPI7")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI8.title")}
            onPress={onPressDefault}
            color={cardColor}
            decoration={"left"}
            badge={t("panels.shifts.KPI8.badge")}
            badgeColor={"green"}
            metric={getMetric("KPI8")}
          />
        </Col>
        <Col>
          <TotalCard
            title={t("panels.shifts.KPI9.title")}
            onPress={onPressDefault}
            color={cardColor}
            badge={t("panels.shifts.KPI9.badge")}
            decoration={"left"}
            badgeColor={"blue"}
            metric={getMetric("KPI9")}
          />
        </Col>
      </Grid>
    </div>
  );
};

export default ShiftsPanel;
