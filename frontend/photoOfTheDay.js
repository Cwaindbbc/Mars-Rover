
fetch("https://apod.nasa.gov/apod?concept_tags")
.then(response => response.json())
.then (data=>console.log(data)); 

