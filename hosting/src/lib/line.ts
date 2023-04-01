import { Profile } from "@liff/get-profile";
import liff from "@line/liff";
import { LiffMockPlugin } from "@line/liff-mock";

import { LIFF_ID } from "../utils/secrets";

export const liffIsInClient = (): boolean => {
  if (process.env.NODE_ENV === "development") return true;

  return liff.isInClient();
};

export const liffInit = async () => {
  if (process.env.NODE_ENV === "development") {
    liff.use(new LiffMockPlugin());
    // @ts-ignore
    await liff.init({ liffId: LIFF_ID, mock: true });
  } else {
    await liff.init({ liffId: LIFF_ID });
  }
};

export const liffLogin = () => {
  if (!liff.isInClient()) liff.login();
};

export const liffGetProfile = async (): Promise<Profile> =>
  await liff.getProfile();

export const liffIsLoggedIn = (): boolean => liff.isLoggedIn();

export const liffCloseWindow = () => {
  liff.closeWindow();
};

export const liffGetUserId = async () => {
  const profile = await liffGetProfile();
  return profile.userId;
};
