let cards = document.querySelectorAll(".cards")
let cover = document.getElementById("cover")
let images = document.getElementById("images")
let nums = document.querySelectorAll(".num")
let finalPrices = document.querySelectorAll(".finalPrice")
let finalPricesAfter = document.querySelectorAll(".finalPrice2")
let mainPrices = document.querySelectorAll(".hiddenPrice")
let escs = document.querySelectorAll(".esc")
let buy = document.querySelector(".numOfBuy")
let btns = document.querySelectorAll(".button")
let takhfifs = document.querySelectorAll("#divTakh")
let takhfifCovers = document.querySelectorAll("#covTakh")
let tCode = document.querySelector("#tCode").innerHTML
let forms = document.querySelectorAll ("#forms")
let ltcode = document.querySelector("#ltcode")
let codes = document.querySelectorAll(".code")
let button2s = document.querySelectorAll(".button2")
let incorects = document.querySelectorAll(".incorect")
let escTahkfifs = document.querySelectorAll(".escTahkfif")

//////Event
for(let card of cards){
    card.addEventListener("click" ,showCards)
    card.addEventListener("keyup" ,(event)=>{
        if(event.keyCode==13){
            if( myCode.length == 4 && textEnter == tCode){
                Alert('',' تخفیف با موفقیت اعمال شد  لطفاً جهت مشاهده تغییرات مجدداً تعداد اجناس را مشخص کنید. ','info')
                
            }
            else{  
                Alert('','کد تخفیف اشتباه وارد شد ، مجددا امتحان کنید .','info')
            }
        }
    })
}
for (let esc of escs ){
    esc.addEventListener("click",()=>{
        for(let i = 0 ; i < cards.length ; i++ ){
            cards[i].classList.replace("singelCard","cards")
            cards[i].removeEventListener("click" , showCards)
            cover.classList.remove("cover_alls") 
        }
        
    }) 
}
for (let btn of btns){
    btn.addEventListener("click",()=>{
        for (let i = 0 ; i < takhfifs.length ; i++ ) {
            takhfifs[i].classList.replace("takhfif01","takhfif")  
        }
        for (let i = 0 ; i < takhfifCovers.length ; i++ ) {
            takhfifCovers[i].classList.replace("coverThakhfif01","coverThakhfif") 
        }
        
    })
    
}
for(let num of nums){
    num.addEventListener("click",()=>{
        for (let i = 0 ; i < finalPrices.length ; i++ ) {
            for (let i = 0 ; i < mainPrices.length ; i++ ) {
                finalPrices[i].value = num.value*mainPrices[i].textContent
                // buy.innerHTML = num.value
                

            }  
        } 
       
    })
    
    
}
for (let code of codes){
    code.addEventListener("keyup",sendCode)   
}
for (let i = 0 ; i < button2s.length ; i++){
    button2s[i].addEventListener("click" , ()=>{
        buy.innerHTML++
        button2s[i].classList.add("button22")
    })
}
for (let i = 0 ; i < escTahkfifs.length ; i++){
    escTahkfifs[i].onclick = escTakhfifBox
}







//////Functions
function showCards() {
    this.classList.replace("cards","singelCard")
    cover.classList.replace("cover_all","cover_alls") 
}
function sendCode(){
    for (let i = 0; i < codes.length; i++) {
        let textEnter = codes[i].value
        let originTextMatch = tCode.substring(0 , textEnter.length );
        if(codes[i].value !== ""){
            myCode = codes[i].value
            if( myCode.length == 4 && textEnter == tCode){
                Alert('',' تخفیف با موفقیت اعمال شد  لطفاً جهت مشاهده تغییرات مجدداً تعداد اجناس را مشخص کنید. ','info')
                codes[i].classList.replace("noType","code") 
                
                for (let i = 0 ; i < takhfifs.length ; i++ ) {
                    takhfifs[i].classList.replace("takhfif","takhfif01")  
                }   
                for (let i = 0 ; i < takhfifCovers.length ; i++ ) {
                    takhfifCovers[i].classList.replace("coverThakhfif","coverThakhfif01") 
                } 
                for(let num of nums){
                    num.addEventListener("click",()=>{
                        for (let i = 0 ; i < finalPrices.length ; i++ ) {
                            for (let i = 0 ; i < mainPrices.length ; i++ ) {
                                finalPrices[i].value = num.value*mainPrices[i].textContent
                                
                                
                            }  
                        } 
                       
                    })
                    
                    
                }
                for(let num of nums){
                    num.addEventListener("click",()=>{
                        for (let i = 0 ; i < finalPricesAfter.length ; i++ ) {
                            for (let i = 0 ; i < mainPrices.length ; i++ ) {
                                finalPricesAfter[i].value = num.value*mainPrices[i].textContent -(num.value*mainPrices[i].textContent*0.2)
                                
                
                            }  
                        } 
                       
                    })
                    
                    
                }
                for (let btn of btns) {
                    btn.classList.replace("button","button00")
                    
                }
            }
            else if(myCode.length !== 4 && textEnter !== tCode){        
                codes[i].classList.replace("code","noType") 
                 
            }
           
        }
    }
}
function escTakhfifBox() {
    for (let i = 0 ; i < takhfifs.length ; i++ ) {
        takhfifs[i].classList.replace("takhfif","takhfif01")  
    }   
    for (let i = 0 ; i < takhfifCovers.length ; i++ ) {
        takhfifCovers[i].classList.replace("coverThakhfif","coverThakhfif01") 
    } 
}





























