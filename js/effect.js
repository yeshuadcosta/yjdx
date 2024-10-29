// An array of letters in the English Alpabhet for the hacker effect
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let text = document.querySelector('.home-link');

window.addEventListener('load', effect);
text.addEventListener('mouseover', effect);
text.addEventListener('click', effect);

function effect(){
    let original = text.innerText;
    let len = original.length;
    let clone = '';
    let key = len;
   
    const interval = setInterval(() => {
        for (let y = 0; y<key; y++)
            clone = clone + alpha[Math.floor(Math.random() * len)];
        console.log(clone);
   
        if (key > 0)
           text.innerText = original.substring(0, (len-key)) + clone;
        else if (key === 0)
            text.innerText = original.substring(0, (len-key));

        if (key === 0){
            key = len;
            clearInterval(interval);
        }
              
        console.log(key);
        clone = '';
        key--;   
    }, 100);
}