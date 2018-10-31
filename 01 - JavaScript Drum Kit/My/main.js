document.addEventListener('DOMContentLoaded', () => {

    function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return

        key.classList.add('playing')

        audio.currentTime= 0;
        audio.play();
    }

    function endTransition (e){
        e.target.classList.remove('playing')
    }

    const keys = Array.from (document.querySelectorAll('.key'));
    keys.forEach((e)=>{e.addEventListener('transitionend',endTransition)})

    window.addEventListener('keydown',playSound)

    
})