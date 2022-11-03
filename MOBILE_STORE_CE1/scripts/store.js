

  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  console.log(data);

  function append(data){

         let container = document.getElementById("mobile_list") ;
         container.innerHTML= "";

    data.forEach( function (elem,index){

       let card = document.createElement("div") ;
       card.setAttribute("class","mobile") ;

       let brand = document.createElement("h3") ;
       brand.innerText = elem.brand ;
        let image = document.createElement('img') ;
        image.src = elem.image ;
        let name = document.createElement("h5") ;
        name.innerText = ` name :${elem.name }` ;
        let price = document.createElement("h5") ;
        price.innerText =  ` price :${elem.price }` ;

        let remove_btn = document.createElement("button") ;
        remove_btn.innerText = "Remove" ;
        remove_btn.setAttribute("class","remove") ;
         
        remove_btn.addEventListener("click",()=>{
            removeme(index);
        })
         card.append(brand,image,name,price,remove_btn)
         container.append(card) ;

    })

  }

  append(data) ;

  function removeme(index){
    data.splice(index,1);
    append(data)
    localStorage.setItem("mobile_data",JSON.stringify(data))
 }


  document.querySelector("#sort_lth").addEventListener("click",function(){
    let nlow =  data.sort( (a,b)=>{
        return a.price - b.price
    })
    append(nlow) ;
  })

  document.querySelector("#sort_htl").addEventListener("click",function(){
    let nigh =  data.sort( (a,b)=>{
        return b.price - a.price
    })
    append(nigh) ;
  })

function  filter(){
     let value = document.getElementById("select_filter").value ;
     if(value == ""){
        append(data)
     }
     else{

        let newfil = data ;
        newfil = data.filter( (item)=>{
            return item.brand.toLowerCase().includes(value);
        })
         console.log("nowfil",value)
         append(newfil)
     }

}

