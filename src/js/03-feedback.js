
import throttle from 'lodash.throttle'

const refs ={
    form: document.querySelector('form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}
const STORAGE_KEY = "feedback-form-state";
const formData ={};
refs.form.addEventListener('submit', onSubmitBtn);
refs.form.addEventListener('input', throttle(onTextInput, 1000));

 populateText();

function onSubmitBtn(e){
    e.preventDefault(); //убираем перезагрузку страницы
    console.log('Send');
    e.currentTarget.reset(); // очищаем поля формы
    localStorage.removeItem(STORAGE_KEY);

}
function onTextInput(e){
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateText(){
   const savedText =localStorage.getItem(STORAGE_KEY);
   if(savedText){
    refs.email.value = JSON.parse(savedText).email;    
    refs.message.value = JSON.parse(savedText).message;
    } 
}