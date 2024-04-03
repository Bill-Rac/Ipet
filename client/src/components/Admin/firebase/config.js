import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGGIN_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file, fileName) {
  const storageRef = ref(storage, `productsImages/${fileName}`);
  console.log("Uploading file", file.name);
  await uploadBytes(storageRef, file);
  console.log("File uploaded");
}

export async function getImageUrl(fileName) {
  const storageRef = ref(storage, `productsImages/${fileName}`);
  const url = await getDownloadURL(storageRef);
  console.log("URL created", url);
  return url;
}
