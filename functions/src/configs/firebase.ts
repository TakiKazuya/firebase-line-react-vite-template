import {credential} from "firebase-admin";

import {GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, PROJECT_ID} from "~/utils/secrets";
import cert = credential.cert;

export const firebaseConfig = {
  credential: cert({
    projectId: PROJECT_ID,
    clientEmail: GOOGLE_CLIENT_EMAIL,
    privateKey: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
  }),
}