import { WebhookEvent } from "@line/bot-sdk";

import {lineClient} from "~/clients/line";
import {makeErrorMessage} from "~/libs/line/message";
import {messageEventHandler} from "~lineBot/handlers/message";

export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case "message":
        return await messageEventHandler(event);
      default:
    }
  } catch (err) {
    await lineClient.pushMessage(event.source.userId!, makeErrorMessage);
    throw new Error("handlers");
  }
}
