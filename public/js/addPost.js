async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  if (title && content) {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (err) {
      console.error("An error occurred:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  } else {
    alert("Please provide both title and content for the new post.");
  }
}

document.querySelector("#add-post-form").addEventListener("submit", newFormHandler);
