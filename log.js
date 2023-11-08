let database = JSON.parse(localStorage.getItem("school"));
let active = database[2];
let users = database[0];
let students = database[1];
let data = localStorage;
let admin_password = "@kingsley";
let admin_number = "07089611318";
let login = (document.getElementById("login").onclick = function () {
  let passwordlog = document.getElementById("password").value;
  let numberlog = document.getElementById("number").value;
  let message_little = document.getElementById("message_little");
  let message_main = document.getElementById("message_main");
  let toast = document.getElementById("toast");
  if (passwordlog === "" || numberlog === "") {
    toast.style.visibility = "visible";
    message_main.innerHTML = "input your details";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 3000);
  } else if (passwordlog.length < 8) {
    toast.style.visibility = "visible";
    toast.style.width = "300px";
    message_main.innerHTML =
      "password must be greater than 8 and must include @,#,$,%";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 3000);
  } else {
    let special = ["@", "$", "#", "%", "!"];
    let cheack;
    for (let i = 0; i < passwordlog.length; i++) {
      if (special.includes(passwordlog[i])) {
        cheack = true;
        break;
      } else {
        cheack = false;
      }
    }

    if (cheack) {
      let person;
      let no_user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].number === numberlog) {
                no_user = true;
                person = users[i];
                break;
            } else {

                no_user = false;
            }
        }
        
        if(no_user){

            if(person.password===passwordlog){

                location.href="main.html"

                let send=[users,students,numberlog];
                localStorage.setItem("school",JSON.stringify(send))
            }else{
                toast.style.visibility = "visible";
                toast.style.width = "300px";
                message_main.innerHTML = "INCORRECT PASSWORD";
    
                setTimeout(() => {
                    toast.style.visibility="hidden"
                }, 3000);
            }
        }else{
            toast.style.visibility = "visible";
            toast.style.width = "300px";
            message_main.innerHTML = "NO SUCH USER";

            setTimeout(() => {
                toast.style.visibility="hidden"
            }, 3000);
           

        }    

    } else {
      toast.style.visibility = "visible";
      toast.style.width = "300px";
      message_main.innerHTML = "password  must include @,#,$,%";
      setTimeout(() => {
        toast.style.visibility = "hidden";
      }, 3000);
    }
  }
});
