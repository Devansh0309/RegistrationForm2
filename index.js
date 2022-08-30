

function isValid(){
    let firstName=document.getElementById('first-name')
    let lastName=document.getElementById('last-name')
    let email=document.getElementById('email')
    let phoneNumber=document.getElementById('phone-number')
    let batch=document.getElementById('batch-number')
    let module=document.getElementById('module-number')
    let tnc=document.getElementById('tnc')
    let err=false
    if(firstName.value.length>=3 && /^[a-zA-Z\s.,]+$/.test(firstName.value)){
        document.getElementById("first-name-invalid").style.display='none'
        document.getElementById("first-name-valid").style.display='block'
    }
    else{
        document.getElementById("first-name-invalid").style.display='block'
        document.getElementById("first-name-valid").style.display='none'
        err=true;
    }
    if(lastName.value.length>=3 && /^[a-zA-Z\s.,]+$/.test(lastName.value)){
        document.getElementById("last-name-invalid").style.display='none'
        document.getElementById("last-name-valid").style.display='block'
    }
    else{
        document.getElementById("last-name-invalid").style.display='block'
        document.getElementById("last-name-valid").style.display='none'
        err=true;
    }
    if(email.value.length>=6 && email.value.includes('@') && email.value.includes('.') && email.value.indexOf('@')>0 && email.value.indexOf('@')==email.value.lastIndexOf('@') && email.value.length-email.value.indexOf('.')>=3 && email.value.indexOf('.')-email.value.indexOf('@')>=2){
        document.getElementById("email-invalid").style.display='none'
        document.getElementById("email-valid").style.display='block'
    }
    else{
        document.getElementById("email-invalid").style.display='block'
        document.getElementById("email-valid").style.display='none'
        err=true;
    }
    if(phoneNumber.value.length==10 && parseInt(phoneNumber.value).toString().length==10){
        document.getElementById("phone-number-invalid").style.display='none'
        document.getElementById("phone-number-valid").style.display='block'
    }
    else{
        document.getElementById("phone-number-invalid").style.display='block'
        document.getElementById("phone-number-valid").style.display='none'
        err=true;
    }
    if(batch.value=='Select Batch No...'){
        document.getElementById("batch-invalid").style.display='block'
        document.getElementById("batch-valid").style.display='none'
        err=true
    }
    else{
        document.getElementById("batch-invalid").style.display='none'
        document.getElementById("batch-valid").style.display='block'
    }
    if(module.value=='Select Current Module...'){
        document.getElementById("module-invalid").style.display='block'
        document.getElementById("module-valid").style.display='none'
        err=true
    }
    else{
        document.getElementById("module-invalid").style.display='none'
        document.getElementById("module-valid").style.display='block'
    }
    if(tnc.checked==false){
        document.getElementById("tnc-invalid").style.display='block'
        err=true
    }
    else{
        document.getElementById("tnc-invalid").style.display='none'
    }
    // console.log(err)
    if(err==false){
        firstName.value=""
        lastName.value=""
        email.value=""
        phoneNumber.value=""
        batch.value=""
        module.value=""
        tnc.checked=false
        document.getElementById("first-name-valid").style.display='none'
        document.getElementById("last-name-valid").style.display='none'
        document.getElementById("email-valid").style.display='none'
        document.getElementById("phone-number-valid").style.display='none'
        document.getElementById("batch-valid").style.display='none'
        document.getElementById("module-valid").style.display='none'
        alert('Your details have been saved successfully!')
    }
}
