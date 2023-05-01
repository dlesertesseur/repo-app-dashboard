import { Grid, Col, Text, Title, Flex, Button, Card, Metric } from "@tremor/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPanelByName } from "../../api/panels.api";
import BarChartCard from "../../components/BarChartCard";
import DonutCard from "../../components/DonutCard";
import BarListCard from "../../components/BarListCard";
import NumberCard from "../../components/NumberCard";

const AssociatePanel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [panel, setPanel] = useState(null);

  const onBack = () => {
    navigate(-1);
  };

  const getData = async () => {
    const params = { name: "associates" };
    const ret = await getPanelByName(params);

    let group = t("panels.shifts.KPI4.group");
    let format = ret.data.annualEvolution.map((row) => {
      const obj = {};
      obj["name"] = row.year;
      obj[group] = row.value;
      return obj;
    });
    ret.data.annualEvolution = format;

    group = t("panels.shifts.KPI5.group");
    format = ret.data.byIndustry.map((row) => {
      const obj = {};
      obj["name"] = row.industry;
      obj[group] = row.value;
      return obj;
    });
    ret.data.byIndustry = format;

    //KPI6
    format = ret.data.satisfaction.map((row) => {
      const obj = {};
      obj["name"] = row.level;
      obj["value"] = row.value;
      return obj;
    });
    ret.data.satisfaction = format;

    //KPI7
    format = ret.data.incomeDistribution.map((row) => {
      const obj = {};
      obj["name"] = row.type;
      obj["value"] = row.value;
      return obj;
    });
    ret.data.incomeDistribution = format;

    //KPI8
    format = ret.data.categories.map((row) => {
      const obj = {};
      obj["name"] = row.category;
      obj["value"] = row.value;
      return obj;
    });
    ret.data.categories = format;

    setPanel(ret);
  };

  useEffect(() => {
    //getData();
  }, []);

  return (
    <div className="bg-blue-100 p-6 sm:p-10 w-screen">
      <Flex dir="row" alignItems="center" justifyContent="between">
        <div>
          <Title>{t("panels.shifts.title")}</Title>
          <Text>{t("panels.shifts.description")}</Text>
        </div>
        <div>
          <Button size="xs" onClick={onBack}>
            {t("button.back")}
          </Button>
        </div>
      </Flex>

      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-4 mt-6">
        <Col className="">
          <NumberCard metric={panel?.data.total} title={t("panels.shifts.KPI1.title")} />
        </Col>
        <Col className="">
          <NumberCard metric={panel?.data.averageAnnualIncome} title={t("panels.shifts.KPI2.title")} />
        </Col>
        <Col className="">
          <NumberCard metric={panel?.data.averageAnnualTerminations} title={t("panels.shifts.KPI3.title")} />
        </Col>

        <Col numColSpan={1}>
          <DonutCard
            title={t("panels.shifts.KPI5.title")}
            group={t("panels.shifts.KPI5.group")}
            index={"name"}
            data={panel ? panel.data.byIndustry : []}
          />
        </Col>

        <Col numColSpan={1} numColSpanLg={2}>
          <BarChartCard
            group={[t("panels.shifts.KPI4.group")]}
            title={t("panels.shifts.KPI4.title")}
            data={panel?.data.annualEvolution}
          />
        </Col>

        <Col numColSpan={1}>
          <div className="">
            <BarListCard
              title={t("panels.shifts.KPI6.title")}
              entityText={t("panels.shifts.KPI6.level")}
              valueText={t("panels.shifts.KPI6.value")}
              data={panel ? panel.data.satisfaction : []}
            />
          </div>
        </Col>
        <Col numColSpan={1}>
          <div className="">
            <BarListCard
              title={t("panels.shifts.KPI7.title")}
              entityText={t("panels.shifts.KPI7.level")}
              valueText={t("panels.shifts.KPI7.value")}
              data={panel ? panel.data.incomeDistribution : []}
            />
          </div>
        </Col>
        <Col numColSpan={1}>
          <div className="">
            <BarListCard
              title={t("panels.shifts.KPI8.title")}
              entityText={t("panels.shifts.KPI8.level")}
              valueText={t("panels.shifts.KPI8.value")}
              data={panel ? panel.data.categories : []}
            />
          </div>
        </Col>
      </Grid>
    </div>
  );
};

export default AssociatePanel;
