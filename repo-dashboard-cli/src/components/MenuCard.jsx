import React from "react";
import { Card, Icon, Metric, Text } from "@tremor/react";
import { PlusCircleIcon } from "@heroicons/react/outline";

const MenuCard = ({
  title,
  icon = PlusCircleIcon,
  color = "blue",
  text,
  onPress,
  metric,
}) => {
  return (
    <Card key={title} onClick={onPress} decoration="left" decorationColor={color} className="h-40">
      <div className="flex flex-row justify-between items-center">
        <Icon variant="light" icon={icon} size="md" color={color} />
        {metric ? <Metric className="">{metric}</Metric> : null}
      </div>
      <Metric className="mt-6">{title}</Metric>
      {text ? <Text className="mt-2">{text}</Text> : null}
    </Card>
  );
};

export default MenuCard;
