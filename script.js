let username = "";
const btn = document.getElementById('join-chat');

const usernameInput = document.getElementById("username-input");

const form = document.getElementById("form")

const charroomConatainer = document.querySelector('.chatroom-container');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    console.log(username);
    if(username){
        form.style.display='none';

        charroomConatainer.style.display='block'
    }
})