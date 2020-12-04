// localStorage.clear();

let items = [];
// loadCart();

// show cart
(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
})();

// function loadCart(){
//     let items;
//     if(localStorage.getItem('items')){
//         items = JSON.parse(localStorage.getItem('items'));
        
//     }
  

//     if(items.length > 0){
//         for(let i = 0 ; i < items.length; i++){
            
//             const cartItem = document.createElement('div');
//                     cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
//                     cartItem.innerHTML = `
//                         <img src="${items[i].imagePath}" class="img-fluid rounded-circle" id="item-img" alt="">`;
                        
//                     //     <div class="item-text">
//                     //     <p id="cart-item-title" class="font-weight-bold mb-0">${items[i].name}</p>
//                     //     <span>$</span>
//                     //     <span id="cart-item-price" class="cart-item-price" class="mb-0">${items[i].price}</span>
//                     //     </div>
    
//                     //     <a href="#" id='cart-item-remove' class="cart-item-remove">
//                     //     <i class="fas fa-trash"></i>
//                     //     </a>
    
//                     // </div>`;
    
//                     // const cart = document.getElementById('cart');
//                     // const total = document.querySelector('.cart-total-container');
    
//                     // cart.insertBefore(cartItem, total);
//                     // showTotals();
//         }
//     }
    

// }


// add items to cart
(function(){

    const cartBtn = document.querySelectorAll('.store-item-icon');
    

    // cart button
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            if(event.target.parentElement.classList.contains('store-item-icon')){
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf("img") + 3;
                let partPath = fullPath.slice(pos);

                imagePath = `img-cart${partPath}` 
                const item = {};
                item.img = imagePath;
                
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                finalPrice = Number(finalPrice.replace(/[^0-9\.-]+/g,""));
                item.price = finalPrice;

                // console.log(partPath);
                // console.log(name);
                // console.log(price);
                // console.log(item);


                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
                cartItem.innerHTML = `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                    
                    <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>

                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                    </a>

                </div>`;

                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                showTotals();
                

                // local storage
                
                if(localStorage.getItem('items')){
                    items = JSON.parse(localStorage.getItem('items'));
                }
                // items.push({'items' : name, image : imagePath, price : finalPrice, total : totals[0], numOfItems : totals[1]});
                items.push({'name' : name, 'image' : imagePath, 'price' : finalPrice});
                localStorage.setItem('items', JSON.stringify(items));
            }

            const removeBtn = document.getElementsByClassName('cart-item-remove');
        
            for(var i = 0; i < removeBtn.length; i++){
                var button = removeBtn[i];
                button.addEventListener('click', function(event){
                    var btnClicked = event.target;
                    btnClicked.parentElement.parentElement.remove();
                    // console.log(btnClicked.parentElement);
                    showTotals();
                })
            }


            const clearCartBtn = document.getElementById('clear-cart');
            clearCartBtn.addEventListener('click',function(event){
                let cartItems = document.querySelectorAll('.cart-item');
                cartItems.remove();
            })

        })
    })

    


    // show totals
    function showTotals(){
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        // console.log(items);
        if(items.length === 0){
            document.getElementById('cart-total').textContent = 0;
            document.querySelector('.item-total').textContent = 0;
            document.getElementById('item-count').textContent = 0;
        }
        items.forEach(function(item){
            total.push(parseFloat(item.textContent));

            const totalMoney = total.reduce(function(total, item){
                total += item;
                return total;
            },0);

            const finalMoney = totalMoney.toFixed(2);

            document.getElementById('cart-total').textContent = finalMoney;
            document.querySelector('.item-total').textContent = finalMoney;
            document.getElementById('item-count').textContent = total.length;
    
            
            return [finalMoney, total.length];

        });
    }


})();

