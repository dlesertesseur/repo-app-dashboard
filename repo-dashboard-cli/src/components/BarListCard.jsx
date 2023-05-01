import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";
import React from "react";


const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString() + " %";
  };

const BarListCard = ({title="NO TITLE", entityText, valueText, data}) => {
  return (
    <Card className="w-full">
      <Title>{title}</Title>
      <Flex className="mt-4">
        <Text>
          <Bold>{entityText}</Bold>
        </Text>
        <Text>
          <Bold>{valueText}</Bold>
        </Text>
      </Flex>
      <BarList data={data} className="mt-2" valueFormatter={dataFormatter} />
    </Card>
  );
};

export default BarListCard;
