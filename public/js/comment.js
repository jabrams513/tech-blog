async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

  const post_id = window.location.pathname.split("/").pop();

  if (comment_text) {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert(`Error: ${response.statusText}`);
        document.querySelector("#comment-form").style.display = "block";
      }
    } catch (err) {
      console.error("An error occurred:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  } else {
    alert("Please provide a comment before submitting.");
  }
}

document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);
