import React from "react";
import { Bold, Card, Flex, Metric } from "@tremor/react";
import { useTranslation } from "react-i18next";

const NumberCard = ({ title = "NO TITLE", metric = 0, onPress, color = "blue", decoration }) => {
  const { t } = useTranslation();
  return (
    <Card key={title} onClick={onPress} decoration={decoration} decorationColor={color}>
      <Bold>{title}</Bold>
      <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
        <Metric>
          {metric}
        </Metric>
      </Flex>
    </Card>
  );
};

export default NumberCard;
