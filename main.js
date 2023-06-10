const password = document.querySelector(".input-box input");
const copyAll = document.querySelector(".input-box span");
const slider = document.querySelector(".pass-length input");
const passLengthValue = document.querySelector(".details span");

const btn = document.querySelector(".generate-btn");

const options = Array.from(document.querySelectorAll('.option input'));


// Slider
passLengthValue.innerHTML = slider.value;
slider.oninput = function() {
    passLengthValue.innerHTML = this.value;
    return slider.oninput.value;
}
const passCharacters = {
    lowercase : 'abcdefghijklmnopqrstuvwxyz',
    uppercase : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '~!@#$%^&*()_+\[]{},./'
}


const generatePass = () => {
    let staticPassword = '',
    randomPassword = '',
    excludeDuplicate = false,
    passLength = slider.value;

options.forEach(option => {
    if(option.checked) {
        if(option.id !== 'exc-duplicate' && option.id !== 'spaces'){
            staticPassword += passCharacters[option.id];
        } else if(option.id !== 'spaces'){
            staticPassword += `  ${staticPassword}  `;
        } else {
            excludeDuplicate = true;
        }
    }  else{
    }

});

for(let i = 0; i< passLength; i++) {
    let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if(excludeDuplicate) {
        !randomPassword.includes(randomChar) || randomChar == ' ' ? randomPassword +=randomChar : i--;
    }else{
        randomPassword += randomChar;
    }
    console.log(randomChar);
}
password.value = randomPassword;


}
const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = slider.value;
    generatePass();
}
updateSlider();


const copyPassword = () => {
    navigator.clipboard.writeText(password.value);
    copyAll.innerText = 'check';
    copyAll.style.color = '#9CFF2E';
    setTimeout(() => {
        copyAll.innerText = "copy_all";
        copyAll.style.color = '#222';
    }, 1000);
}

copyAll.addEventListener('click', copyPassword);
slider.addEventListener('input', updateSlider);
btn.addEventListener('click', generatePass);