/* GRAB STUFF */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* CREATE FUNCTIONS */

function togglePlay() {
    let method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    let button = video.paused ? '>' : '||';
    toggle.innerHTML = button;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}

function progressUpdate() {
    let progr = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progr}%`
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* CREATE LISTENERS */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
toggle.addEventListener('click', updateButton);
video.addEventListener('click', updateButton);
skipButtons.forEach(el => el.addEventListener('click', skip));
video.addEventListener('timeupdate', progressUpdate);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
let mousedown = false
progress.addEventListener('mousedown', ()=>mousedown=true);
progress.addEventListener('mouseup', ()=>mousedown=false);
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e))