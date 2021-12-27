//for auto text
const textel = document.querySelector('.slice-text'),
text = "To help you get started, we rounded up our favorite small indoor plants and included a few tips for styling them in a small space. Take a look and see which ones you can apply to your own space.";

let idx = 1;
let speed = 40;

function autotext(){
    textel.textContent = text.slice(0,idx);

    idx++;

    setTimeout(autotext,speed);
}

setTimeout(autotext,2500);



//for autocount
const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter)=>{
    // console.log(counter);
    counter.innerText = "0";

    // console.log(counter.getAttribute('data-target'));

    const updatecounter = ()=>{
        // const target = +counter.getAttribute('data-target');

        const target = Number(counter.getAttribute('data-target'));
        // console.log(typeof target);

        const ctr = +counter.innerText;
        // console.log(typeof ctr);

        const increment = target/10;
        // console.log(increment);

        if (ctr < target){
            counter.innerText = `${Math.ceil(ctr + increment)}`;
            setTimeout(updatecounter,200);
        }
    }
    updatecounter();

});


//For search


const searchel = document.querySelector('.search'),
    inputel = document.querySelector('.input'),
    btnel = document.querySelector('.btn');


btnel.addEventListener('click',()=>{
   searchel.classList.toggle('active');
   inputel.focus();
});