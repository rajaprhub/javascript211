


  let   arr = JSON.parse(localStorage.getItem("users")) || [];

   function signn(){
   let obj = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    password : document.getElementById("password").value,
   }

   let validation = false ;

     for( let i=0;i<arr.length;i++){
        if(arr[i].email === obj.email && arr[i].password === obj.password){
        validation = true ;
        break ;
      }
    }

    if( validation == true){
    alert(" User Aready Exist ");
    }

    else{
     alert("signed up successfully");
     window.location = "login.html";
     arr.push(obj);
     console.log(arr);
     localStorage.setItem("users",JSON.stringify(arr)); 
  }

}
