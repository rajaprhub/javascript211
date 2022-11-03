
let data ;

let searchH = (event) => {
     if( event.key === "Enter"){
        searchHotel();
     }
}

let searchHotel = async()=>{
    let query = document.getElementById("query").value ;
    try{
         let res = await fetch(`https://masai-api.herokuapp.com/hotels/search?city=${query}`)
       data = await res.json();
         console.log(data);
        append(data.hotels)   
    }
    catch(err){
        console.log(err);
    }

}

let arr = JSON.parse(localStorage.getItem("hotels")) || [];

function append(data){

     let container = document.getElementById('hotels-list');
     container.innerHTML = null;

     data.forEach(function(elem){
        var card = document.createElement("div");
        card.setAttribute("class", "hotel");
     
        let img = document.createElement("img");
        img.src = elem.Images.one;
        let name = document.createElement('p')
        name.innerText = elem.Title;
        let price = document.createElement('p')
        price.innerText = `Price: ${ elem.Price} Rs`;
        let ac = document.createElement('p')
        ac.innerText = `AC : ${elem.Ac} `;
       
        var btn = document.createElement("button");
        btn.innerHTML = "Book Now"
        btn.setAttribute =("class","book")
        btn.addEventListener("click",()=>{
           addtobook(elem)
           window.location = "login.html";
        })
   
        card.append(img,ac,name,price,btn)
        document.querySelector("#hotels-list").append(card) ;
          
     })

}

function addtobook(data){
    arr.push(data);
    localStorage.setItem("hotels",JSON.stringify(arr));  
}





document.getElementById("sort_lth").addEventListener("click",()=>{
    let ldata= data.hotels.sort((a,b)=>{
        return a.Price - b.Price
    })
    append(ldata)
})

document.getElementById('sort_htl').addEventListener("click",() =>{
    let hdata = data.hotels.sort((a,b) => {
        return b.Price - a.Price
    })
    append(hdata)
})


function sortAc()
{

 data.hotels = data.hotels.filter(e=> {if(e.Ac){ return e}});
 console.log(data.hotels)
 append(data.hotels)   
}

function sortNonAc()
{
 data.hotels = data.hotels.filter(e=> {if(!e.Ac){ return e}});
 console.log(data.hotels)
 append(data.hotels)   
}


