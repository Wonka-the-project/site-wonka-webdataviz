var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome, personagem, email, senha) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, email, senha, fkPersonagem) VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', ${personagem});
        `;
    // console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibir() {
    var instrucao = `
SELECT SUM(pontos) AS total_pontos, nome FROM pontuacao JOIN usuario ON fkUsuario = idUsuario GROUP BY usuario.nome ORDER BY total_pontos DESC LIMIT 5;
`
    return database.executar(instrucao);
}

function exibir_votos() {
    var instrucao = `
    select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 2;
    `
    return database.executar(instrucao);
}

function exibir_votos_augustus() {
    var instrucao = `
        select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 3;
        `
    return database.executar(instrucao);
}

function exibir_votos_violet() {
    var instrucao = `
            select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 4;
            `
    return database.executar(instrucao);
}

function exibir_votos_veruca() {
    var instrucao = `
            select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 5;
            `
    return database.executar(instrucao);
}

function exibir_votos_mike() {
    var instrucao = `
            select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 6;
            `
    return database.executar(instrucao);
}

function exibir_votos_charlie() {
    var instrucao = `
            select distinct personagem.idPersonagem, count(usuario.fkPersonagem) as contagem from usuario join personagem on fkPersonagem = idPersonagem where idPersonagem = 1;
            `
    return database.executar(instrucao);
}

function obterPontos(id) {
    var instrucao = `
            SELECT SUM(pontos) AS pontos FROM pontuacao JOIN usuario ON fkUsuario = idUsuario WHERE usuario.idUsuario = '${id}';
        `;
    return database.executar(instrucao);
}

function pontuacao(pontos, id) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into pontuacao (pontos, dtPontos, fkUsuario) values (${pontos}, now(), ${id});
        `;
    // console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    exibir,
    exibir_votos,
    exibir_votos_augustus,
    exibir_votos_violet,
    exibir_votos_veruca,
    exibir_votos_mike,
    exibir_votos_charlie,
    obterPontos,
    pontuacao
};