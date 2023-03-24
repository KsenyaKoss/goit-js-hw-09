import Notiflix from 'notiflix'

  submitBtn = document.querySelector('[type="submit"]');

submitBtn.addEventListener('click', (ev)=>{
     ev.preventDefault();
     let delay = parseInt(document.querySelector('[name="delay"]').value);
     const step = parseInt(document.querySelector('[name="step"]').value);
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












// createPromise()
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//   function createPromise(position, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const result = { position, delay };
//         if (delay > 2) {
//           reject(`Проміс #${position} відхилений, бо затримка більше 2 секунд`);
//         } else {
//           resolve(result);
//         }
//       }, delay * 1000);
//     });
//   }
  
//   const form = document.querySelector('form');
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const amount = parseInt(document.querySelector('#amount').value);
//     const delay = parseInt(document.querySelector('#delay').value);
//     const step = parseInt(document.querySelector('#step').value);
//     let position = 1;
//     for (let i = 0; i < amount; i++) {
//       createPromise(position, delay).then(result => {
//         console.log(`Проміс #${result.position} виконаний зі затримкою ${result.delay} сек`);
//       }).catch(error => {
//         console.log(error);
//       });
//       position += step;
//       delay += step;
//     }
//   });
  