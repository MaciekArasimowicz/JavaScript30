document.addEventListener('DOMContentLoaded',()=>{

    const panels = document.querySelectorAll('.panel');

    function toggleOpen(){
       this.classList.toggle('open')
    }

    function toggleActive(e){
    
        if (e.propertyName === 'flex-grow'){
            this.classList.toggle('open-active')
        }
    }

    panels.forEach(e=> e.addEventListener('click',toggleOpen))
    panels.forEach(e=>e.addEventListener('transitionend',toggleActive))

})