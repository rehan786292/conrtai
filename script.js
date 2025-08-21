function validate(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    let message='';
if(email===''){
    message='enter email';
    msgBox.style.color= 'red'
}
 else if(pass===''){
    message='pass is important ';
    msgBox.style.color= 'red'
}
 else if(age===''){
    message='your age must be in teens';
    msgBox.style.color= 'red'
}
 else{
    message='welcome to our page';
    msgBox.style.color= 'green'
}
msgBox.innerText=message;}
