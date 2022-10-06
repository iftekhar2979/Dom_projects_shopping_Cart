const fakeData=[
 { name:'Ari “Menthol 10” ',
 Brand:'Nike',
 price:330,
 image:'https://media.istockphoto.com/photos/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-picture-id1320786676?s=612x612'
}, 
{ name:'BAPE Bapesta',
 Brand:'Heydude.',
 price:340,
 image:'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
}, 
{ name:'Greedy Genius Air Force 1/BAPE Copie',
 Brand:'Converse',
 price:385,
 image:'https://media.istockphoto.com/photos/object-patternsneakers-picture-id1304862992?b=1&k=20&m=1304862992&s=170667a&w=0&h=Emf1s0oY7xw7HjOCloT7XHLXlkdznJ9Tve-l9FZWBBA='
}, 
{ name:'Phat Farm Shelltoe',
 Brand:'New Balance.',
 price:285,
 image:'https://media.istockphoto.com/photos/black-fashion-sport-shoe-on-white-background-picture-id1337191336?b=1&k=20&m=1337191336&s=170667a&w=0&h=SaaU2k7jwN271A1ZwzwcLoc0sraZ0RAoVs8mFA2q2CY='
}, 
{ name:' Mag Costume Edition',
 Brand:'Adidas.',
 price:485,
 image:'https://media.istockphoto.com/photos/sports-multicolored-high-boots-on-female-legs-in-black-jeans-on-the-picture-id1356765991?b=1&k=20&m=1356765991&s=170667a&w=0&h=ryxRI8997gq0cmlte82WYBZ9Z9WSYW6oLZAMuY_UE-M='
}, 
{ name:'Hender Scheme Air Force 1, Air Jordan IV, etc.',
 Brand:'Adidas.',
 price:495,
 image:'https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?b=1&k=20&m=1308274455&s=170667a&w=0&h=S3UYmEJ1hUri2rB8jRhJ4wNY31lMrHysLHbl9YD8j_Q='
}, 
{ name:'Consolidated Skateboards “Drunk BS”',
 Brand:'Madden Girl',
 price:395,
 image:'https://media.istockphoto.com/photos/sport-shoes-picture-id1322022503?b=1&k=20&m=1322022503&s=170667a&w=0&h=PHHb2GIdewj2U1XnPaUlw58pLau-7gL0VxDag0ACJ6w='
},
{ name:'Hood by Air “Cool Grey',
 Brand:'Puma',
 price:895,
 image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
},

]

const selectSection=document.querySelector('.grid.grid-cols-4.gap-2')
window.addEventListener('DOMContentLoaded',function (){
    let displayProduct=fakeData.map((item)=>{
        return `<div class="card w-90 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src=${item.image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${item.name}</h2>
          <p>Brand: ${item.Brand}</p>
          <p>Price: <span>${item.price}</span></p>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Quantity">
          <div class="card-actions">
            <button class="btn btn-primary" onclick="addToCart(this)">Buy Now</button>
          </div>
        </div>
      </div>
     `
    } )
    // console.log(displayProduct)
    displayProduct=displayProduct.join(" ")
    selectSection.innerHTML=displayProduct

})


function getNode(e) {
    return document.getElementById(e)
}
let myarr=[]
function maketheObject(){
    
  let  name=String(getNode('name').value)
  let brand=String(getNode('brand').value)
  let price=Number(getNode('price').value)
  let capacity=Number(getNode('Capacity').value)
  let img=String(getNode('img').value)
  myarr.push( { name:name,
    Brand:brand,
    price:price,
    capacity:capacity,
    image:img
   })
   console.log(myarr);
   getNode('name').value=''
   getNode('brand').value=''
   getNode('price').value=''
   getNode('Capacity').value=''
   getNode('img').value=''
   
}