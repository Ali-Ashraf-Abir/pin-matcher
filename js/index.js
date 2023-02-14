

buttonDisabled()


document.getElementById("generate-btn").addEventListener("click",function(){

    let randomnumber=parseInt(Math.random()*10000)

    while(randomnumber<1000){
        randomnumber=parseInt(Math.random()*10000)
    }
    let pinDisplay=getInputValue("pin-display");
    pinDisplay.value=randomnumber
    
    const submitButton=document.getElementById('submit-btn')

  
    submitButton.removeAttribute("disabled")
    submitButton.style.color="white"


})


numberButtons("btn-1",1)
numberButtons("btn-2",2)
numberButtons("btn-3",3)
numberButtons("btn-4",4)
numberButtons("btn-5",5)
numberButtons("btn-6",6)
numberButtons("btn-7",7)
numberButtons("btn-8",8)
numberButtons("btn-9",9)
numberButtons("btn-0",0)

document.getElementById("btn-clear").addEventListener('click',function(){

    const displayField=getInputValue("number-display")
    displayField.value=""

})

document.getElementById("delete-btn").addEventListener('click',function(){
    const displayField=getInputValue("number-display")
    const displayValue=displayField.value
    const newvalue=displayValue.slice(0,displayValue.length-1)

    displayField.value=newvalue
    
})



document.getElementById("submit-btn").addEventListener("click",function(){

    const pinDisplay=getInputValue("pin-display")
    const numberDisplay=getInputValue("number-display")
    const pinDisplayValue=pinDisplay.value
    const numberDisplayValue=numberDisplay.value
    const tries=document.getElementById("tries")
    const triesString=tries.innerText
    const triesInt=parseInt(triesString)
    const submitButton=document.getElementById('submit-btn')




    if(pinDisplayValue==numberDisplayValue){
        notifierCorrect()

    }
    else{
        notifierIncorrect()
        
        const currentTries=triesInt-1
        tries.innerText=currentTries
        if(tries.innerText==0){
            alert("all tries are finished,please reload the page and try again")
            submitButton.setAttribute("disabled",true)
            submitButton.style.color="grey"
        }

    }



})