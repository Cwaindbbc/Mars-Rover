function currentBrowserTime() {
  document.getElementById("date").innerHTML = new Date().toLocaleString();
}
currentBrowserTime();

function kennedySpaceCentreTime() {
  const kennedySpaceCentreTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  const insertingTheKennedyTime = document.createTextNode(
    kennedySpaceCentreTime
  );

  document.getElementById("kscTime").appendChild(insertingTheKennedyTime);
}

kennedySpaceCentreTime();

function kennedyCentreOffsetTime() {
  const timeOffset = new Date().getTimezoneOffset() / 60 + 5;
  const insertingTheOffsetTime = document.createTextNode(timeOffset);
  document.getElementById("timeOffset").appendChild(insertingTheOffsetTime);
}
kennedyCentreOffsetTime();

function photoOfTheDay() {
  var NasaPhotoRef = "https://www.nasa.gov/";
  const photoTag = document.getElementById("photoOfTheDay");
  var photoOfTheDay = NasaPhotoRef;
  photoTag.appendChild(photoOfTheDay);
}

function displayTheCuriositySol() {
  const landedDate = new Date(2011, 10, 16, 15, 02);

  const todaysDate = new Date();

  const differenceMs = todaysDate - landedDate;
  const dateDifference = differenceMs / (1000 * 60 * 60 * 24);
  const sols = dateDifference / 1.0274912517;

  const curiositySol = document.getElementById("currentSol");
  curiositySol.innerHTML = sols;
}
displayTheCuriositySol();
