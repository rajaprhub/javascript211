


  let harr = JSON.parse(localStorage.getItem("hotels")) || [];

    
    append(harr) ;
      
    function append(data){

        let container = document.getElementById('hotels-list');
        container.innerHTML = null;
   
        data.forEach(function(elem){
           var card = document.createElement("div");
           card.setAttribute("class", "hotel");
        
           let img = document.createElement("img");
           img.src = elem.Images.one;
           let title = document.createElement('p')
           title.innerText = elem.Title;
           let price = document.createElement('p')
           price.innerText = `Price: ${ elem.Price} Rs`;
         
          
         
      
           card.append(img,title,price)
           document.querySelector("#hotels-list").append(card) ;
             
        })
   
   }
   

