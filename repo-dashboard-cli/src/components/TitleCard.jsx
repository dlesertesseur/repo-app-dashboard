import React from "react";
import { Bold, Card, Flex, Icon, Metric } from "@tremor/react";
import { HandIcon } from "@heroicons/react/outline";

const TitleCard = ({ title = "NO TITLE", onPress, color = "blue", decoration }) => {
  return (
    <Card className={"h-32"} key={title} onClick={onPress} decoration={decoration} decorationColor={color}>
      <Flex className={"h-full"} alignItems="start" justifyContent="between">
        {/* <div className={"mr-4"}>
          <Icon icon={HandIcon} variant="solid" tooltip="Tooltip to place context information" />
        </div> */}
        <Metric>{title}</Metric>
      </Flex>
    </Card>
  );
};

export default TitleCard;
