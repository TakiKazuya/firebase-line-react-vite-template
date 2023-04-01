import { MessageEvent, TextEventMessage } from "@line/bot-sdk";

import {lineClient} from "~/clients/line";
import {makeMessage} from "~/libs/line/message";

export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  const { text } = event.message as TextEventMessage

  switch (event.source.type) {
    case "user": {
      await lineClient.replyMessage(event.replyToken, makeMessage(text));
      return;
    }
  }
}
