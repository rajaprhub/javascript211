// Use deployed URL.

 const url = "https://salty-spire-38038.herokuapp.com/shoespanel" ;


  window.addEventListener( "load",()=>{
    getData() ;
  })

 let addproduct = async()=>{

          let image =  document.getElementById("image").value  ;
          let name = document.getElementById("name").value ;
          let price = document.getElementById("price").value ;
           let   description = document.getElementById("description").value ;
           let  delivery =  document.getElementById("delivery").value ;

        let data = {
             image : image  ,
             name : name,
             price : price,
             description : description,
             delivery : delivery ,
             id : Date.now()
        }
         document.getElementById("image").value        = "" ;
         document.getElementById("name").value         = "" ;
         document.getElementById("price").value        = "" ;
         document.getElementById("description").value  = "" ;
         document.getElementById("delivery").value      = "" ;

           let res = await fetch(url,{
                   method: "POST",
                   body: JSON.stringify(data),
                   headers: {
                    "Content-Type" : "application/json",
                   }
           })
             
           getData();
           res = await res.json();
           console.log(res);
 }



 let getData = async ()=>{
     let res  = await fetch(url) 
    res = await res.json() ;
    renderDom(res)   ;
 }


 let renderDom = (data) =>{
     
         let container = document.getElementById('container');
         container.innerHTML = null ;

        data.forEach(({image,name,price,description,delivery,id})=>{

               let divb = document.createElement('div') ;
                divb.setAttribute('class','item') ;

                let  ima = document.createElement('img') ;
                ima.src = image ;
                 let  nam  = document.createElement('h2') ;
                 nam.innerText = name ;

                let  pri = document.createElement('p') ;
                pri.setAttribute('class','product_price') ;
                pri.innerText =  price  ;

                let  des = document.createElement('p') ;
                des.innerText = description ;

                let  del = document.createElement('p') ;
                pri.setAttribute('class','product_delivery') ;
                del.innerText = delivery;

              let detebtn = document.createElement('button') ;
              detebtn.innerText = "Delete" ;
              detebtn.onclick = ()=>{
                remove(id) ;
              }

              let updatebtn = document.createElement('button') ;
              updatebtn.innerText = "UpdatePrice" ;
              updatebtn.onclick = ()=>{
                updatePrice(id)
              }
              

               divb.append(ima,name,price,description,delivery,detebtn,updatebtn) ;
               container.append(divb) ;
             })
      }


      let remove = async (id) => {
        let res = await fetch( `${url}/${id}`,{
            method: "DELETE", 
        }) ;
        getData()
      }
          
       


 let updatePrice = async (id)  =>{
          
            let value = window.prompt("Enter new price") ;
            let newprice = { price : +value };
            let res = await fetch( `${url}/${id}`,
            { 
              method: "PATCH",  
                body: JSON.stringify(newprice),
               headers: {
               "Content-Type" : "application/json",
           }
            
        })
        getData()
 }


  


 let sortLTH = async () => {
             let res = await fetch(`${url}?_sort=price&_order=asc`) ;
             let data = await res.json();
             renderDom(data);   
 }

 let sortHTL = async () => {
    let res = await fetch(`${url}?_sort=price&_order=desc`) ;
    let data = await res.json();
    renderDom(data);   
}


let filterg = async ()=>{
    let res =await fetch(`${url}?price_gte=4000`)
    res= await res.json();
    renderDom(res)
}

let filterl = async ()=>{
    let res = await fetch(`${url}?price_lte=4000`);
     res = await res.json();
    renderDom(res)
}




