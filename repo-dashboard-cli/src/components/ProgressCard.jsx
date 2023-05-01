import { Card, Flex, ProgressBar, Text } from "@tremor/react";
import React from "react";

const ProgressCard = ({title = "No title", value = 50, color="blue" }) => {
  return (
    <Card className="w-full">
      <Flex>
        <Text>{title} &bull; {value}% </Text>
      </Flex>
      <ProgressBar percentageValue={value} color={color} className="mt-3" />
    </Card>
  );
};

export default ProgressCard;
