let bodyLnEn = document.getElementById("en")
let bodyLnFa = document.getElementById("fa")
let popup = document.getElementById("popupMain")
let btn = document.getElementById("btnClosess")
let cover = document.getElementById("coverrrr")
let content = document.getElementById("contenttt")


//////Event
bodyLnEn.onclick = changlanguageEn
bodyLnFa.onclick = changlanguagefa
function mypop (){
    setInterval(()=>{
        popup.classList.replace("popupClassDeactive","popupClass")
        
    },3000)

}
window.addEventListener("mousemove",mypop)
btn.onclick = ()=>{
    // window.removeEventListener("mousemove",mypop)
    popup.style.display = "none"

}
resivCode.addEventListener("click",()=>{
    content.classList.replace("content01","content001")
    cover.classList.replace("coverPop01","coverPop")
})



//////Functions

function changlanguageEn(){
    document.body.style.direction = "ltr"
    let EnStyle = document.querySelector("#maim_div")
    EnStyle.classList.replace("parent","parentEn")
    let li01 = document.querySelector("#li01")
    li01.textContent= "Home"

    let li02 = document.querySelector("#li02")
    li02.textContent= "Store"

    let li03 = document.querySelector("#li03")
    li03.textContent= "Shop"

    let li04 = document.querySelector("#li05")
    li04.textContent= "Pages"
    
    let li06 = document.querySelector("#li06")
    li06.textContent= "Blog"
    let li05 = document.querySelector("#li04")
    li05.textContent= "Language"  /////text-align: left;
    bodyLnEn.textContent = "English"
    bodyLnFa.textContent = "Persian"

    let h1_description = document.getElementById("h1_description")
    h1_description.style.fontFamily = "GreatVibes"
    h1_description.style.fontSize = "60px"
    h1_description.textContent = "Amazing discounts"
    let span_description = document.getElementById("span_description")
    span_description.textContent = "Interior decoration"
    let p_description = document.getElementById("p_description")
    p_description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime accusantium quos soluta quam quae mollitia quis, suscipit autem explicabo culpa repellendus esse illum. Molestias, distinctio repellendus? Neque, magni accusantium."
    let a_description = document.getElementById("a_description")
    a_description.textContent="More"

    let h1_description2 = document.getElementById("h1_description2")
    h1_description2.style.fontFamily = "GreatVibes"
    h1_description2.style.fontSize = "60px"
    h1_description2.textContent = "Amazing discounts"
    let span_description2 = document.getElementById("span_description2")
    span_description2.textContent = "Interior decoration"
    let p_description2 = document.getElementById("p_description2")
    p_description2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime accusantium quos soluta quam quae mollitia quis, suscipit autem explicabo culpa repellendus esse illum. Molestias, distinctio repellendus? Neque, magni accusantium."
    let a_description2 = document.getElementById("a_description2")
    a_description2.textContent="More"

    let buyNow = document.querySelectorAll("#buyNow")
    for(let i = 0 ; i<buyNow.length ; i++){buyNow[i].textContent = "Buy Now"}
    let newBuy = document.querySelectorAll("#newBuy")
    for(let i = 0 ; i<newBuy.length ; i++){
        newBuy[i].textContent = "New";
        newBuy[i].style.fontFamily ="GreatVibes";
        newBuy[i].style.fontSize ="25px"
    
    }

    let title_sec2_span = document.querySelector("#title-sec2 span")
    title_sec2_span.textContent = "Last collection"
    title_sec2_span.style.fontFamily = "GreatVibes"
    title_sec2_span.style.fontSize = "30px"

    let title_sec2_h2 = document.querySelector("#title-sec2 h2")
    title_sec2_h2.textContent = "Bedroom"
    let hoverly_cards = document.querySelectorAll("#hoverly")
    for(let i = 0 ; i<hoverly_cards.length ; i++){hoverly_cards[i].textContent = "Add to cart"}

    let section3_content_h3 = document.getElementById("section3_content_h3")
    section3_content_h3 . textContent = "Cabinet"
    let section3_content_span = document.getElementById("section3_content_span")
    section3_content_span .textContent = "137.000 $"
    let section3_content_p = document.getElementById("section3_content_p")
    section3_content_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime accusantium quos soluta quam quae mollitia quis, suscipit autem explicabo culpa repellendus esse illum. Molestias, distinctio repellendus? Neque, magni accusantium."
    let section3_content_a = document.getElementById("section3_content_a")
    section3_content_a.textContent="More"

    let maim_div_section2_span = document.getElementById("maim_div_section2_span")
    maim_div_section2_span.textContent = "Last collection"
    maim_div_section2_span.style.fontFamily = "GreatVibes"
    maim_div_section2_span.style.fontSize = "30px"
    let maim_div_section2_h2 = document.getElementById("maim_div_section2_h2")
    maim_div_section2_h2.textContent = "Management - Administrative"    

    let footer_col1_li1_h6 = document.querySelector("div.item1 ul.list_item1 h6")
    footer_col1_li1_h6.textContent = "Accessibility"
    let footer_col1_li1 = document.querySelector("div.item1 ul.list_item1 li.li1")
    footer_col1_li1.textContent ="FAQs"
    let footer_col1_li2 = document.querySelector("div.item1 ul.list_item1 li.li2")
    footer_col1_li2.textContent ="Your Order"
    let footer_col1_li3 = document.querySelector("div.item1 ul.list_item1 li.li3")
    footer_col1_li3.textContent ="Track"
    let footer_col1_li4 = document.querySelector("div.item1 ul.list_item1 li.li4")
    footer_col1_li4.textContent ="My Account"
    let footer_col1_li5 = document.querySelector("div.item1 ul.list_item1 li.li5")
    footer_col1_li5.textContent ="Pricing Plans"

    let footer_col2_li1_h6 = document.querySelector("div.item2 ul.list_item1 h6")
    footer_col2_li1_h6.textContent = "About us"
    let footer_col2_li1 = document.querySelector("div.item2 ul.list_item1 li.li1")
    footer_col2_li1.textContent ="Job Opportunities"
    let footer_col2_li2 = document.querySelector("div.item2 ul.list_item1 li.li2")
    footer_col2_li2.textContent ="Store Locator"
    let footer_col2_li3 = document.querySelector("div.item2 ul.list_item1 li.li3")
    footer_col2_li3.textContent ="Contact Us"
    let footer_col2_li4 = document.querySelector("div.item2 ul.list_item1 li.li4")
    footer_col2_li4.textContent ="Our Story"


    let footer_col3_li1_h6 = document.querySelector("div.item3 ul.list_item1 h6")
    footer_col3_li1_h6.textContent = "customer service"
    let footer_col3_li1 = document.querySelector("div.item3 ul.list_item1 li.li1")
    footer_col3_li1.textContent ="My Account"
    let footer_col3_li2 = document.querySelector("div.item3 ul.list_item1 li.li2")
    footer_col3_li2.textContent ="Terms of Use"
    let footer_col3_li3 = document.querySelector("div.item3 ul.list_item1 li.li3")
    footer_col3_li3.textContent ="Deliveries & Returns"


    let footer_col4_sp1_h5 = document.querySelector("div.item4 h6")
    footer_col4_sp1_h5.textContent = "Contact"
    let footer_col4_sp1_spa1 = document.querySelector("div.item4 span.spa1")
    footer_col4_sp1_spa1.textContent ="Tehran contact: 021-42069"
    let footer_col4_sp1_spa2 = document.querySelector("div.item4 span.spa2")
    footer_col4_sp1_spa2.textContent ="City contact: 021-88567924"
    let footer_col4_sp1_spa3 = document.querySelector("div.item4 span.spa3")
    footer_col4_sp1_spa3.textContent ="Tehran - Argentina Square - 5th St"
}   
function changlanguagefa(){
    document.body.style.direction = "rtl"
    let faStyle = document.querySelector("#maim_div")
    faStyle.classList.replace("parentEn","parent")
    let li01 = document.querySelector("#li01")
    li01.textContent= "صفحه اصلی"
    let li02 = document.querySelector("#li02")
    li02.textContent= "سبد خرید"
    let li03 = document.querySelector("#li03")
    li03.textContent= "فروشگاه"
    
    let li05 = document.querySelector("#li05")
    li05.textContent= "صفحات"
    let li06 = document.querySelector("#li06")
    li06.textContent= "وبلاگ"
    let li04 = document.querySelector("#li04")
    li04.textContent= "زبان"
    bodyLnEn.textContent = "انگلیسی"
    bodyLnFa.textContent = "فارسی"

    let h1_description = document.getElementById("h1_description")
    h1_description.textContent = "تخفیفات شگفت انگیز"
    h1_description.style.fontFamily = "Vazir"
    h1_description.style.fontSize = "30px"
    h1_description.style.fontWeight ="500"
    let span_description = document.getElementById("span_description")
    span_description.textContent = "دکوراسیون داخلی"
    let p_description = document.getElementById("p_description")
    p_description.textContent = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    let a_description = document.getElementById("a_description")
    a_description.textContent="بیشتر"

    let h1_description2 = document.getElementById("h1_description2")
    h1_description2.textContent = "تخفیفات شگفت انگیز"
    h1_description2.style.fontFamily = "Vazir"
    h1_description2.style.fontSize = "30px"
    h1_description2.style.fontWeight ="500"
    let span_description2 = document.getElementById("span_description2")
    span_description2.textContent = "دکوراسیون داخلی"
    let p_description2 = document.getElementById("p_description2")
    p_description2.textContent = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    let a_description2 = document.getElementById("a_description2")
    a_description2.textContent="بیشتر"

    let buyNow = document.querySelectorAll("#buyNow")
    for(let i = 0 ; i<buyNow.length ; i++){buyNow[i].textContent = "همین الآن خرید کنید"}
    let newBuy = document.querySelectorAll("#newBuy")
    for(let i = 0 ; i<newBuy.length ; i++){
        newBuy[i].textContent = "جدید";
        newBuy[i].style.fontFamily ="Vazir";
        newBuy[i].style.fontSize ="18px"
    }

    let title_sec2_span = document.querySelector("#title-sec2 span")
    title_sec2_span.textContent = "آخرین مجموعه"
    title_sec2_span.style.fontFamily = "Vazir"
    title_sec2_span.style.fontSize = "20px"
    let title_sec2_h2 = document.querySelector("#title-sec2 h2")
    title_sec2_h2.textContent = "اتاق خواب"
    let hoverly_cards = document.querySelectorAll("#hoverly")
    for(let i = 0 ; i<hoverly_cards.length ; i++){hoverly_cards[i].textContent = "افزودن به سبد خرید"}

    let section3_content_h3 = document.getElementById("section3_content_h3")
    section3_content_h3 . textContent = "کابینت"
    let section3_content_span = document.getElementById("section3_content_span")
    section3_content_span .textContent = "137.000 تومان"
    let section3_content_p = document.getElementById("section3_content_p")
    section3_content_p.textContent = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    let section3_content_a = document.getElementById("section3_content_a")
    section3_content_a.textContent="بیشتر"

    let maim_div_section2_span = document.getElementById("maim_div_section2_span")
    maim_div_section2_span.textContent = "آخرین مجموعه"
    maim_div_section2_span.style.fontFamily = "Vazir"
    maim_div_section2_span.style.fontSize = "20px"
    let maim_div_section2_h2 = document.getElementById("maim_div_section2_h2")
    maim_div_section2_h2.textContent = "مدیریت  - اداری" 


    let footer_col1_li1_h6 = document.querySelector("div.item1 ul.list_item1 h6")
    footer_col1_li1_h6.textContent = "دسترسی"
    let footer_col1_li1 = document.querySelector("div.item1 ul.list_item1 li.li1")
    footer_col1_li1.textContent ="سوالات متداول"
    let footer_col1_li2 = document.querySelector("div.item1 ul.list_item1 li.li2")
    footer_col1_li2.textContent ="طرح های قیمت گذاری"
    let footer_col1_li3 = document.querySelector("div.item1 ul.list_item1 li.li3")
    footer_col1_li3.textContent ="پی گیری"
    let footer_col1_li4 = document.querySelector("div.item1 ul.list_item1 li.li4")
    footer_col1_li4.textContent ="سفارشات"
    let footer_col1_li5 = document.querySelector("div.item1 ul.list_item1 li.li5")
    footer_col1_li5.textContent ="ورود به حساب کاربری"

    let footer_col2_li1_h6 = document.querySelector("div.item2 ul.list_item1 h6")
    footer_col2_li1_h6.textContent = "درباره ما"
    let footer_col2_li1 = document.querySelector("div.item2 ul.list_item1 li.li1")
    footer_col2_li1.textContent ="داستان ما"
    let footer_col2_li2 = document.querySelector("div.item2 ul.list_item1 li.li2")
    footer_col2_li2.textContent ="فرصت های شغلی"
    let footer_col2_li3 = document.querySelector("div.item2 ul.list_item1 li.li3")
    footer_col2_li3.textContent ="آدرس فروشگاه"
    let footer_col2_li4 = document.querySelector("div.item2 ul.list_item1 li.li4")
    footer_col2_li4.textContent ="تماس با ما"


    let footer_col3_li1_h6 = document.querySelector("div.item3 ul.list_item1 h6")
    footer_col3_li1_h6.textContent = "خدمات مشتری"
    let footer_col3_li1 = document.querySelector("div.item3 ul.list_item1 li.li1")
    footer_col3_li1.textContent ="شرایط استفاده"
    let footer_col3_li2 = document.querySelector("div.item3 ul.list_item1 li.li2")
    footer_col3_li2.textContent ="کارت هدیه"
    let footer_col3_li3 = document.querySelector("div.item3 ul.list_item1 li.li3")
    footer_col3_li3.textContent ="تحویل و عودت"


    let footer_col4_sp1_h5 = document.querySelector("div.item4 h6")
    footer_col4_sp1_h5.textContent = "تماس با ما"
    let footer_col4_sp1_spa1 = document.querySelector("div.item4 span.spa1")
    footer_col4_sp1_spa1.textContent ="تماس تهران : 42069-021"
    let footer_col4_sp1_spa2 = document.querySelector("div.item4 span.spa2")
    footer_col4_sp1_spa2.textContent ="تماس شهرستان : 88567924-021"
    let footer_col4_sp1_spa3 = document.querySelector("div.item4 span.spa3")
     footer_col4_sp1_spa3.textContent ="تهران - میدان آرژانتین - خیابان پنجم"
    

}



