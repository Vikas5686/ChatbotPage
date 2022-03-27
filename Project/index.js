var typed = new Typed('#intro_text', {
    strings: ['Empowering touring industry with AI enables chatbots', 'Intutive and easy to use bots'],
    typeSpeed: 20,
    backDelay: 3000,
    loop: true,
    showCursor: false
});
console.log('thsisfjjflajflsjd')

let Message_box=document.getElementById('Message_box')
let Message_box_2=document.getElementById('Message_box_2')
let Message_box_3=document.getElementById('Message_box_3')
let Message_box_4=document.getElementById('Message_box_4')

let input=document.querySelector('input')
let input_2=document.getElementById('input_2')
let input_3=document.getElementById('input_3')
let input_4=document.getElementById('input_4')

function appendm(massage, position) {
    const lin = document.createElement('div')
    lin.classList.add(position);
    lin.innerText = massage;
    Message_box.appendChild(lin)
        Message_box.scrollBy(0,80)
}
function appendm_2(massage, position) {
    const lin = document.createElement('div')
    lin.classList.add(position);
    lin.innerText = massage;
    Message_box_2.appendChild(lin)
        Message_box_2.scrollBy(0,80)
}
function appendm_3(massage, position) {
    const lin = document.createElement('div')
    lin.classList.add(position);
    lin.innerText = massage;
    Message_box_3.appendChild(lin)
        Message_box_3.scrollBy(0,80)
}
function appendm_4(massage, position) {
    const lin = document.createElement('div')
    lin.classList.add(position);
    lin.innerText = massage;
    Message_box_4.appendChild(lin)
        Message_box_4.scrollBy(0,80)
}


let button_1=document.getElementById('btn_1')
let button_2=document.getElementById('btn_2')
let button_3=document.getElementById('btn_3')
let button_4=document.getElementById('btn_4')

button_1.addEventListener('click', abc)
button_2.addEventListener('click', abc_2)
button_3.addEventListener('click', abc_3)
button_4.addEventListener('click', abc_4)

function abc() {
    let massg=input.value;
    appendm(massg,'Right_massage')
    input.value = ''
    setTimeout(()=>{
        appendm('I Am searching best results for....','left_massage')
    },1000)
}
function abc_2() {
    let massg=input_2.value;
    appendm_2(massg,'Right_massage')
    input_2.value = ''
    setTimeout(()=>{
        appendm_2('I Am searching best results for....','left_massage')
    },1000)
}
function abc_3() {
    let massg=input_3.value;
    appendm_3(massg,'Right_massage')
    input_3.value = ''
    setTimeout(()=>{
        appendm_3('I Am searching best results for....','left_massage')
    },1000)
}
function abc_4() {
    let massg=input_4.value;
    appendm_4(massg,'Right_massage')
    input_4.value = ''
    setTimeout(()=>{
        appendm_4('I Am searching best results for....','left_massage')
    },1000)
}

setTimeout(()=>{
    window.addEventListener('load',appendm("Hello this is machine",'left_massage'))
    window.addEventListener('load',appendm_2("Hello this is machine",'left_massage'))
    window.addEventListener('load',appendm_3("Hello this is machine",'left_massage'))
    window.addEventListener('load',appendm_4("Hello this is machine",'left_massage'))
},1500)
setTimeout(()=>{
    window.addEventListener('load',appendm("How can i help you",'left_massage'))
    window.addEventListener('load',appendm_2("How can i help you",'left_massage'))
    window.addEventListener('load',appendm_3("How can i help you",'left_massage'))
    window.addEventListener('load',appendm_4("How can i help you",'left_massage'))
},3000)
setTimeout(()=>{
    window.addEventListener('load',appendm("Type your query",'left_massage'))
    window.addEventListener('load',appendm_2("Type your query",'left_massage'))
    window.addEventListener('load',appendm_3("Type your query",'left_massage'))
    window.addEventListener('load',appendm_4("Type your query",'left_massage'))
},4500)
setTimeout(()=>{
    window.addEventListener('load',appendm("Search best result for me",'Right_massage'))
    window.addEventListener('load',appendm_2("Search best result for me",'Right_massage'))
    window.addEventListener('load',appendm_3("Search best result for me",'Right_massage'))
    window.addEventListener('load',appendm_4("Search best result for me",'Right_massage'))
},5500)
setTimeout(()=>{
    appendm('I Am searching best results for....','left_massage')
    appendm_2('I Am searching best results for....','left_massage')
    appendm_3('I Am searching best results for....','left_massage')
    appendm_4('I Am searching best results for....','left_massage')
},6500)