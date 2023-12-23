const posts = [
  { title: "Post 1", content: "Konten Dari Post Pertama." },
  { title: "Post 2", content: "Halo Semua,.<br>Ini Post Kedua" }
];
function showPostList() {
  const postList = document.getElementById("postList");
  posts.forEach((post, index) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `post.html#${index}`);
    link.textContent = post.title;
    listItem.appendChild(link);
    postList.appendChild(listItem);
  });
}
function showPostContent() {
  const postId = window.location.hash.substring(1);
  const postTitle = document.getElementById("postTitle");
  const postContent = document.getElementById("postContent");
  if (postId >= 0 && postId < posts.length) {
    postTitle.textContent = posts[postId].title;
    postContent.innerHTML = posts[postId].content.replace(/\n/g, '<br>');
    document.title = posts[postId].title;
  } else {
    postTitle.textContent = "Post tidak ditemukan";
  }
}
if (window.location.pathname.includes("post.html")) {
  showPostContent();
} else {
  showPostList();
}