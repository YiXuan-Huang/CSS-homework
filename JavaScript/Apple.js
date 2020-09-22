//資料結構
var IpadArray = {
    outward: {
        colorname: ['太空灰色', '銀色', '金色'],
        imagepath: ['AppleWebpic/finish-spacegray.png', 'AppleWebpic/finish-silver.png',
            'AppleWebpic/finish-gold.png'
        ],
        coloronclick: ['space', 'silver', 'gold']
    },
    storageinfo: {
        storagecapacity: ['32', '128'],
        storageprice: [10900, 13900]
    },
    connect: {
        connectname: ['Wi-Fi', 'Wi-Fi+行動網路'],
        connectprice: [0, 4500]
    }
}

//左邊的大圖片
let img = document.createElement('img')
img.src = 'AppleWebpic/AlliPad.jfif'
img.setAttribute('class', 'img-fluid')
img.setAttribute('width', '70%')
let bigimg = document.getElementById('bigimg')
bigimg.appendChild(img)

//右邊標題文字
let titleh1 = document.createElement('h1')
titleh1.innerText = '購買iPad'
titleh1.setAttribute('class', 'font-weight-bold')
let titlespan = document.createElement('span')
titlespan.innerText = '購買 iPad 可享免額外付費運送服務。'
titlespan.setAttribute('class', 'font-weight-bold')
let titlewrap = document.querySelector('.titlewrap')
titlewrap.append(titleh1, titlespan)

//外觀
let outward = document.querySelector('.outward')
let outwardh6 = document.createElement('h6')
outwardh6.innerText = '外觀'
let outwarddiv = document.createElement('div')
outwarddiv.classList.add('colorcontainer', 'd-flex', 'flex-wrap')
outward.append(outwardh6, outwarddiv)
let outwardbutton = document.createElement('button')
for (let i = 0; i < IpadArray.outward.colorname.length; i++) {
    outwarddiv.innerHTML += `<button class="p-3 m-2 col-5 d-flex flex-column align-items-center border rounded bg-white" 
    onclick="${IpadArray.outward.coloronclick[i]}()">
    <img src="${IpadArray.outward.imagepath[i]}" alt="" class="img-fluid " width="40">
    <p class="mb-0">${IpadArray.outward.colorname[i]}</p>`

}

//儲存裝置
let storageinfo = document.querySelector('.storageinfo')
let storageinfoh6 = document.createElement('h6')
storageinfoh6.innerText = '儲存裝置'
let storageinfodiv = document.createElement('div')
storageinfodiv.classList.add('storagewrap', 'd-flex')
storageinfo.append(storageinfoh6, storageinfodiv)
for (let i = 0; i < IpadArray.storageinfo.storagecapacity.length; i++) {
    storageinfodiv.innerHTML += `<button
    class="p-3 m-2 col-5 d-flex flex-column align-items-center border rounded bg-white">
    <p class="h3">${IpadArray.storageinfo.storagecapacity[i]}GB</p>
    <p>NT$${IpadArray.storageinfo.storageprice[i]}起</p>`
}


//連線能力
let connect = document.querySelector('.connect')
let connecth6 = document.createElement('h6')
connecth6.innerText = '連線能力'
let connectdiv = document.createElement('div')
connectdiv.classList.add('connectwrap', 'd-flex')
connect.append(connecth6, connectdiv)
for (let i = 0; i < IpadArray.connect.connectname.length; i++) {
    connectdiv.innerHTML += `<button
    class="p-3 m-2 col-5 d-flex flex-column align-items-center border rounded bg-white">
    <p>${IpadArray.connect.connectname[i]}</p>
    <p>NT$${IpadArray.storageinfo.storageprice[0]+IpadArray.connect.connectprice[i]}起</p>`
}

//依據選取儲存裝置改變連線能力價錢
let btn_storage = document.querySelectorAll('.storagewrap button')
let btn_connect = document.querySelectorAll('.connectwrap button p:nth-child(2)')


btn_storage.forEach(function (element, index) {
    element.addEventListener("click", function () {
        btn_connect.forEach(function(x,index1){
            x.innerText=`NT$${IpadArray.storageinfo.storageprice[index]+IpadArray.connect.connectprice[index1]}起`
        })
    });
});


//總價格
let totalAmount = document.querySelector('.totalAmount')
let totalAmountp = document.createElement('p')
totalAmountp.innerText=`NT$10900起`
let totalAmountbtn = document.createElement('button')
totalAmountbtn.classList.add('bg-primary','text-white', 'col-12')
totalAmountbtn.innerText='繼續'
totalAmount.append(totalAmountp,totalAmountbtn)
let selectconnect = document.querySelectorAll('.connect button')
selectconnect.forEach(function (element,index) {
    element.addEventListener("click",function () {
        totalAmountp.innerText=`${document.querySelectorAll('.connect button p:nth-child(2)')[index].innerText}`
    })
  })



function space() {
    img.src = 'AppleWebpic/ipad-wifi-select-space.png'
}

function silver() {
    img.src = 'AppleWebpic/ipad-wifi-select-silver.png'
}

function gold() {
    img.src = 'AppleWebpic/ipad-wifi-select-gold.png'
}