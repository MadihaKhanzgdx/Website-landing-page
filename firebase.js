
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWtr4kDeXnP7BTZB5Jl8yKTtyRZSoI3eM",
  authDomain: "databaseproject-5be95.firebaseapp.com",
  projectId: "databaseproject-5be95",
  storageBucket: "databaseproject-5be95.firebasestorage.app",
  messagingSenderId: "479658791893",
  appId: "1:479658791893:web:450c0529927f404174235c",
  measurementId: "G-0LPVVG2P1E"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // 🧾 Contact Form Handling
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields!");
        return;
      }

      // Save to Firebase Database
      const messagesRef = ref(db, "messages");
      const newMessageRef = push(messagesRef);

      set(newMessageRef, {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Error saving message:", error);
          alert("Something went wrong!");
        });
    });
  }
