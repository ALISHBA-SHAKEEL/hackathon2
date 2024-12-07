// document.getElementById('postForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents form from reloading the page
    
//     // Get form data
//     const postName = document.getElementById('postName').value;
//     const postTitle = document.getElementById('postTitle').value;
//     const postDescription = document.getElementById('postDescription').value;

//     // Create an object for the post
//     const newPost = {
//         name: postName,
//         title: postTitle,
//         description: postDescription
//     };

//     // Get existing posts from localStorage or initialize an empty array if none exist
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];

//     // Add the new post to the posts array
//     posts.push(newPost);

//     // Save updated posts array back to localStorage
//     localStorage.setItem('posts', JSON.stringify(posts));

//     // Redirect to the homepage
//     window.location.href = "index.html";
// });






// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "your-api-key",
//     authDomain: "your-auth-domain",
//     projectId: "your-project-id",
//     storageBucket: "your-storage-bucket",
//     messagingSenderId: "your-sender-id",
//     appId: "your-app-id"
//   };
  
//   // Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
//   const database = firebase.database(app);
  
//   // Handle form submission
//   document.getElementById('postForm').addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevents form reload
  
//       // Get form values
//       const postName = document.getElementById('postName').value;
//       const postTitle = document.getElementById('postTitle').value;
//       const postDescription = document.getElementById('postDescription').value;
  
//       // Create post data object
//       const newPost = {
//           name: postName,
//           title: postTitle,
//           description: postDescription,
//           timestamp: Date.now()
//       };
  
//       // Push data to Firebase Realtime Database
//       const postsRef = database.ref('posts');
//       postsRef.push(newPost).then(() => {
//           // Redirect to homepage after successful post submission
//           window.location.href = 'index.html';
//       }).catch((error) => {
//           console.error("Error writing new post to Firebase Database", error);
//       });
//   });
  





  // Firebase configuration
  const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
      projectId: "your-project-id",
   storageBucket: "your-storage-bucket",
       messagingSenderId: "your-sender-id",
        appId: "your-app-id"
      };
      

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Handle form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    // Get form values
    const postName = document.getElementById('postName').value;
    const postTitle = document.getElementById('postTitle').value;
    const postDescription = document.getElementById('postDescription').value;

    // Create a new post object
    const newPost = {
        name: postName,
        title: postTitle,
        description: postDescription,
        timestamp: Date.now()
    };

    // Save the new post to Firebase
    const postsRef = database.ref('posts');
    postsRef.push(newPost).then(() => {
        alert('Post submitted successfully!');
        window.location.href = 'index.html';  // Redirect to home page after submitting
    }).catch((error) => {
        console.error("Error saving post to Firebase", error);
    });
});
