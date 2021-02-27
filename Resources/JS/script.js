//Calculator working backend code:

'use strict';

//Key selection:
const clr=document.querySelector('.clr');
const del=document.querySelector('.del');
const hide=document.querySelector('.hide');
const add=document.querySelector('.addition');
const sub=document.querySelector('.subtract');
const mul=document.querySelector('.multiply');
const div=document.querySelector('.divide');
const deci=document.querySelector('.deci');
const ans=document.querySelector('.ans');
const zero=document.querySelector('.zero');
const one=document.querySelector('.one');
const two=document.querySelector('.two');
const three=document.querySelector('.three');
const four=document.querySelector('.four');
const five=document.querySelector('.five');
const six=document.querySelector('.six');
const seven=document.querySelector('.seven');
const eight=document.querySelector('.eight');
const nine=document.querySelector('.nine');
const ansd=document.getElementById('ansd');
const clcbut=document.querySelector('.calc-icon');

//Variable declerations:
let display="";
let answer="";
let num="";
let opr=0;

//Calc Function:
function calc(opr){
   switch(opr){
       case 0: answer=parseFloat(num);num="";break; 
       case 1: answer+=parseFloat(num);num="";opr=5;break;     
       case 2: answer-=parseFloat(num);num="";opr=5;break;     
       case 3: answer*=parseFloat(num);num="";opr=5;break;     
       case 4: answer/=parseFloat(num);num="";opr=5;break;  
       case 5: break;
   };
}

//Button click actions:

//Numbers and decimal point click actions:
zero.addEventListener('click',function(){
    ansd.textContent=display+="0";
    num+="0";
});

one.addEventListener('click',function(){
    ansd.textContent=display+="1";
    num+="1";
});

two.addEventListener('click',function(){
    ansd.textContent=display+='2';
    num+="2";
});

three.addEventListener('click',function(){
    ansd.textContent=display+='3';
    num+="3";
});

four.addEventListener('click',function(){
    ansd.textContent=display+='4';
    num+="4";
});

five.addEventListener('click',function(){
    ansd.textContent=display+='5';
    num+="5";
});

six.addEventListener('click',function(){
    ansd.textContent=display+='6';
    num+="6";
});

seven.addEventListener('click',function(){
    ansd.textContent=display+='7';
    num+="7";
});

eight.addEventListener('click',function(){
    ansd.textContent=display+='8';
    num+="8";
});

nine.addEventListener('click',function(){
    ansd.textContent=display+='9';
    num+="9";
});

deci.addEventListener('click',function(){
    ansd.textContent=display+='.';
    num+=".";
});

//Clear button click action:
clr.addEventListener('click',function(){
    ansd.textContent=display='0';
    answer="";
    display="";
    num="";
    opr=0;
});

//Addition button click action:
add.addEventListener('click',function(){
    ansd.textContent=display+='+';
    calc(opr);
    opr=1;
});
//Subtraction button click action:
sub.addEventListener('click',function(){
    ansd.textContent=display+='-';    
    if(opr!=5 && opr!=0)
        num+="-";
    else{
        calc(opr);
        opr=2;}
});

//Multiplication button click action:
mul.addEventListener('click',function(){
    ansd.textContent=display+='*';
    calc(opr);
    opr=3;
});

//Division button click action:
div.addEventListener('click',function(){
    ansd.textContent=display+='/';
    calc(opr);
    console.log(answer);
    opr=4;
});

//Equal's to button click action:
ans.addEventListener('click',function(){
    calc(opr);
    ansd.textContent=answer;
    display=String(answer);
    opr=5;
});

//Hide button click action:
hide.addEventListener('click',function(){
    document.querySelector('.block').classList.add('hidden');
    document.querySelector('.calc-icon').classList.remove('hidden');
});

//Delete button click action:
del.addEventListener('click',function(){
    display=display.slice(0,-1);
    num=num.slice(0,-1);
    ansd.textContent=display;
});

//Calc-button click action:
clcbut.addEventListener('click',function(){
    document.querySelector('.block').classList.remove('hidden');
    document.querySelector('.block').classList.add('animate__animated');
    document.querySelector('.block').classList.add('animate__fadeIn');
    document.querySelector('.calc-icon').classList.add('hidden');
});

