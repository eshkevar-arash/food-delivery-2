let mobilMenuIcon=document.querySelector('.mobile-menu-icon')
let headerMenuList=document.querySelector('.header__menu-list')
let headerMenuItems=document.getElementsByClassName('header__menu-item')
headerMenuItems=Object.values(headerMenuItems)
let dark=document.querySelector('.dark')
let header=document.querySelector('.header')
let footer=document.querySelector('.footer')
let mobileMenuImages=document.getElementsByClassName('mobile-menu__image')

/*===========================
    Mobile Menu Item
===========================*/
headerMenuItems.forEach(function (headerMenuItem){
    headerMenuItem.addEventListener('mouseover',function (){
        let classList=this.classList
        classList=Object.values(classList)
        let index=classList.findIndex(function (className){
            return className=='header__menu-item--active'
        })
        if (index==-1){
            this.classList.add('header__menu-item--hover')
        }else {
        }

    })
})

headerMenuItems.forEach(function (headerMenuItem){
    headerMenuItem.addEventListener('mouseout',function (){
        this.classList.remove('header__menu-item--hover')
    })
})
headerMenuItems.forEach(function (headerMenuItem){
    headerMenuItem.addEventListener('click',function (event){
        event.preventDefault()
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        this.classList.add('header__menu-item--active')
        this.classList.remove('header__menu-item--hover')
        let targetSection=this.getAttribute('data-section')
        let documentScrollTop=document.querySelector(`.${targetSection}`).offsetTop
        window.scrollTo({
            top:documentScrollTop-120,
            behavior:"smooth"
        })
    })
})
// let sections=document.querySelectorAll("main > section")
// sections=Object.values(sections)
// const observer=new IntersectionObserver(observerHandler)
// function observerHandler(allSection){
//     if (allSection[0].isIntersecting==true){
//         let choosingMenuActive=allSection[0].target.className
//         document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
//         document.querySelector(`.${choosingMenuActive}Menu`).classList.add('header__menu-item--active')
//     }
// }
// sections.forEach(function (section){
//     observer.observe(section)
// })
mobilMenuIcon.addEventListener('click',function (){
    this.classList.toggle('mobile-menu-icon--active')
    headerMenuList.classList.toggle('header__menu-list--open')
    header.classList.toggle('header--set-effect')
    dark.classList.toggle('dark-show')
})
dark.onclick=function (){
    mobilMenuIcon.classList.toggle('mobile-menu-icon--active')
    this.classList.remove('dark-show')
    headerMenuList.classList.remove('header__menu-list--open')
    header.classList.remove('header--set-effect')
}
document.addEventListener('scroll',function (){
    if (document.documentElement.scrollTop>0){
        header.classList.add('header--set-effect')
        header.classList.add('header--change-height')
    }else {
        header.classList.remove('header--set-effect')
        header.classList.remove('header--change-height')
    }
    let n=500
    let top=document.documentElement.scrollTop
    if (top>0 && top<document.querySelector(`.menu`).offsetTop-n){
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.homepageMenu`).classList.add('header__menu-item--active')
    }else if (top>=document.querySelector(`.menu`).offsetTop-n && top<document.querySelector(`.saleOff`).offsetTop-n){
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.menuMenu`).classList.add('header__menu-item--active')
    }else if (top>=document.querySelector(`.saleOff`).offsetTop-n && top<document.querySelector(`.news`).offsetTop-n){
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.saleOffMenu`).classList.add('header__menu-item--active')
    }else if (top>=document.querySelector(`.news`).offsetTop-n && top<document.querySelector(`.contact`).offsetTop-n){
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.newsMenu`).classList.add('header__menu-item--active')
    }else if (top>=document.querySelector(`.contact`).offsetTop-n && top<document.querySelector(`.footer`).offsetTop-n){
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.contactMenu`).classList.add('header__menu-item--active')
    }else if (top>=document.querySelector(`.footer`).offsetTop-n){
        // document.querySelector(`.contactMenu`).classList.remove('header__menu-item--active')
        document.querySelector('.header__menu-item--active').classList.remove('header__menu-item--active')
        document.querySelector(`.footer`).classList.add('header__menu-item--active')

    }
})

/*===========================
    Mobile Menu Image+
===========================*/
 let x,y
//
mobileMenuImages=Object.values(mobileMenuImages)
function showImage(event){
    for (let i=0; i<mobileMenuImages.length;i++)
    {
        x=event.pageX
        y=event.pageY
        mobileMenuImages[i].style.transform=`translate(${x}px,${y}px)`
    }
}
mobileMenuImages=Object.values(mobileMenuImages)
headerMenuList.addEventListener('mousemove',showImage)


/*===========================
    Section Homepage
===========================*/
let homePageOrderIndex=0
let btnNumber=document.querySelector('.btn-number')
let btnPlus=document.querySelector('.btn-plus')
let btnMinus=document.querySelector('.btn-minus')
btnPlus.addEventListener('click',function (){
    homePageOrderIndex=homePageOrderIndex+1;
    if (homePageOrderIndex===11){
        homePageOrderIndex=0
    }
    btnNumber.innerHTML=String(homePageOrderIndex)
})
btnMinus.addEventListener('click',function (){
    homePageOrderIndex=homePageOrderIndex-1;
    if (homePageOrderIndex===-1){
        homePageOrderIndex=10
    }
    btnNumber.innerHTML=String(homePageOrderIndex)
})

/*===========================
    Menu Navbar
===========================*/
let menuNavBtns=document.getElementsByClassName('menu__nav-btn')
let dataAction;
menuNavBtns=Object.values(menuNavBtns)
menuNavBtns.forEach(function (menuNavBtn){
    menuNavBtn.addEventListener('click',function (event){
        document.querySelector('.menu__nav-btn--active').classList.remove('menu__nav-btn--active')
        this.classList.add('menu__nav-btn--active')
        dataAction=this.dataset.action
        document.querySelector('.menu__box--active').classList.remove('menu__box--active')
        document.querySelector(`.${dataAction}`).classList.add('menu__box--active')
    })
})
let menuItemBtnsRemove=document.querySelectorAll('.menu-item__btn-remove')
menuItemBtnsRemove=Object.values(menuItemBtnsRemove)
menuItemBtnsRemove.forEach(function (menuItemBtnRemove){
    menuItemBtnRemove.addEventListener('click',function (event){
        event.target.classList.add('menu-item__btn-remove--clicked')
        setTimeout(function (){
            event.target.classList.remove('menu-item__btn-remove--clicked')
        },400)

    })
})
let menuSeeAction=document.querySelector('.menu-see__action')
menuSeeAction.addEventListener('click',function (event){
    event.preventDefault()
    this.parentElement.parentElement.classList.toggle('menu__content--open')
    if (this.parentElement.parentElement.className=='menu__content menu__content--open'){
        this.innerHTML='see less'
    }else {
        this.innerHTML='see all'
    }
})
/*===========================
    Concat Section
===========================*/
let concatForm=document.querySelector('.contact__form')
concatForm.addEventListener('submit',function (event){
    event.preventDefault()
})
