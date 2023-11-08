let user=JSON.parse(localStorage.getItem("school"));
let users=user[0];
let students=user[1];
let active=user[2];
let information;
let image=document.getElementById('image');
let username=document.getElementById("name");
let balance=document.getElementById("balance");
let hacking;
for(let i=0;i<users.length;i++){
  if(users[i].number === active){
    information=users[i];
    hacking=true;
    break
  }else{
   hacking=false;
  }
}
 
if(hacking){
  image.setAttribute('src',information.url)
  username.textContent=information.username
  balance.textContent=information.balance
}else{
  location.href='login.html'
}


// register
let class1=document.querySelector(".class1");
let name1=document.querySelector(".name1");
let info1=document.querySelector(".info1");
let id1=document.querySelector(".id1");
let register_btn=document.querySelector("#register_btn");

let register=document.querySelector('.register');
let box1=document.querySelector('.box2');
let cancel1=document.querySelector(".remove1");
box1.onclick=()=>{
  register.style.display="flex";
  id1.value=students.length+=1;


}
cancel1.onclick=()=>{
  register.style.display="none"
}



register_btn.onclick=()=>{
  let cheack=[name1,class1];
  if(name1.value ===''  || class1.value ===''  ){
    info1.textContent="INPUT IS EMPTY";
    info1.style.color='red'
    for(let i=0;i<cheack.length;i++){
      if(cheack[i].value ===''){
        cheack[i].style.border="2px solid red"
      }else{
        cheack[i].style.border="2px solid black"

      }
    }
  }else{

    info={
      name:name1.value,
      class:class1.value,
      id:id1.value
    }
    students.push(info)
    let pass=[users,students,active];
    localStorage.setItem('school',JSON.stringify(pass))
    info1.textContent='CREATED'
    info1.style.color="green"
    setInterval(() => {
      register.style.display="none"
    }, 1000);

    console.log(students)
  }
}











// money
let money=document.querySelector('.money');
let box2=document.querySelector('.box1');
let remove2=document.querySelector(".remove2");
box2.onclick=()=>{
  money.style.display="flex";

}
remove2.onclick=()=>{
  money.style.display="none"
}


let button=document.querySelector(".pay_btn");
let name2=document.querySelector(".name2")
let class2=document.querySelector(".class2")
let id2 =document.querySelector(".id2")
let info2 =document.querySelector(".info2")
let amount =document.querySelector(".amount")

button.onclick=()=>{
  let cheack=[name2,class2,id2,amount];
  if(name2.value===''  || class2.value==='' || id2.value ==='' || amount.value===''){
    info2.textContent="INPUT IS EMPTY"
    info2.style.color="red"
    for(let i=0;i<cheack.length;i++){
      if(cheack[i].value===''){
        cheack[i].style.border="2px solid red"
      }else{
        cheack[i].style.border="2px solid black"
      }
    }
  }else{
    if(0 > 1){
      info2.textContent="YOU HAVE A  LOW BALANCE FUND UR WALLET"
      info2.style.color="red"
      name2.style.border="2px solid black";
      class2.style.border="2px solid black";
      amount.style.border="2px solid red";
      id2.style.border="2px solid black"
    }else{
      let done;
      for(let i=0;i<students.length;i++){
        for(let i=0;i<students.length;i++){

          if(students[i].name === name2 && students[i].class === class2 && students[i].id===id2.value){
            info2.textContent="PAID"
            info2.style.color="green"

            for(let i=0;i<users.length;i++){
              if(users[i].number === information.number){
                users[i].balance=information.balance -= amount;
                let back=[users,students,active]
                localStorage.setItem("school",JSON.stringify(back))
              }
            }
            setInterval(() => {
              money.style.display='none'
            }, 2000);

            break
          }else{
            name2.style.border="2px solid red";
            class2.style.border="2px solid red";
            amount.style.border="2px solid red";
            id2.style.border="2px solid red"
            info2.textContent="NO SUCH STUDENT";
            info2.style.color="red"
          }
        }
      }
    }
  }
}