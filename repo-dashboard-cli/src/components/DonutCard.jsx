import React from "react";

import { Card, Title, DonutChart, Subtitle, Legend, Flex } from "@tremor/react";

const DonutCard = ({
  title = "NO TITLE",
  data = null,
  group = null,
  index = null,
  colors = ["slate", "violet", "indigo", "rose", "cyan", "amber"],
  subtitle,
  variant,
  categories,
}) => {
  return (
    <Card className="w-full h-full">
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <Title>{title}</Title>
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </div>
        <DonutChart
          variant={variant ? variant : "donut"}
          className="mt-6"
          data={data}
          index={index}
          category={group}
          colors={colors}
        />
        <Legend
          className="mt-3"
          categories={data.map((row) => {
            return row.name;
          })}
          colors={colors}
        />
      </div>
    </Card>
  );
};

export default DonutCard;
