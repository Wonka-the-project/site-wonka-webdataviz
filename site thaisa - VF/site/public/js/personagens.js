
function mostrar_conteudo_augustus(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/foto augustus.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Augustus Gloop</h1>
                <p>Augustus Gloop é um garoto alemão obeso e voraz que adora comer chocolate. Augustus é o primeiro a ser eliminado da competição na fábrica de Willy Wonka, após cair em um rio de chocolate e ser sugado por um cano. Embora seja um personagem cômico, Augustus serve como um lembrete para que as pessoas não sejam excessivamente gananciosas ou descuidadas.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_violet(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/foto violet.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Violet Beauregarde</h1>
                <p>Violet Beauregarde  é uma garota americana que é obcecada por chicletes e está sempre mascando um. Violet é eliminada da competição na fábrica de Willy Wonka depois de experimentar um chiclete experimental e transformar-se em um mirtilo gigante. Embora seja um personagem engraçado, Violet serve como um lembrete de que a moderação é importante e que devemos ter cuidado ao experimentar coisas novas.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_veruca(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/foto veruca.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Varuca Salt</h1>
                <p>Veruca Salt é uma garota inglesa mimada e mimada que sempre consegue o que quer. Veruca é eliminada da competição na fábrica de Willy Wonka depois de exigir um esquilo dourado e cair em uma lixeira de lixo. Embora seja um personagem negativo, Veruca serve como um lembrete de que a arrogância e a ganância não são virtudes positivas e podem levar a consequências negativas.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_mike(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/foto mike.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Mike Teevee</h1>
                <p>Mike Teevee é um garoto americano obcecado por televisão e videogames. Mike é eliminado da competição na fábrica de Willy Wonka depois de ser reduzido a um tamanho minúsculo por um dispositivo de teletransporte. Embora seja um personagem divertido, Mike serve como um lembrete de que devemos equilibrar nosso tempo entre atividades de tela e atividades ao ar livre e interação social.</p>
            </div>
        </div>
    </div>
</div>
`
}

function mostrar_conteudo_charlie(){
    aparecer_personagens.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/foto charlie.png" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Charlie Bucket</h1>
                <p>Charlie Bucket é um garoto humilde e bondoso que vive em uma pequena casa com sua família pobre. Charlie é escolhido por Willy Wonka para ser o sucessor da fábrica após passar por uma série de testes. Charlie representa a humildade, a gratidão e a perseverança. Ele é um exemplo inspirador de que, independentemente das circunstâncias, podemos alcançar nossos sonhos se trabalharmos duro e tivermos um coração bom.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_personagens.innerHTML = " ";
}

function nobrega(){
    aparecer_personagens.innerHTML = `
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