

//apikey 
let root = document.getElementById("root");
    let getData = () => {
     //  fetch my api
        url = "https://fakestoreapi.com/products";
        fetch(url).then((response) => {
            //stringify my data
            return response.json();
        }).then(data => {
           //itreate my products array
           data.forEach(element => {
               //display my data
               root.innerHTML += '<div class="card-container" ><div class="img"><img src="' + element.image
                   + '" alt=""></div><div class="name">' + element.title + '</div><div class="price"><strong>$' + element.price + '</strong></div><div class="description">' + element.description.slice(0,100)+'...</div><div class="btn-group"><button class="primary">Add to Cart</button> <button>Read More</button></div></div ></div>';
           });
           
        }).catch(err => {
            //console.log(err);
        })

    }
getData()

