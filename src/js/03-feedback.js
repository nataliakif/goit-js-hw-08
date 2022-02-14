
import throttle from 'lodash.throttle'

const form = document.querySelector('form');
  
   

const STORAGE_KEY = "feedback-form-state";
const formData ={};
form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', throttle(onTextInput, 1000));

 populateText();

function onSubmitBtn(e){
    e.preventDefault(); //убираем перезагрузку страницы
    console.log('Send');
    e.currentTarget.reset(); // очищаем поля формы
    localStorage.removeItem(STORAGE_KEY);

}
function onTextInput(e){
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateText(){
   const savedText =localStorage.getItem(STORAGE_KEY);
   if(savedText){
    form.email.value = JSON.parse(savedText).email;    
    form.message.value = JSON.parse(savedText).message;
    } 
}