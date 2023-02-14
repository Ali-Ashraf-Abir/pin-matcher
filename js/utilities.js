
function buttonDisabled(){
    const submitButton=document.getElementById('submit-btn')

  
        submitButton.setAttribute("disabled",true)
        submitButton.style.color="grey"

}


function getInputValue(idname){

    const inputField=document.getElementById(idname)
    
    return inputField

}

function numberButtons(btnid,number){
    document.getElementById(btnid).addEventListener("click",function(){

        let numberDisplay=getInputValue("number-display")
        const previousNumberOnDisplay=numberDisplay.value
        const currentNumberOnDisplay=previousNumberOnDisplay+number
        numberDisplay.value=currentNumberOnDisplay

    
    
    })
}

function notifierCorrect(){

    const newNotifyElement=document.createElement("p")
    newNotifyElement.innerHTML=`
    <p id="pin-matched" class="notify">✅ Pin Matched... Secret door is opening for you</p>
    `
    const notifySection=document.getElementById("notify-section")
    notifySection.appendChild(newNotifyElement)
}

function notifierIncorrect(){

    const newNotifyElement=document.createElement("p")
    newNotifyElement.innerHTML=`
    <p id="pin-unmatched" class="notify">❌ Pin Didn't Match, Please try again</p>
    `
    const notifySection=document.getElementById("notify-section")
    notifySection.appendChild(newNotifyElement)
}