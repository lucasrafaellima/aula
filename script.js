function showModal() {
    var element = document.getElementById("formule");
    element.classList.add("show-modal");
}

function showSobre() {
    var element = document.getElementById("criador");
    element.classList.add("show-sobre");
}

function showLogin() {
    var element = document.getElementById("formule1");
    element.classList.add("show-login");
}
//abre formularios

function hideModal() {
    var element = document.getElementById("formule");
    element.classList.remove("show-modal");
}

function hideSobre() {
    var element = document.getElementById("criador");
    element.classList.remove("show-sobre");
}

function hideLogin() {
    var element = document.getElementById("formule1");
    element.classList.remove("show-login");
}

//fecha formularios

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
    
    small.innerText = message;
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

  function logar() {
    const email1 = document.getElementById("email1");
    const mensagem = document.getElementsByClassName("divisoes1")[0];
    const email2 = email1.value;
    if (email2 != "") {
        mensagem.classList.add("divisoes1 success");
    }
  }
  //formulario cadastro
  /*
  const form1 = document.getElementById("form1");
  const email1 = document.getElementById("email1");
  const senha1 = document.getElementById("senha1");

  form1.addEventListener("submit1", (e) => {
    e.preventDefault();

    checkInputs1();
  });

  function checkInputs1() {
    const email1Value = email1.value;
    const senha1Value = senha1.value;

    if (email1Value == "") {
        setErrorFor(email1, "O email é obrigatório");
    } else if (!checkEmail(email1Value)) {
        setErrorFor(email1, "Por favor, insira um email válido.");
    } else {
        setSuccessFor(email1);
    }

    if (senha1Value == "") {
        setErrorFor(senha1, "A senha é obrigatória.");
    } else if(senha1Value.length < 7) {
        setErrorFor(senha1, "A senha precisa ter no mínimo 7 caracteres.");   
    } else {
        setSuccessFor(senha1);        
    }

    const form1Controls = form1.querySelectorAll(".divisoes1");

        const form1IsValid = [...form1Controls].every(form1Control => {
            return (form1Control.className === "divisoes1 success"); 
        });
  }
  
function setErrorFor(input, message) {
    const form1Control = input.parentElement;
    const small = form1Control.getElementsByClassName("mensagem1");  
    
    small.innerText = message;
    form1Control.className = "divisoes1 error";
}

function setSuccessFor(input) {
    const form1Control = input.parentElement;

    form1Control.className = "divisoes1 success";
}

function checkEmail(email1) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email1
    );
  }
  */
  //login

  function mostra1() {
    let sinalizar = document.getElementsByClassName("sinal")[0];
    let sinalizar1 = document.getElementsByClassName("sinal1")[0];
    let mostrar = document.getElementsByClassName("resposta")[0];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

function mostra2() {
    let sinalizar = document.getElementsByClassName("sinal")[1];
    let sinalizar1 = document.getElementsByClassName("sinal1")[1];
    let mostrar = document.getElementsByClassName("resposta")[1];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

function mostra3() {
    let sinalizar = document.getElementsByClassName("sinal")[2];
    let sinalizar1 = document.getElementsByClassName("sinal1")[2];
    let mostrar = document.getElementsByClassName("resposta")[2];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

function mostra4() {
    let sinalizar = document.getElementsByClassName("sinal")[3];
    let sinalizar1 = document.getElementsByClassName("sinal1")[3];
    let mostrar = document.getElementsByClassName("resposta")[3];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

function mostra5() {
    let sinalizar = document.getElementsByClassName("sinal")[4];
    let sinalizar1 = document.getElementsByClassName("sinal1")[4];
    let mostrar = document.getElementsByClassName("resposta")[4];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

function mostra6() {
    let sinalizar = document.getElementsByClassName("sinal")[5];
    let sinalizar1 = document.getElementsByClassName("sinal1")[5];
    let mostrar = document.getElementsByClassName("resposta")[5];
    if (mostrar.style.display === 'none') {
        mostrar.style.display = 'block';
        sinalizar.style.display = 'none';
        sinalizar1.style.display = 'block';
    } else {
        mostrar.style.display = 'none';
        sinalizar.style.display = 'block';
        sinalizar1.style.display = 'none';
    }
}

//informacoes site
