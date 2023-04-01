import {FlexMessage, Message} from "@line/bot-sdk";

export const makeMessage = (text: string): Message => {
  return {
    type: "text",
    text: text.replace(/<br>/g, "\n")
  }
}

export const makeErrorMessage: FlexMessage = {
  type: "flex",
  altText: "エラーが発生しました",
  contents: {
    type: "bubble",
    direction: "ltr",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "エラーが発生しました",
          align: "start",
          wrap: true
        }
      ]
    },
    footer: {
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "button",
          action: {
            type: "uri",
            label: "報告する",
            uri: "https://linecorp.com"
          },
          style: "primary"
        }
      ]
    }
  }
}
