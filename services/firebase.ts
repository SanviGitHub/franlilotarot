import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración proporcionada
const firebaseConfig = {
  apiKey: "AIzaSyBo0H6KoGHMRg-DlkPjOSae5Nu3XdHrRRw",
  authDomain: "franlilotarotprocted123.firebaseapp.com",
  projectId: "franlilotarotprocted123",
  storageBucket: "franlilotarotprocted123.firebasestorage.app",
  messagingSenderId: "183876928653",
  appId: "1:183876928653:web:e402440b939b81e1578ec4",
  measurementId: "G-49RYXGGK8Q"
};

// Initialize Firebase (wrapped in try-catch to avoid double init in strict mode dev)
let app;
let analytics;

try {
    app = initializeApp(firebaseConfig);
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }
} catch (error) {
    console.warn("Firebase initialization skipped or failed", error);
}

export { app, analytics };