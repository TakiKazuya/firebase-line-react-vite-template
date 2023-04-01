import { MessageEvent } from "@line/bot-sdk";
import {logger} from "firebase-functions";

import {messageTextHandler} from "~lineBot/handlers/message/text";

export const messageEventHandler = async (event: MessageEvent): Promise<void> => {
  try {
    switch (event.message.type) {
      case "text":
        return await messageTextHandler(event)
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message)
      throw new Error(error.message);
    }
  }
}
