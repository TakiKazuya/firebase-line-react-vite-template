import {Client} from "@line/bot-sdk";

import {lineConfig} from "~/configs/line";

export const lineClient = new Client(lineConfig);
