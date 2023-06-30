const input= document.getElementById('input-three')
const select=document.getElementById('select-div')
const pTag=document.getElementById('div-three-pee')
const categories = document.getElementById("card-div")
const divThree=document.getElementById('div-three')
const selectBranch=document.getElementById('move-one')
const divFive=document.getElementById('div-five')
const method=document.getElementById('method')
const copyOne=document.getElementById('copy-one')
const accountOne=document.getElementById('account-one')
const accountThree=document.getElementById('account-three')
const abujaCard=document.getElementById('abujaCard')
const bankTransfer=document.getElementById('bankTransfer')
const lagosCard=document.getElementById('lagosCard')
const ibadanCard=document.getElementById('ibadanCard')
const bankName=document.getElementById('bankName')
const partnership=document.getElementById('partnership')
const project=document.getElementById('project')


categories.addEventListener('click', e =>{
    for(let category = 0; category < categories.children.length; category++){
        let div = categories.children[category]
        if(div === e.target){
            categories.classList.add("active") 
            div.classList.add("active") 
            // selectBranch.style = "display: block"
        }else if(e.target.children[1].innerHTML === "Partnership"){
            console.log(e.target.children[1].innerHTML)
            selectBranch.style = "display: none"
            partnership.style = "display: block"
            project.style="display:none"
             divFive.style="display:none"
            div.classList.remove("active")
        }else if(e.target.children[1].innerHTML === "Projects"){
            console.log(e.target.children[1].innerHTML)
            selectBranch.style = "display:none"
            partnership.style="display:none"
           project.style="display:block"
           divFive.style="display:none"
            div.classList.remove("active")
        }
        else if(e.target.children[1].innerHTML === "Offering/Tithe"){
            console.log(e.target.children[1].innerHTML)
            selectBranch.style = "display:block"
            partnership.style="display:none"
           project.style="display:none"
        //    divFive.style="display:block"
           div.classList.remove("active")}
           else{
            div.classList.remove("active")
            selectBranch.style = "display:none"
            partnership.style="display:none"
            project.style="display:none"
        }
    }
})

function addSelect(){
select.style="display:block"
pTag.style="display:none"

}


function removeSelect(){
    pTag.style="display:block"
    select.style="display:none"
}

input.addEventListener("keyup", ()=>{
    if(input.value == ""){
        removeSelect()
    }else if(!categories.classList.contains("active")){
        pTag.innerHTML = "Kindly select what you want to give towards"
        removeSelect()
    }
    else{
        addSelect()
    }
})

// function branchOne(e){
//     if(e.target.value === "Sphere of Light,Ibadan"){
//         divFive.style = "display: block"
//     }else{
//         divFive.style = "display: none"
//     }
//  }

selectBranch.addEventListener('change', e =>{
    divFive.style="display:block";
    copyOne.innerHTML= "Copy"
    if(e.target.value === "Sphere of Light,Abuja"){
        bankName.innerHTML ="UBA"
        accountOne.innerHTML = "09063462510"
        
    }else if (e.target.value === "Sphere of Light,Ibadan"){
        bankName.innerHTML ="Zenith bank"
        accountOne.innerHTML = "1017501841"
        
    }else if (e.target.value === "Sphere of Light,Lagos"){
        bankName.innerHTML="United Bank of Africa"
        accountOne.innerHTML = "1025912592"
        
    }else if(e.target.value === "Sphere of Light,Ile-Ife"){
        bankName.innerHTML="Zenith Bank"
        accountOne.innerHTML="1019714296"
        
    }else if(e.target.value==="Sphere of Light,Abeokuta"){
        bankName.innerHTML="United Bank of Africa"
        accountOne.innerHTML="1026179541"
        
    }else{
        
    }
    
})

function addActivated(){
    bankTransfer.classList.add('activated')
    abujaCard.style = "display : block"
}
function removeActivated(){
    bankTransfer.classList.remove('activated')
    abujaCard.style = "display : none"
}

   method.addEventListener('click',()=>{
    const isClicked=bankTransfer.classList.contains('activated')
    if(isClicked){
        removeActivated()
    }else{
        addActivated()
    }
   })    
 
// //button functionalities


copyOne.addEventListener("click", e =>{
    navigator.clipboard.writeText(accountOne.innerHTML)
    copyOne.innerHTML="Copied"
    
})
