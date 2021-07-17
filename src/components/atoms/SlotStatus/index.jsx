import React from "react";
import { Status } from "../SlotStatus/status";
import { InformationTag } from "..";

export const SlotStatus = ({ status = "unavailable" }) => {
  const statusInfos = Status[status] || Status["unavailable"];
  return (
    <InformationTag color={statusInfos.color ? statusInfos.color : null} icon={statusInfos.icon ? statusInfos.icon : null} text={statusInfos.text} />
)}