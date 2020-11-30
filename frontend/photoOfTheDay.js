function displayPhoto() {
  fetch("/image")
    .then((response) => response.json())
    .then((data) => {
      const photoOfTheDay = document.getElementById("potd");
      photoOfTheDay.setAttribute("src", `${data.url}`);
      photoOfTheDay.setAttribute("alt", `${data.title}`);

      document.getElementById("exp").textContent = data.explanation;
    });
  }
  displayPhoto(); 
