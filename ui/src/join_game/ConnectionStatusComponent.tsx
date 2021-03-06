import React from "react";

import { useSelector } from "react-redux";

import { connectionStatusSelector } from "./slice";
import { ConnectionStatus } from "./types";

const ConnectionStatusComponent = () => {
  const connection_status = useSelector(connectionStatusSelector);

  return <p>Connection Status: {ConnectionStatus[connection_status]}</p>;
};

export default ConnectionStatusComponent;