let otherImgs1 = document.querySelectorAll(".innerImg1")
let coverImgs1 = document.querySelector("#img1")
for(let i = 0 ; i < otherImgs1.length ; i++ ){
    otherImgs1[i].onclick = changImage1
}
function changImage1(){
    let change = this.getAttribute("src")
    let cover = coverImgs1.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs1.setAttribute("src", change)
}




let otherImgs2 = document.querySelectorAll(".innerImg2")
let coverImgs2 = document.querySelector("#img2")
for(let i = 0 ; i < otherImgs2.length ; i++ ){
    otherImgs2[i].onclick = changImage2
}
function changImage2(){
    let change = this.getAttribute("src")
    let cover = coverImgs2.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs2.setAttribute("src", change)
}



let otherImgs3 = document.querySelectorAll(".innerImg3")
let coverImgs3 = document.querySelector("#img3")
for(let i = 0 ; i < otherImgs3.length ; i++ ){
    otherImgs3[i].onclick = changImage3
}
function changImage3(){
    let change = this.getAttribute("src")
    let cover = coverImgs3.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs3.setAttribute("src", change)
}


let otherImgs4 = document.querySelectorAll(".innerImg4")
let coverImgs4 = document.querySelector("#img4")
for(let i = 0 ; i < otherImgs4.length ; i++ ){
    otherImgs4[i].onclick = changImage4
}
function changImage4(){
    let change = this.getAttribute("src")
    let cover = coverImgs4.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs4.setAttribute("src", change)
}


let otherImgs5 = document.querySelectorAll(".innerImg5")
let coverImgs5 = document.querySelector("#img5")
for(let i = 0 ; i < otherImgs5.length ; i++ ){
    otherImgs5[i].onclick = changImage5
}
function changImage5(){
    let change = this.getAttribute("src")
    let cover = coverImgs5.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs5.setAttribute("src", change)
}


let otherImgs6 = document.querySelectorAll(".innerImg6")
let coverImgs6 = document.querySelector("#img6")
for(let i = 0 ; i < otherImgs6.length ; i++ ){
    otherImgs6[i].onclick = changImage6
}
function changImage6(){
    let change = this.getAttribute("src")
    let cover = coverImgs6.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs6.setAttribute("src", change)
}



let otherImgs7 = document.querySelectorAll(".innerImg7")
let coverImgs7 = document.querySelector("#img7")
for(let i = 0 ; i < otherImgs7.length ; i++ ){
    otherImgs7[i].onclick = changImage7
}
function changImage7(){
    let change = this.getAttribute("src")
    let cover = coverImgs7.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs7.setAttribute("src", change)
}


let otherImgs8 = document.querySelectorAll(".innerImg8")
let coverImgs8 = document.querySelector("#img8")
for(let i = 0 ; i < otherImgs8.length ; i++ ){
    otherImgs8[i].onclick = changImage8
}
function changImage8(){
    let change = this.getAttribute("src")
    let cover = coverImgs8.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs8.setAttribute("src", change)
}


let otherImgs9 = document.querySelectorAll(".innerImg9")
let coverImgs9 = document.querySelector("#img9")
for(let i = 0 ; i < otherImgs9.length ; i++ ){
    otherImgs9[i].onclick = changImage9
}
function changImage9(){
    let change = this.getAttribute("src")
    let cover = coverImgs9.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs9.setAttribute("src", change)
}


let otherImgs10 = document.querySelectorAll(".innerImg10")
let coverImgs10 = document.querySelector("#img10")
for(let i = 0 ; i < otherImgs10.length ; i++ ){
    otherImgs10[i].onclick = changImage10
}
function changImage10(){
    let change = this.getAttribute("src")
    let cover = coverImgs10.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs10.setAttribute("src", change)
}


let otherImgs11 = document.querySelectorAll(".innerImg11")
let coverImgs11 = document.querySelector("#img11")
for(let i = 0 ; i < otherImgs11.length ; i++ ){
    otherImgs11[i].onclick = changImage11
}
function changImage11(){
    let change = this.getAttribute("src")
    let cover = coverImgs11.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs11.setAttribute("src", change)
}


let otherImgs12 = document.querySelectorAll(".innerImg12")
let coverImgs12 = document.querySelector("#img12")
for(let i = 0 ; i < otherImgs12.length ; i++ ){
    otherImgs12[i].onclick = changImage12
}
function changImage12(){
    let change = this.getAttribute("src")
    let cover = coverImgs12.getAttribute("src")
    this.setAttribute("src", cover)
    coverImgs12.setAttribute("src", change)
}