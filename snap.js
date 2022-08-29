const companyEl = document.querySelector("#company");
const featuresEl = document.querySelector("#features");
const featureArticle = document.querySelector("#feature_article");
const companyArticle = document.querySelector("#company_article");
const featureandArticle = document.querySelector("#featureandarticle_container");
const dropdown = document.querySelector(".menudropdown_container");
const menu = document.querySelector(".menu_selections_container");
const remove_dropdown = document.querySelector(".X_remove")
const background_shadow = document.querySelector(".background_shadow")
const company_select = document.querySelector(".menu_activate_company")
const feature_select = document.querySelector(".menu_activate_features")
const login_select  = document.querySelector(".menu_login_select")
const register_select = document.querySelector(".menu_register_select")
const features_link = document.querySelector("#links_mobile_feature")
const company_link = document.querySelector("#links_mobile_company")
const menu_careers = document.querySelector(".menu_careers")
const menu_about = document.querySelector(".menu_about")
const array = [menu,background_shadow,company_link,features_link]

let isAlive = false
let drop = false


// onclick events desktop
companyEl.addEventListener("click",()=>{
    if (isAlive === false){
        company()

        isAlive = true
    }
    else if (isAlive === true){
        companyArticle.style.display  = "none"

        isAlive = false
    }
    
})


featuresEl.addEventListener("click",()=>{
    if (isAlive === false){
        feature()

        isAlive = true
    }
    else if (isAlive === true){
        featureArticle.style.display = "none"

        isAlive = false
    }
})




//onclick events mobile
dropdown.addEventListener("click",()=>{
    if (drop=== false){
        menu.style.display = "flex"
        background_shadow.style.display = "initial"
        
        
        drop = true
    }
    
})

remove_dropdown.addEventListener("click",()=>{
    if ( drop === true){
        array.forEach(e=>{
            e.style.display = "none"

            drop= false
        })
        
       
    }
    
})

feature_select.addEventListener("click",()=>{
    if ( isAlive === false){
        features_link.style.display = "grid"
        
        isAlive = true
    }

    else if (isAlive === true){
        features_link.style.display = "none"
        isAlive = false

    }
})

company_select.addEventListener("click",()=>{
    if ( isAlive === false){
        company_link.style.display = "grid"
        isAlive = true
    }

    else if (isAlive === true){
        company_link.style.display = "none"
        isAlive = false
    }
})


//function attachments

function company(){
    companyArticle.style.display = "grid"
    companyArticle.style.zIndex ='99'
    companyArticle.style.justifyContent = "center"
    companyArticle.style.alignItems = "center"

}

function feature(){
    featureArticle.style.display = "grid"
    featureArticle.style.zIndex='99'
    featureArticle.style.justifyContent="center"
    featureArticle.style.alignItems = "center"
    
}

