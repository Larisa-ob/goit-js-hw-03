let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};
(user.mood = "happy"), (user.hobby = "skydiving"), (user.premium = false);
//Write code under this line

const keys = Object.keys(user);
// Write code under this line
for (let key of keys) message += key;
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */