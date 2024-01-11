async function signupFormHandler(event) {
  event.preventDefault();

  try {
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("Sign-up successful");
        document.location.replace("/dashboard");
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } else {
      alert("Please provide both username and password.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);