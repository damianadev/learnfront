let primaryBtn = document.querySelector('#button');
console.log({primaryBtn});
console.log(primaryBtn.classList);

primaryBtn.addEventListener('click',() => {
    if(primaryBtn.classList.contains('is-primary')){ 
    primaryBtn.classList.replace('is-primary' , 'is-success');
    } else {
        primaryBtn.classList.replace('is-success' , 'is-primary');
    }
});


let input = document.querySelector('#input');

let reverseText = document.querySelector('#text');

input.addEventListener('input', () =>{
    let value = input.value;
    reverseText.innerText = value.split('').reverse().join('');
});