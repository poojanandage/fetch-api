let cl = console.log;
const prodInfo = document.getElementById("productInfo");
const searchbtn = document.getElementById("searchbtn");
const searchInfo = document.getElementById("searchInfo");
let baseUrl = "https://fakestoreapi.com/products";
let postarr =[];

async function makeapi(url) {
    return fetch(url, {

    }).then(res=>res.json())
    
}
        makeapi(baseUrl)
            .then(data =>{
                // cl(data)
                // postarr= data
                templating(data)
            })
            .catch(cl)



function templating(arr) {
    let result ='';
    arr.forEach(ele => {
       result+= `<div class="col-md-4 py-4">
        <div class="card">
            <div class="card-body py-2">
               <div class="text-center">
                    <img class=" img-fluid img" src="${ele.image}" alt="${ele.title}">
               </div>
            
              <h4 class="card-title py-3">${ele.title}</h4>
              <span class="h5 mr-5 p-1 ${rating(ele.rating.rate)}">${ele.rating.rate }<i class="fas fa-star"></i></span>
              <span class="h5 ">Price  $${ele.price}</span>
              <a href="#" class="text-dark">
              <p class="card-text py-4">
              ${ele.description}
            </p>
              </a>
              
              <a href="#" class="btn btn-danger">Buy Now</a>
            </div>
          </div>
    </div>`
    });
prodInfo.innerHTML = result;
}   

function rating(color) {
    if(color > 4){
        return `green`
    }else if(color > 2.5){
        return `orange`
    }else{
        return `red`
    }
}
const onsearch = (e) =>{
   let searchValue = e.target.value;
//    cl(searchValue)
   makeapi(baseUrl)
        .then(res =>{
            // cl(res)
            let search = res.filter(ele=>{
                // cl(ele)
               return ele.title.toLowerCase().trim().includes(searchValue);
            })
            
            templating(search)
        })
        .catch(cl)
   
}

searchInfo.addEventListener("keyup",onsearch)















