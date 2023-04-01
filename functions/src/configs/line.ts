import {ClientConfig, MiddlewareConfig} from "@line/bot-sdk";

import {LINE_CHANNEL_ACCESS_TOKEN, LINE_CHANNEL_SECRET} from "~/utils/secrets";

export const lineMiddlewareConfig: MiddlewareConfig = {
  channelSecret: LINE_CHANNEL_SECRET,
};

export const lineConfig: ClientConfig = {
  ...lineMiddlewareConfig,
  channelAccessToken: LINE_CHANNEL_ACCESS_TOKEN,
};
