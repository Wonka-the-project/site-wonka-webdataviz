function mostrar_conteudo(){
    aparecer_loompa.innerHTML = `
<div class="modal_willy">
    <div class="fundo_modal_willy">
        <div class="conteudo_modal_willy"> 
            <img src="../vetores/loompa_foto.jpg" width="270px" style="border-radius: 20px;">

            <div class="texto">
                <div class="fechar">
                    <button onclick="fechar_modal()" class="botao_fechar">X</button>
                </div>
                <h1 style="font-weight: 900;">Loompalândia</h1>
                <p>Oompa-Loompas são uma raça de seres pequenos e trabalhadores que vieram de Loompalandia, um lugar remoto e desconhecido. Os Oompa-Loompas são conhecidos por seus cânticos engraçados e habilidades na fabricação de chocolate. Eles são leais a Willy Wonka e trabalham na fábrica de chocolate para ajudá-lo a criar seus doces. Oompa-Loompalandia é um lugar misterioso que Willy Wonka descreve como um lugar com rios de chocolate e árvores de bom-bom, lagartas verdes e abrigos nas árvores.</p>
            </div>
        </div>
    </div>
</div>
`
}

function fechar_modal(){
    aparecer_loompa.innerHTML = " ";
}

function nobrega(){
    aparecer_loompa.innerHTML = `
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