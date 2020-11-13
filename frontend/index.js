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
