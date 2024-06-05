import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options";

const config = {
    botName: "Jack",
  initialMessages: [createChatBotMessage(`Hello world` , {
    widget:"options"
  })],
//   widgets : [
// {
//     widgetName : "options",
//     widgetFunc: (props) => <Options {...props} />,
   
// }, 

// ]

};

export default config;
