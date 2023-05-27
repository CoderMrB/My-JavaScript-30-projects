window.addEventListener("keypress", playKeySound)

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function playKeySound(e){
    const codeForKeyPressed=(e.keyCode)
    const keyPressed = document.querySelector(`.key[data-key="${codeForKeyPressed}"]`)
    const audio = document.querySelector(`audio[data-key="${codeForKeyPressed}"]`)
    
    if (!audio){
      return;
    }else{
      audio.currentTime = 0;
      audio.play()
      keyPressed.classList.add('playing')
    }
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
    }
  

