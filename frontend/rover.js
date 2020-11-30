let isDragging = false;
const dragSprite = document.getElementById("sprite");

dragSprite.addEventListener("mousemove", draggingSprite);
dragSprite.addEventListener("mouseup", dropSprite);
dragSprite.addEventListener("mousedown", startDrag);

function startDrag(event) {
  event.preventDefault();
  isDragging = true;
}

function position(pageX, pageY) {
  dragSprite.style.left = pageX - dragSprite.offsetWidth / 2 + "px";
  dragSprite.style.top = pageY - dragSprite.offsetHeight / 2 + "px";
}

function draggingSprite(event) {
  if (isDragging === true) {
    event.preventDefault();
    position(event.pageX, event.pageY);
  }
}

function dropSprite(event) {
  isDragging = false;
}
