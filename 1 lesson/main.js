// let patternPhone = /^\+996\s\d{3}\s\d{2}-\d\d-\d{2}/;
// let patternPhoneRu = '+7'
// let patternPhoneKg = '+996'
// //наш номер должен начинатся с +996 пробел 3цифра подряд и дальше
// //получаем инпут из ДОМ элемента
// const phoneInput = document.querySelector('#phone');
// const img = document.getElementById('img_flag')

// //получаем кнопку из ДОМа
// const button = document.querySelector('button');
// // Событие на клик кнопку ипроверка нашего шаблона
// button.onclick = () => {
// 	if (patternPhone.test(phoneInput)) {
// 		console.log('⇚ KG номер ');
// 	} else {
// 		console.log('⇚ другой номер');
// 	}
// };


// //событие для инпута при изминение нашего инпута
// phoneInput.addEventListener('input', e => {
// 	if (patternPhoneKg.test(e.target.value)) {
// 		img.setAttribute('src', 'img/Flag_of_Kyrgyzstan.svg.png')
// 		console.log('KG номер')
// 	} else if(patternPhoneRu.test(e.target.value)) {
// 		img.setAttribute('src', 'img/Flag_of_Russia.svg_png.jpg')
// 		console.log('Ru номер')
// 	} else {
// 		console.log('Произошла ошибка')
// 	}
// });




