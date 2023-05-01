import React from "react";
import {
  Badge,
  BadgeDelta,
  Bold,
  Card,
  Flex,
  Metric,
  Title,
} from "@tremor/react";
import { useTranslation } from "react-i18next";

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const TotalCard = ({
  title = "NO TITLE",
  metric = 0,
  onPress,
  color = "blue",
  decoration,
  badge = null,
  badgeColor = "blue"
}) => {
  const { t } = useTranslation();
  return (
    <Card
      key={title}
      onClick={onPress}
      decoration={decoration}
      decorationColor={color}
    >
      <Flex justifyContent="between">
        <Title>{title}</Title>
        {badge ? <Badge color={badgeColor} size={"xl"}>{badge}</Badge> : null}
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3"
      >
        <Metric>{metric}</Metric>
      </Flex>
    </Card>
  );
};

export default TotalCard;
