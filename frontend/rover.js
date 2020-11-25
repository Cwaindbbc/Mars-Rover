const sprite=(document.getElementById("sprite")); 

sprite.onmousedown = function(event) {
  
  sprite.style.position = 'absolute';
  sprite.style.zIndex = 1000;
  document.body.append(sprite);


  function moveAt(pageX, pageY) {
    sprite.style.left = pageX - sprite.offsetWidth / 2 + 'px';
    sprite.style.top = pageY - sprite.offsetHeight / 2 + 'px';
  }

  moveAt(event.pageX, event.pageY);


  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  sprite.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    sprite.onmouseup = null;
  };

  sprite.ondragstart = function(){
        return false

  }
};
