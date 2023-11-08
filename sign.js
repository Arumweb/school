let database=JSON.prase(localstorage.getitem("school"))
if(database === null){
  let database = [
  [
    {
      username: 'kingsley',
      number: 'kingsley@gmail.com',
      password: '@kingsley',
      url: "images/login.png",
      balance: "0.00",
      message: "",
    },
  ],
  [
    {
        name: 'ugo',
        class: 'ss3',
        id:'54554545'
    }
  ],
  {
    active:''
  }
];
localStorage.setItem("school", JSON.stringify(database));
}

let sign_up = (document.getElementById("sign-up").onclick = function () {
  let database = JSON.parse(localStorage.getItem("school"));
  let users = database[0];
  let students = database[1];
  let username = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let message_head = document.getElementById("message-head");
  let message_main = document.getElementById("message-main");
  let toast = document.getElementById("toast");
  if (password === "" || number === "" || username === "") {
    toast.style.visibility = "visible";
    message_main.innerHTML = "input your details";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 3000);
  } else if (password.length < 8) {
    toast.style.visibility = "visible";
    message_main.innerHTML = "password must at list 8 number";
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 3000);
  } else {
    let cheack;
    let special = ["@", "#", "$", "!", "%"];
    for (let i = 0; i < password.length; i++) {
      if (special.includes(password[i])) {
        cheack = "good";
        break;
      } else {
        cheack = false;
      }
    }
    if (cheack === "good") {
      let existing;
      for (let i = 0; i < users.length; i++) {
        if (number === users[i].number) {
          existing = true;
          break;
        } else {
          existing = false;
        }
      }

      if (existing) {
        toast.style.visibility = "visible";
        message_main.innerHTML = "USER EXISTING";
        setTimeout(() => {
          toast.style.visibility = "hidden";
        }, 3000);
      } else {
        let done = {
          username:username,
          number: number,
          password: password,
          url: "images/login.png",
          balance: "0.00",
          message: "",
        };
        users.push(done)

        let final=[users,students,'']
        localStorage.setItem("school",JSON.stringify(final))

        toast.style.visibility = "visible";
        message_main.innerHTML = "created";
        setTimeout(() => {
          toast.style.visibility = "hidden";
          location.href="login.html"
        }, 3000);
        
      }
    } else {
      toast.style.visibility = "visible";
      message_main.innerHTML = "PASSWORD MUST INCLUDE !,#,$,%,@";
      setTimeout(() => {
        toast.style.visibility = "hidden";
      }, 3000);
    }
  }
});
