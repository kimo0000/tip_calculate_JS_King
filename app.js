const form = document.querySelector('form');
const amount = form.querySelector('#inp_mount');
const percentage = form.querySelector('#inp_per');
const calc = form.querySelector('.calc');
const total = document.querySelector('#total');

form.addEventListener('submit', (e) => {
     e.preventDefault();

     let valueAmout = amount.value;
     let valuePerc = percentage.value;

     if(parseInt(+valueAmout) || parseInt(+valuePerc)) {
        console.log('Int');
     } else {
        console.log('none')
     }

     total.innerHTML = eval(+valueAmout + +valuePerc).toFixed(2);
     
    //  parseFloat(valueAmout) + parseFloat(valuePerc) + ".00"

     amount.value = "";
     percentage.value = "";
})