// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo1Jz15DdNtl5_4TjLxMQakflB0KqgUQ4",
    authDomain: "login-e1aa6.firebaseapp.com",
    projectId: "login-e1aa6",
    storageBucket: "login-e1aa6.firebasestorage.app",
    messagingSenderId: "310381844033",
    appId: "1:310381844033:web:63879d595b686307e718c0"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to sign up a user
async function signUpUser(email, password) {
  const messageElement = document.getElementById("message");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully:", userCredential.user);
    messageElement.style.color = "green";
    messageElement.textContent = "Signup successful! You can now log in.";
  } catch (error) {
    console.error("Error signing up:", error.message);
    messageElement.style.color = "red";
    messageElement.textContent = "Signup failed: " + error.message;
  }
}

// Function to log in a user
async function loginUser(email, password) {
  const messageElement = document.getElementById("message");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", userCredential.user);
    messageElement.style.color = "green";
    messageElement.textContent = "Login successful! Welcome back.";
  } catch (error) {
    console.error("Error logging in:", error.message);
    messageElement.style.color = "red";
    messageElement.textContent =
      "Login failed: " + (error.code === "auth/wrong-password"
        ? "Incorrect password."
        : error.message);
  }
}

// Add event listeners for signup and login buttons
document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signUpButton");
  const loginButton = document.getElementById("loginButton");

  signUpButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      signUpUser(email, password);
    } else {
      const messageElement = document.getElementById("message");
      messageElement.style.color = "red";
      messageElement.textContent = "Please provide both email and password.";
    }
  });

  loginButton.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
      loginUser(email, password);
    } else {
      const messageElement = document.getElementById("message");
      messageElement.style.color = "red";
      messageElement.textContent = "Please provide both email and password.";
    }
  });
});














// // Create/Update Post
// document.getElementById("postForm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const user = auth.currentUser;
//   if (!user) return alert("You must be logged in!");

//   const postName = document.getElementById("postName").value;
//   const postDescription = document.getElementById("postDescription").value;

//   const postRef = database.ref("posts/" + user.uid);
//   await postRef.set({
//     userID: user.uid,
//     name: postName,
//     description: postDescription,
//     email: user.email,
//     timestamp: Date.now()
//   });

//   alert("Post created/updated!");
//   loadPosts();
// });

// // Load Posts
// const loadPosts = () => {
//   const postsRef = database.ref("posts");
//   postsContainer.innerHTML = "";

//   postsRef.on("value", (snapshot) => {
//     const data = snapshot.val();
//     if (data) {
//       Object.values(data).forEach((post) => {
//         const postDiv = document.createElement("div");
//         postDiv.innerHTML = `
//           <h3>${post.name}</h3>
//           <p>${post.description}</p>
//           <small>${new Date(post.timestamp).toLocaleString()}</small>
//         `;
//         postsContainer.appendChild(postDiv);
//       });
//     }
//   });
// };


