import "dotenv/config";

// LINE
export const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN as string;
export const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET as string;
export const LIFF_URL = process.env.LIFF_URL as string;

// Firebase
export const PROJECT_ID = process.env.PROJECT_ID as string;

// Google
export const SERVICE_ACCOUNT_KEY_PATH = process.env.SERVICE_ACCOUNT_KEY_PATH as string;
export const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY as string;
export const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL as string;
