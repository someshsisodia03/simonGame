let head = document.querySelector("#head");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let orange = document.querySelector("#orange");
let blue = document.querySelector("#violet");
let p = document.querySelector("p");
let i=1;
let num="";
head.addEventListener('click',function(){
    if(num==""){p.innerText=`Level ${1}`;i=1;}
    let arr = ["R","G","O","B"];
        let indx = Math.floor(Math.random()*4);
        num=num+arr[indx];
        console.log(num);
        for(char of num[num.length-1]){

            if(char=='R'){
                    red.classList.add("badlo");
                    setTimeout(function(){
                        red.classList.remove("badlo");
                    },500);
                
                
            }

            else if(char=='G'){
                    green.classList.add("badlo");
                    setTimeout(function(){
                        green.classList.remove("badlo");
                    },500);
            }

            else if(char=='O'){
                    orange.classList.add("badlo");
                    setTimeout(function(){
                        orange.classList.remove("badlo");
                    },500);
            }

            else if(char=='B'){
                    blue.classList.add("badlo");
                    setTimeout(function(){
                        blue.classList.remove("badlo");
                    },500);
            }
        }
})
            let ans = "";
            red.addEventListener('click',function(){
                red.classList.add("badlo");
                    setTimeout(function(){
                        red.classList.remove("badlo");
                    },500);
                ans+="R";                    
            })
            green.addEventListener('click',function(){
                green.classList.add("badlo");
                    setTimeout(function(){
                        green.classList.remove("badlo");
                    },500);
                ans+="G";
            })
            orange.addEventListener('click',function(){
                orange.classList.add("badlo");
                    setTimeout(function(){
                        orange.classList.remove("badlo");
                    },500);
                ans+="O";
            })
            blue.addEventListener('click',function(){
                blue.classList.add("badlo");
                    setTimeout(function(){
                        blue.classList.remove("badlo");
                    },500);
                ans+="B";
            })
        let fbtn = document.querySelector("#submit");
        fbtn.addEventListener('click',function(){
            if(ans==num){
                p.innerText=`Level ${i+1}`;
                i=i+1;
            }
            else{
                p.innerText=`Your Score is ${i-1}`;
                let b = document.querySelector("body");
                b.style.backgroundColor="red";
                setTimeout(function(){
                    b.style.backgroundColor="white";
                },120);
                num="";
                
            }
            ans="";
        })

let h1 = document.getElementsByTagName("h2");
h1[0].addEventListener('click',()=>{
    h1[0].style.color="red"
})