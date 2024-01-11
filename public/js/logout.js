async function logout() {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}

document.querySelector("#logout").addEventListener("click", logout);
