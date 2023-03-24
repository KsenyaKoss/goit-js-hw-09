import Notiflix from 'notiflix'

  const submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener('click', (ev)=>{
     ev.preventDefault();
     let delay = parseInt(document.querySelector('[name="delay"]').value)?
     parseInt(document.querySelector('[name="delay"]').value) : 0;
     const step = parseInt(document.querySelector('[name="step"]').value)?
     parseInt(document.querySelector('[name="step"]').value) : 0 ;
     const amount = parseInt(document.querySelector('[name="amount"]').value);
  for (let index = 0; index < amount; index++) {
    let position = 1;
     createPromise(position, delay)
     .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
     delay += step;
     position +=1;
  }  
})

function createPromise(position, delay) {
  return new Promise((resolve,rejected) => {
        const shouldResolve = Math.random() > 0.3;
      setTimeout(()=>{  
          if (shouldResolve) {
       resolve({position,delay})
        } else {
       rejected({position,delay})
        }}, delay)   
})
};







