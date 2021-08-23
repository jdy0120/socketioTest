import React from "react";
import { io } from "socket.io-client";

const socket = io("/");

const Entrance = () => {
  const clickButton = () => {
    const msg = "I'm Client";
    socket.emit("message", msg);
  };

  React.useEffect(() => {
    socket.on("Welcome", (msg) => {
      console.log(msg);
    });
  }, []);
  return <button onClick={clickButton}>{"입장"}</button>;
};

export default Entrance;
