import React from "react";
import { Card, Icon, Metric, Text } from "@tremor/react";
import { PlusCircleIcon } from "@heroicons/react/outline";

const MenuCard = ({ title, icon = PlusCircleIcon, color="blue", text, onPress }) => {
  return (
    <Card key={title} onClick={onPress}>
      <Icon variant="light" icon={icon} size="lg" color={color} />
      <Metric className="mt-6">{title}</Metric>
      {text ? <Text className="mt-2">{text}</Text> : null}
    </Card>
  );
};

export default MenuCard;
