//Mousemove та throttle - уповільнення

// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 250);

// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//   mouseMoveCbInvocationCounter += 1;

//   coordsOutputRef.textContent = `Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//         X: ${event.clientX},
//         Y: ${event.clientY},
//     `;
// }
/*-------------------------------------------------------------*/

//Input та debounce - відкладений пошук

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 2000));

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `Кількість викликів onInputChange : ${inputCbInvocationCounter},
//     Значення: ${event.target.value}`;
// }
/*-------------------------------------------------------------*/
