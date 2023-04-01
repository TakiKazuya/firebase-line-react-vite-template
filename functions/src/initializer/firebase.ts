import {getApps, initializeApp} from "firebase-admin/app";

import {firebaseConfig} from "~/configs/firebase";

if (getApps().length === 0) {
  initializeApp(firebaseConfig)
}