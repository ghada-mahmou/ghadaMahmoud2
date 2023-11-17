let accounts = new Map([["user1", "pass1"], ["user2", "pass2"], ["user3", "pass3"]]);
 check = (user, pass) => {
   if (accounts.get(user) == pass)
     return true;
   return false;
 }
 let input = document.querySelectorAll('form input');
 let login = document.querySelector('button.log-in');
 let form = document.querySelector('form');
 login.onclick = () => {
   if (check(input[0].value, input[1].value)) {
         form.onsubmit = () => { return true; }
   }
   else {
     alert("error");
     form.onsubmit = () => { return false; }
   }
 }