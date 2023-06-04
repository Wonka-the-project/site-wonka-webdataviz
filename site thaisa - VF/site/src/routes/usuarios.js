var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/obter", function(req, res){
    usuarioController.exibir(req, res)
})

router.get("/obterContagem", function(req, res){
    usuarioController.obterContagem(req, res)
})

router.get("/obterContagem_augustus", function(req, res){
    usuarioController.obterContagemAugustus(req, res)
})

router.get("/obterContagem_violet", function(req, res){
    usuarioController.obterContagemviolet(req, res)
})

router.get("/obterContagem_veruca", function(req, res){
    usuarioController.obterContagemveruca(req, res)
})

router.get("/obterContagem_mike", function(req, res){
    usuarioController.obterContagemmike(req, res)
})

router.get("/obterContagem_mike", function(req, res){
    usuarioController.obterContagemmike(req, res)
})

router.get("/obterContagem_charlie", function(req, res){
    usuarioController.obterContagemcharlie(req, res)
})

router.get("/substituir/:idUsuario", function(req, res){
    usuarioController.obterPontos(req, res)
})

router.post("/pontuacao/:idUsuario", function (req, res) {
    usuarioController.pontuacao(req, res);
})

module.exports = router;