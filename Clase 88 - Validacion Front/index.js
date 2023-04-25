// alert("holaaaaa")

const qs = (element)=> document.querySelector(element)// Para no escribir querySelector

window.addEventListener("load", ()=>{
    let $form = qs("form");
    let $inputName = qs("#inputName");
    let $inputPass = qs("#inputPass");
    let $inputAddress = qs("#inputAddress");

    let $nameError = qs("#inputNameError")
    let $passError = qs("#inputPassError")
    let $addressError = qs("#inputAddressError");

    let errors = {
        pass: false,
        address: false,
    }
    
    $inputPass.addEventListener("focus",()=>{
        let inputLength = $inputPass.value.length;
        if (inputLength < 8 ) {
            $passError.innerText = "Introducir por lo menos 8 Caracteres"
            errors.pass = true;
        } else {
            $passError.innerText = ""
            errors.pass = false;
        }
    })

    $inputPass.addEventListener("change", (event)=>{
        if (event.target.value >= 8 ) {
            $passError.innerText = "";
            errors.pass = false;
        } 
    })

    $inputAddress.addEventListener("blur", (event)=>{
        let inputValue = event.target.value;
        if (inputValue == "") {
            alert("El campo no puede estar vacio")
            errors.address = true
        } else {
            errors.address = false
        }
    })

    $form.addEventListener("submit", (event)=>{
        //alert("Enviaste el formulario")
        event.preventDefault();//Previene el evento submit
        if (!errors.address && !errors.pass) {
            $form.submit()
        } else {
            alert("Hay errores en el fomrulario")
        }
    })




})