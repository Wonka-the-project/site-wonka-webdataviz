
function girar() {
    container.innerHTML = `<img src="../vetores/cartola.png" width="100px" class= "girante">`;
    container.style.transform = "rotate(720deg)";
    container.style.transition = "3s";

    container.addEventListener("transitionend", function () {
        wonkacards();
    });
}

var pontos_card = 0

function wonkacards() {
    var personagem = [
        willy = {
            imagem: `<img src="../vetores/willy_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema wonka.mp3" type="audio/mp3">`
        },
        augustus = {
            imagem: `<img src="../vetores/augustus_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema augustus.mp3" type="audio/mp3">`
        },
        violet = {
            imagem: `<img src="../vetores/violet_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema violet.mp3" type="audio/mp3">`
        },
        veruca = {
            imagem: `<img src="../vetores/veruca_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema veruca.mp3" type="audio/mp3">`
        },
        mike = {
            imagem: `<img src="../vetores/mike_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema mike.mp3" type="audio/mp3">`
        },
        charlie = {
            imagem: `<img src="../vetores/charlie_card.png" width= 210px>`,
            musica: `<source src="../vetores/musica tema.mp3" type="audio/mp3">`
        },
    ];

    var aleatorio_personagem = parseInt(Math.random() * 6);
    var aleatorio_card = parseInt(Math.random() * 3 + 1);

    var nome_card_aleatorio = "card" + aleatorio_card;

    if (aleatorio_personagem == 0) {
        pontos_card = 200;
    } else if (aleatorio_personagem == 1) {
        pontos_card = 20;
    } else if (aleatorio_personagem == 2) {
        pontos_card = 30;
    } else if (aleatorio_personagem == 3) {
        pontos_card = 15;
    } else if (aleatorio_personagem == 4) {
        pontos_card = 25;
    } else if (aleatorio_personagem == 5) {
        pontos_card = 100;
    }

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div id="div_1" style="display: flex; flex-direction: row; gap: 10px; margin-bottom: 25px;">
                <div id="card1">
                    <img src="../vetores/back card.png" width="210px">
                </div>
                <div id="card2">
                    <img src="../vetores/back card.png" width="210px">
                </div>
                <div id="card3">
                    <img src="../vetores/back card.png" width="210px">
                </div>
            </div>
            <div style="display: flex;">
                <div class="musica">
                    <audio class="control" controls>
                        ${personagem[aleatorio_personagem].musica}
                    </audio>
                </div>
            </div>
        </div>
        <div id="div_sorteio" style="display: flex; flex-direction: column; align-items: center; margin-top: -25px;">
            <img src="../vetores/wonka card logo.svg" width="300px">
            <div style="display: flex; align-items: center; gap: 2px;">
                <img src="../vetores/estrela.png" width="30px">
                <span style="color: #67391d">${pontos_card} Pontos</span>
            </div><br>
            <button id="botao_sortear" class="botao_sortear">Wonka Bar</button>
        </div>
    `;

    document.getElementById(nome_card_aleatorio).innerHTML = personagem[aleatorio_personagem].imagem;
    
    adicionar_pontos()

    div_alert.innerHTML = `
                    <div class="div_1"
                        style="margin-top: 25px; width: 350px;height: 150px;background-color:#c5ac5a;border-radius: 30px;display: flex;align-items: center;justify-content: center;gap: 30px;">
                        <div>
                            <img src="./vetores/check cards.png" width="100px">
                        </div>
                        <div style="width: 40%; text-align: center; font-size: x-large; font-weight: 700;
                            color: white;">
                            Ganhou ${pontos_card} pontos!
                        </div>
                    </div>
                `;

                div_alert.style.display = "block";

                setTimeout(function () {
                    div_alert.style.display = "none";
                }, 2000);
}

// function redirecinar() {
//     window.location.href = "./wonkabar.html";
// }

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

function adicionar_pontos(){
    var idUsuario = sessionStorage.getItem("ID_USUARIO")

    fetch(`/usuarios/pontuacao/${idUsuario}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontosServer: pontos_card
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block";
            console.log('pontos inseridos no banco')
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function verificar(){ 

    if(sessionStorage.NOME_USUARIO == null){
        aparecer_willy.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy" style="height: 250px; width: 650px;display: flex; align-items: center;justify-content: center;">
        <div class="conteudo_modal_willy"> 
            <img src="./vetores/cadeado.png" width="100px">

            <div class="texto" style="width: 250px;">
            
                <h2 style="font-weight: 700; width: 250px;">Faça Login para Continuar</h2>
                <a href="./login.html"><img src="./vetores/login.svg" width="150px"></a>
            </div>
        </div>
    </div>
</div>   
        `
    }
}