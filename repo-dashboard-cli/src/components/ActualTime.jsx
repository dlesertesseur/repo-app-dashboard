import { Bold, Flex, Text, Title } from "@tremor/react";
import React, { useState } from "react";

const ActualTime = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime);

  return (
    <Flex
      justifyContent="center"
      className=" h-full p-1 w-24 border-2 border-slate-200 bg-white rounded-md"
    >
      <Title>{ctime}</Title>
    </Flex>
  );
};

export default ActualTime;
