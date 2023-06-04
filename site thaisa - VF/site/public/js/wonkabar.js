

function montar_barra() {
    var barra_de_chocolate = {
        pedaco: Number(inp_pedaco.value),
        chocolate: inp_chocolate.value,
        confeito: inp_confeito.value
    };

    if (barra_de_chocolate.pedaco == NaN || barra_de_chocolate.chocolate == "Escolher" || barra_de_chocolate.confeito == "Escolher") {
        div_alert.innerHTML = `
        <div class="div_1"
            style="margin-top: 25px; width: 350px;height: 150px;background-color:#c5ac5a;border-radius: 30px;display: flex;align-items: center;justify-content: center;gap: 30px;">
            <div>
                <img src="./vetores/nao check barra.png" width="100px">
            </div>
            <div style="width: 40%; text-align: center; font-size: x-large; font-weight: 700;
                color: white;">
                Campos em branco!
            </div>
        </div>
    `;

    div_alert.style.display = "block";

    setTimeout(function () {
        div_alert.style.display = "none";
    }, 2000);
    } else {
        localStorage.setItem('barra_de_chocolate', JSON.stringify(barra_de_chocolate));

        redirecionar()
    }

}

function redirecionar() {
    window.location.href = "./goldenticket.html";
}

function fechar_modal() {
    aparecer_willy.innerHTML = " ";
}

function nobrega() {
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

function verificar() {
    if (sessionStorage.NOME_USUARIO == null) {
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