const $$ = document;
let openHeader_Button = $$.querySelector(".headerMobile__bar")
let closeHeader_Button = $$.querySelector(".headerMobile__close")
let nextPage_Button = $$.querySelector(".navigation__nextpage")
let prePage_Button = $$.querySelector(".navigation__prepage")
let header = $$.querySelector(".header")
let homePage = $$.querySelector(".home")
let aboutPage = $$.querySelector(".about")
let resumePage = $$.querySelector(".resume")
let worksPage= $$.querySelector(".works")
let blogPage = $$.querySelector(".blog")
let contactPage = $$.querySelector(".contact")
let inputName = $$.querySelector("#input-name")
let inputEmail = $$.querySelector("#input-email")
let inputPhone = $$.querySelector("#input-phone")
let inputText = $$.querySelector("#input-text")
let inputSubmit = $$.querySelector("#input-submit")
let headerHome = $$.querySelector("#goto-home")
let headerAbout = $$.querySelector("#goto-about")
let headerResume = $$.querySelector("#goto-resume")
let headerWorks = $$.querySelector("#goto-works")
let headerBlog = $$.querySelector("#goto-blog")
let headerContact = $$.querySelector("#goto-contact")
let Download_CV_Button = $$.querySelector(".home__downloadCV-button")
let blogPost1 = $$.querySelector("#post1")
let blogPost2 = $$.querySelector("#post2")
let blogPost3 = $$.querySelector("#post3")
let blogPost4 = $$.querySelector("#post4")
let HTML_Score = $$.querySelector(".html-score")
let CSS_Score = $$.querySelector(".css-score")
let JS_Score = $$.querySelector(".js-score")
let REACT_Score = $$.querySelector(".react-score")
let NEXT_Score = $$.querySelector(".next-score")
let VUE_Score = $$.querySelector(".vue-score")
let NODE_Score = $$.querySelector(".node-score")
let instagram_social = $$.querySelector("#instagram-social")
let github_social = $$.querySelector("#github-social")
let telegram_social = $$.querySelector("#telegram-social")
let whatsapp_social = $$.querySelector("#whatsapp-social")
let rose_Project = $$.querySelector("#rose-project")
let betotur_Project = $$.querySelector("#betotur-project")
let login_Project = $$.querySelector("#login-project")

const pages = [homePage, aboutPage, resumePage, worksPage, blogPage, contactPage];
localStorage.setItem("pagein","home")


//open and close header


function hiddenAllPages () {
    pages.forEach((page)=>{
        page.style.animationDuration = "1.7s";
        page.style.animationName = "exampleOut";
        setTimeout(() => {
            page.style.display = "none"
        }, 1000);
    })
}
function showpage(Page) {
    Page.style.display = "flex"
    Page.style.animationName = "example";
    setTimeout(() => {
        nextPage_Button.style.display = "flex"
        prePage_Button.style.display = "flex" 
    }, 1800);
}
function closeHeader() {
    header.style.animationName = "exampleOut";
    closeHeader_Button.style.display = "none";
    setTimeout(() => {
        header.style.display = "none";
    }, 1000);
    setTimeout(() => {
        openHeader_Button.style.display = "flex"
    }, 1750);
}

openHeader_Button.addEventListener("click", ()=>{
    hiddenAllPages();
    openHeader_Button.style.display = "none"
    nextPage_Button.style.display = "none"
    prePage_Button.style.display = "none"
    setTimeout(() => {
        header.style.display = "flex"
        header.style.animationName = "example";
    }, 1000);
    setTimeout(() => {
        closeHeader_Button.style.display = "flex" 
    }, 2500);
})
closeHeader_Button.addEventListener("click", ()=>{
    closeHeader()
    prepage = localStorage.getItem("pagein");
    switch (prepage) {
        case "home":
            showpage(homePage);
            break;
        case "about":
            showpage(aboutPage);
            break;
        case "resume":
            showpage(resumePage);
            break;
        case "works":
            showpage(worksPage);
            break;
        case "blog":
            showpage(blogPage);
            break;
        case "contact":
            showpage(contactPage);
            break;
        default:
            break;
    }
})


// ---- menu bar ---------


headerHome.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "home") {
        localStorage.setItem("pagein","home")
    }
    closeHeader()
    showpage(homePage);
})
headerAbout.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "about") {
        localStorage.setItem("pagein","about")
    }
    closeHeader()
    showpage(aboutPage);
})
headerResume.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "resume") {
        localStorage.setItem("pagein","resume")
    }
    closeHeader()
    showpage(resumePage);
})
headerWorks.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "works") {
        localStorage.setItem("pagein","works")
    }
    closeHeader()
    showpage(worksPage);
})
headerBlog.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "blog") {
        localStorage.setItem("pagein","blog")
    }
    closeHeader()
    showpage(blogPage);
})
headerContact.addEventListener('click',()=>{
    pagein = localStorage.getItem("pagein");
    if (pagein != "contact") {
        localStorage.setItem("pagein","contact")
    }
    closeHeader()
    showpage(contactPage);
})
