//로딩
const loader = document.querySelector('#loading');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; 

window.addEventListener('load', ()=>{

     setTimeout(() => { 
      	loader.style.opacity = '0';
		    html.style.overflow = 'auto'; 
        setTimeout(() => {
      		loader.style.display = 'none';
  		}, 400);
  }, 2100);
})


// 로딩 바
function tag () {
    let progress = document.querySelector('.progressTag')
    let interval = 1
    let updatesPerSecond = 1000 / 60
    let end = progress.max * 1.0
  
    function animator () {
      progress.value = progress.value + interval
      if ( progress.value + interval < end){
        setTimeout(animator, updatesPerSecond);
      } else { 
        progress.value = end
      }
    }
  
    setTimeout(() => {
      animator()
    }, updatesPerSecond)
  }
  
  tag()
  
  