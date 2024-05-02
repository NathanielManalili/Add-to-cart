const product = [
    {
        id: 0,
        title: '',
        price:'',
    },
    {
        id: 1,
        title: '',
        price: '',
    },
    {
        id: 2,
        title: '',
        price: "",
    },
    {
        id: 3,
        title: '',
        price: "",
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('rightSide').innerHTML = categories.map((item)=>
{
    var { title, price} = item;
    return(
        `<div class='box'>
            <div class='bottom'>
            <p>${title}</p>
            <h2>PHP ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "PHP "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var { title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "PHP "+total+".00";
            return(
                `<div class='cart-item'>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>PHP ${price}.00</h2>`+
                "<i class='bi bi-trash3-fill'onclick='delElement("+ (j++) +")'></i></div>"
            );
           
        }).join('');
    }  
}