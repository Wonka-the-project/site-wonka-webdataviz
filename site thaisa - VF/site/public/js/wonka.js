function limpar(){
if (!sessionStorage.getItem('paginaCarregada')) {
    sessionStorage.clear();
  
    sessionStorage.setItem('paginaCarregada', 'true');
  }
}

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