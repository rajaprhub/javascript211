

  let arr = JSON.parse(localStorage.getItem("users")) || [];

  function lognn(){

   let email    =  document.getElementById("email").value;
   let password = document.getElementById("password").value ; 
              
      let isValidated = false;    
   for (let i = 0; i < arr.length; i++) {

  if (arr[i].email == email && arr[i].password == password) {
              isValidated = true;
              alert("Login successful!");
              if(isValidated = true){
              window.location = "checkout.html";
              return;
            }   
       }
       else if( arr[i].email == email &&  arr[i].password !== password){
           alert("Wrong credentials");
           return ;
       }
       else if(arr[i].email != email && arr[i].password == password){
           alert("User doesn't exist, Sign Up");
       }
      
    }

   }