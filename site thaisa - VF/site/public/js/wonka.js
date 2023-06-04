// function usuariomudar() {
//     if (sessionStorage.NOME_USUARIO != "") {
//         div_logineusuario.innerHTML = `
//         <div>
//         <img src="../vetores/usuario_foto.png" width="40px">
//     </div>

//     <div style="margin-top: 15px;">
//         <span style="color: white;">Olá,<span id="nome_usuario"></span></span>
//         <div style="display: flex; align-items: center; margin-top: -20px; gap: 5px; width: 120px;">
//             <img src="../vetores/estrela.png" width="20px">
//             <h4 style="color: white;"><span id="ponto_usuario"></span> Pontos</h4>
//         </div>
//     </div>

//     <div>
//         <button onclick="loginmudar()" style="background-color: transparent; border: none; cursor: pointer;"><img src="../vetores/sair.png" width="20px"></button>
//     </div>
//         `
//     cadastrar.style.display = 'none'
//     }

//     substituir()
// }

// var pontos_usuario = 0

// function substituir(){
//     var nome_user = sessionStorage.getItem("NOME_USUARIO")
//     nome_usuario.innerHTML = `${nome_user}`
//     var idUsuario = sessionStorage.getItem("ID_USUARIO")

//     fetch(`/usuarios/substituir/${idUsuario}`).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(function (resposta) {
//                 console.log("Dados recebidos: ", JSON.stringify(resposta));
//                 pontos_usuario = resposta[0].pontos;
    
//                 ponto_usuario.innerHTML = `${resposta[0].pontos}`;
    
//                 console.log(pontos_usuario); // Aqui o valor de pontos_usuario estará correto
//             });
//         } else {
//             throw ('Houve um erro na API!');
//         }
//     }).catch(function (resposta) {
//         console.error(resposta);
//     });

// }

// function loginmudar(){
//         div_logineusuario.innerHTML = `
//         <a href="./login.html"><img src="../vetores/login.svg" width="120px" class="ticket_login"></a>
//         `
//         cadastrar.style.display = 'block'
// }

function mostrar_conteudo() {
    aparecer_willy.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/willy_wonka_foto.jpg" width="300px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Willy Wonka</h1>
                <p>Willy Wonka é criativo e perseverante na construção de sua fábrica de chocolate, usando ingredientes incomuns para criar sabores únicos. Ele testa os visitantes com jogos para encontrar um sucessor e enfrenta desafios como a concorrência e a busca por ingredientes raros. Willy nunca desiste e sempre encontra soluções criativas para superar os desafios. Ele é inspirador, encorajando a inovação e superação de desafios, e sua história é um clássico da literatura infantil amado por gerações.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal() {
    aparecer_willy.innerHTML = " ";
}

function nobrega(){
    aparecer_willy.innerHTML = `
    <div class="modal_willy">
        <div class="fundo_modal_willy">
            <div class="conteudo_modal_willy" style="margin-top: 10px;"> 
                <img src="../vetores/thaisa.png" width="300px" style="border-radius: 20px;">
    
                <div class="texto">
                    <div class="fechar">
                        <button onclick="fechar_modal()" class="botao_fechar">X</button>
                    </div>
                    <h1 style="font-weight: 900;">Thaisa Nobrega</h1>
                    <p>Sou a Thaisa! Sou formada em Design, e cursando Análise e Desenvolvimento de Sistemas!</p> 
                    <p>Wonka sempre foi uma inspiração de criatividade e empenho para tudo que vou fazer!</p> 
                    <p>Nunca foi o chocolate, mas sim todas a criatividade e emprenho que Wonka construiu sua fábrica que fizeram eu ser uma grande admiradora!</p>
                    <p>Meu site vai te levar a uma jornada repleta de cores vibrantes, personagens fascinantes e uma história inspiradora.
                    </p>
                    <div style="margin-left: 200px; width: 100%;"><img src="../vetores/nobrega.png" width="70px"></div>
                </div>
            </div>
        </div>
    </div>
    `
}