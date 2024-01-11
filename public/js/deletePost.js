async function deleteFormHandler(event) {
  event.preventDefault();

  const postId = window.location.pathname.split("/").pop();

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      body: JSON.stringify({ post_id: postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}

document.querySelector(".delete-post-btn").addEventListener("click", deleteFormHandler);
