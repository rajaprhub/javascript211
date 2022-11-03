/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

document.querySelector("form").addEventListener("submit",storeData);

function sproducts(b,n,p,i){
    this.brand = b ;
    this.name = n ;
    this.price = p ;
    this.image = i;
}

function storeData(event){
event.preventDefault();

   let form = document.getElementById("form");

   let brand = form.mobile_brand.value ;
   let name = form.mobile_name.value ;
   let price = form.mobile_price.value ;
   let image = form.mobile_image.value ;

   let p1 = new sproducts(brand,name,price,image) 
   let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
   data.push(p1);
   localStorage.setItem("mobile_data",JSON.stringify(data)) ;
   console.log(p1);
}

