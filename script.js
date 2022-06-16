function showModal() {
    var element = document.getElementById("formule");
    element.classList.add("show-modal");
}

//abre formulario

function hideModal() {
    var element = document.getElementById("formule");
    element.classList.remove("show-modal");
}

//fecha formulario

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaconf = document.getElementById("senhaconf");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const senhaconfValue = senhaconf.value;

    if (usernameValue == "") {
        setErrorFor(username, "O nome de usuário é obrigatório");        
    } else {
        setSuccessFor(username);
    }

    if (emailValue == "") {
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email);
    }

    if (senhaValue == "") {
        setErrorFor(senha, "A senha é obrigatória.");
    } else if(senhaValue.length < 7) {
        setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");   
    } else {
        setSuccessFor(senha);        
    }

    if (senhaconfValue == "") {
        setErrorFor(senhaconf, "A confirmação de senha é obrigatória.");
    } else if (senhaconfValue != senhaValue) {
        setErrorFor(senhaconf, "As senhas não conferem.");
    } else {
        setSuccessFor(senhaconf);
    }

    const formControls = form.querySelectorAll(".divisoes");

        const formIsValid = [...formControls].every(formControl => {
            return (formControl.className === "divisoes success"); 
        });
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");  
    
    small.innrText = message;
    formControl.className = "divisoes error";
    
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "divisoes success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

