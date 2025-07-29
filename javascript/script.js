// console.log(document);

// document.title="hello";

// console.log(console);

// let a = true;

// console.log(typeof a);

// let a=10;

// {
//     let a=20;
//     console.log(a);
// }

// console.log(a);


// let ele = document.getElementById('box');

// ele.innerHTML="hello PIET";
// ele.style.backgroundColor="red";
// console.log(ele);

let ele1 = document.getElementById('box1').innerHTML;

document.getElementById('box2').innerHTML=ele1;

document.getElementById('btn').disabled=true;





// let ele = document.getElementsByClassName('para');

// console.log(ele[1]);

// ele[1].style.color="red";

// let a =20;

// if(a==10){
//     console.log("a is 10");
// }
// else{
//     console.log("a is not 10");
// }

// let num = 6;

// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

let pass1 = 111;
let pass2 ="222";

// if(pass1===111 && pass2===222){
//     console.log("correct password");
// }
// else{
//     console.log("wrong password please try again!");
// }


if(pass1===111 || pass2===222){
    console.log("correct password");
}
else{
    console.log("wrong password please try again!");
}