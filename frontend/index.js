var date = new Date();
document.getElementById("date").innerHTML = date.toLocaleString();

function kennedySpaceCentreTime() {
  var date = new Date();
   var kennedySpaceCentreTimeParagraph = document.getElementById("KennedySpaceCentreTimeParagraph"); 
    var kennedySpaceCentreTime =date.toLocaleTimeString('en-US',{timeZone:"America/New_York"});
   var insertingTheKennedyTime = document.createTextNode(kennedySpaceCentreTime);
   kennedySpaceCentreTimeParagraph.appendChild(insertingTheKennedyTime);
}; 

kennedySpaceCentreTime();

function kennedyCentreOffsetTime(){
var date = new Date();
 var timeOffset = date.getTimezoneOffset()/60;
 //got the diff in hours between us and UTC. 
 var timeDiff = timeOffset + 5; 
 var timeOffsetSpan=document.getElementById("timeOffset");
 var insertingTheOffsetTime = document.createTextNode(timeDiff);
 timeOffsetSpan.appendChild(insertingTheOffsetTime);

}
kennedyCentreOffsetTime();


