function uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getNode(e) {
    return document.getElementById(e)
}
let productArray = []


function addToCart(element) {
    let productName = element.parentNode.parentNode.children[0].innerText
    let productPrice = element.parentNode.parentNode.children[2].children[0].innerText
    let productQuantity = () => {
        let productQuantities = element.parentNode.parentNode.children[3].value
        if (productQuantities === '') {
            alert('Please add Product Quantity')
            return productQuantities = 0
        } else {
            return productQuantities
        }
    }
    const productDetails = {
        id: uuid(),
        name: productName,
        price: Number(productPrice),
        quantity: Number(productQuantity()),
        subTotal: Number(productPrice) * Number(productQuantity()),
        time: moment().format('lll'),


    }
    productArray.push(productDetails)
    const cart = productArray.filter(item => {
        if (item.quantity != 0) {
            return item
        }
    })
    getNode('total_orders').innerText = cart.length

    const tBody = getNode('tr-creator')
    const createTr = document.createElement('tr')
    cart.map(item => {
        return createTr.innerHTML = `<td class=''>${item.name}</td>
        <td class='text-center '> ${item.price}</td>
        <td class='text-center'>${item.quantity}</td>
        <td class='text-center font-bold'> ${item.subTotal}</td>
        <td class='text-center '> ${item.time}</td>
        <button class="bg-red-500 text-white font-bold py-2 px-4 rounded-full" >
        Delete
      </button>
        
        `
    })
    //.bg-red-500.text-white.font-bold.py-2.px-4.rounded-full
    tBody.appendChild(createTr)
    element.parentNode.parentNode.children[3].value = ''


    function deleteBtn(element) {
        console.log('this is del');
    }

    // i have to start with it next day

    const deleteBtnClass = document.querySelectorAll('.bg-red-500.text-white.font-bold.py-2.px-4.rounded-full')
    for (let i of deleteBtnClass) {
       
         i.addEventListener('click', function (e) {
             let find = cart.findIndex(e => e.name === this.parentNode.children[0].innerText)
             cart.splice(find, 1)
             console.log(cart);
           this.parentNode.style.display='none'
         })
    }
    getNode('total_orders').innerText = cart.length

}
// console.log(deleteBtn);
function calculate() {
    const subTotalSelector = document.querySelectorAll('td.text-center.font-bold')
    let totalsArr = []
    for (let item of subTotalSelector) {
        totalsArr.push(Number(item.innerText))
    }
    let sum = 0
    sum = totalsArr.reduce((a, b) => a + b, 0)
    getNode('total').innerText = sum


}

function deleteItem(element) {
    console.log('del');
}