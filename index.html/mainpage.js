// // Fetch posts from localStorage
// window.onload = function() {
//     const posts = JSON.parse(localStorage.getItem('posts')) || [];

//     // Get the container where posts will be displayed
//     const postsContainer = document.getElementById('postsContainer');

//     // Loop through each post and add it to the container
//     posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('post');

//         postElement.innerHTML = `
//             <h3>${post.title}</h3>
//             <p><strong>By ${post.name}</strong></p>
//             <p>${post.description}</p>
//         `;

//         postsContainer.appendChild(postElement);
//     });
// };


// Firebase configuration (same as createpost.js)

  
 // Firebase configuration (same as createpost.js)
 const firebaseConfig = {
    apiKey: "AIzaSyDo1Jz15DdNtl5_4TjLxMQakflB0KqgUQ4",
    authDomain: "login-e1aa6.firebaseapp.com",
    projectId: "login-e1aa6",
    storageBucket: "login-e1aa6.firebasestorage.app",
    messagingSenderId: "310381844033",
    appId: "1:310381844033:web:63879d595b686307e718c0"
  };
  

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Fetch posts from Firebase
window.onload = function() {
    const postsContainer = document.getElementById('postsContainer');
    const postsRef = database.ref('posts');

    // Fetch posts from Firebase and display them
    postsRef.on('child_added', function(snapshot) {
        const post = snapshot.val();

        // Create and display the post
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>${post.name}</strong></p>
            <p>${post.description}</p>
        `;

        postsContainer.appendChild(postElement);
    });
};


  
  



