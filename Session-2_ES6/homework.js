const clocks = document.getElementById('clocks');
const btnAdd = document.getElementById('btnAdd');
let stt = 0;
let tiktok = 0;


btnAdd.addEventListener('click', () => {
  stt ++;
  formClock = new FormClock();
  formClock.render(clocks);
});
class FormClock {
  span = null;
  mm = null;
  ss = null;
  fff = null;
  start = null;
  pause = null;
  stop = null;
  constructor() {
    this.span = document.createElement('span');
    this.span.innerHTML = stt;
    this.mm = document.createElement('input');
    this.mm.value = 0;
    this.ss = document.createElement('input');
    this.ss.value = 0;
    this.fff = document.createElement('input');
    this.fff.value = 0;
    this.start = document.createElement('button');
    this.start.innerHTML = 'Start';
    this.start.addEventListener('click', () => {
      const delay = (time) => {
        return new Promise((resolve) => {
          setInterval(() => {
            resolve();
          }, time);
        }) 
      }
      delay(10).then (() => { 
        tiktok++;
        console.log(tiktok);
        this.mm.value = Math.floor(tiktok/60000);
        console.log(this.mm.value);
        this.ss.value = Math.floor((tiktok%60000)/1000);
        this.fff.value = Math.floor(((tiktok%60000)%1000)/10);
      });
    })
  
    this.pause = document.createElement('button');
    this.pause.innerHTML = 'Pause';
    this.stop = document.createElement('button');
    this.stop.innerHTML = 'Stop';
  }

  render = (container) => {
    const div = document.createElement('div');
    div.appendChild(this.span);
    div.appendChild(this.mm);
    div.appendChild(this.ss);
    div.appendChild(this.fff);
    div.appendChild(this.start);
    div.appendChild(this.pause);
    div.appendChild(this.stop);
    container.appendChild(div);
  }
}
