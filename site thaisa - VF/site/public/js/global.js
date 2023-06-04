function usuariomudar() {
    if (sessionStorage.NOME_USUARIO != "") {
        div_logineusuario.innerHTML = `
        <div>
        <img src="../vetores/usuario_foto.png" width="40px">
    </div>

    <div style="margin-top: 15px;">
        <span style="color: white;">Olá,<span id="nome_usuario"></span></span>
        <div style="display: flex; align-items: center; margin-top: -20px; gap: 5px; width: 120px;">
            <img src="../vetores/estrela.png" width="20px">
            <h4 style="color: white;"><span id="ponto_usuario"></span> Pontos</h4>
        </div>
    </div>

    <div>
        <button onclick="loginmudar()" style="background-color: transparent; border: none; cursor: pointer;"><img src="../vetores/sair.png" width="20px"></button>
    </div>
        `
    cadastrar.style.display = 'none'
    }

    substituir()
}

var pontos_usuario = 0

function substituir(){
    var nome_user = sessionStorage.getItem("NOME_USUARIO")
    nome_usuario.innerHTML = `${nome_user}`
    var idUsuario = sessionStorage.getItem("ID_USUARIO")

    fetch(`/usuarios/substituir/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                pontos_usuario = resposta[0].pontos;
    
                ponto_usuario.innerHTML = `${resposta[0].pontos}`;
    
                console.log(pontos_usuario); // Aqui o valor de pontos_usuario estará correto
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function loginmudar(){
        div_logineusuario.innerHTML = `
        <a href="./login.html"><img src="../vetores/login.svg" width="120px" class="ticket_login"></a>
        `
        cadastrar.style.display = 'block'
}