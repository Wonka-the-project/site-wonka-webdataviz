create database wonka;
use wonka;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
sobrenome varchar(45),
email varchar(100) unique,
senha varchar(50),
fkPersonagem int,
constraint fkPersonagem foreign key (fkPersonagem) references personagem(idPersonagem)
);

create table personagem (
idPersonagem int auto_increment primary key,
nome varchar(45),
sobrenome varchar(45),
fkDescricao int,
constraint fkDescricao foreign key (fkDescricao) references descricao(idDescricao)
);

create table descricao (
idDescricao int primary key auto_increment,
ator varchar(45),
caracteristica varchar(200)
);

create table pontuacao (
idPontuacao int primary key auto_increment,
pontos int,
dtPontos datetime,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
);

insert into descricao values 
(null, 'Freddie Highmore', 'Interpretou Charlie Bucket, o protagonista da história muito humilde'),
(null, 'Johnny Depp', 'Interpretou Willy Wonka com um toque excêntrico e misterioso.'),
(null, 'Philip Wiegratz', 'Interpretou Augustus Gloop, o menino guloso'),
(null, 'AnnaSophia Robb', 'Interpretou Violet Beauregarde, a campeã de mastigação de chiclete.'),
(null, 'Julia Winter', 'Interpretou Veruca Salt, uma das crianças ganhadoras do bilhete dourado.'),
(null, 'Jordan Fry', 'Interpretou Mike Teavee, um viciado em televisão.');

insert into personagem values
(null, 'Charlie', 'Bucket', 1),
(null, 'Willy', 'Wonka', 2),
(null, 'Augustus', 'Gloop', 3),
(null, 'Violet', 'Beauregard', 4),
(null, 'Vercua', 'Salt', 5),
(null, 'Mike', 'Teevee', 6);

insert into usuario values
(null, 'Margot', 'Nobrega', 'margot@wonka.com', '26122002Tn', 2),
(null,'João', 'Silva', 'joao.silva@wonka.com', 'senha123', 1),
(null,'Maria', 'Santos', 'maria.santos@wonka.com', 'abc456', 2),
(null,'Pedro', 'Ferreira', 'pedro.ferreira@wonka.com', 'qwerty', 3),
(null,'Ana', 'Oliveira', 'ana.oliveira@wonka.com', 'senha321', 4),
(null,'Lucas', 'Rodrigues', 'lucas.rodrigues@wonka.com', 'asdfg', 5),
(null,'Carla', 'Costa', 'carla.costa@wonka.com', '123456', 6),
(null,'Marcos', 'Almeida', 'marcos.almeida@wonka.com', 'senha789', 1),
(null,'Fernanda', 'Gomes', 'fernanda.gomes@wonka.com', 'qwerty123', 2),
(null,'Ricardo', 'Pereira', 'ricardo.pereira@wonka.com', 'senhaabc', 3),
(null,'Laura', 'Mendes', 'laura.mendes@wonka.com', '123abc', 4),
(null,'Luiz', 'Fernandes', 'luiz.fernandes@wonka.com', 'senha456', 5),
(null,'Camila', 'Ribeiro', 'camila.ribeiro@wonka.com', 'abc123', 6),
(null,'Gustavo', 'Carvalho', 'gustavo.carvalho@wonka.com', 'senhaxyz', 1),
(null,'Mariana', 'Nunes', 'mariana.nunes@wonka.com', '123xyz', 2),
(null,'Alexandre', 'Lima', 'alexandre.lima@wonka.com', 'senhabcd', 3);

select * from usuario;

insert into pontuacao values 
(null,15, '2023-06-01 10:00:00', 1),
(null,20, '2023-06-02 14:30:00', 2),
(null,25, '2023-06-03 09:15:00', 3),
(null,30, '2023-06-04 18:45:00', 4),
(null,50, '2023-06-05 11:20:00', 5),
(null,100, '2023-06-06 16:00:00', 6),
(null,200, '2023-06-07 13:10:00', 7),
(null,15, '2023-06-08 08:30:00', 8),
(null,20, '2023-06-09 12:45:00', 9),
(null,25, '2023-06-10 14:20:00', 10),
(null,30, '2023-06-11 09:00:00', 11),
(null,50, '2023-06-12 17:30:00', 12),
(null,100, '2023-06-13 10:45:00', 13),
(null,200, '2023-06-14 11:55:00', 14),
(null,15, '2023-06-15 15:10:00', 15),
(null,20, '2023-06-16 08:20:00', 16),
(null,25, '2023-06-17 12:35:00', 1),
(null,30, '2023-06-18 16:50:00', 2),
(null,50, '2023-06-19 09:15:00', 3),
(null,100, '2023-06-20 11:30:00', 4),
(null,200, '2023-06-21 14:45:00', 5),
(null,15, '2023-06-22 10:05:00', 6),
(null,20, '2023-06-23 13:20:00', 7),
(null,25, '2023-06-24 09:40:00', 8),
(null,30, '2023-06-25 11:55:00', 9),
(null,50, '2023-06-26 15:10:00', 10),
(null,100, '2023-06-27 08:25:00', 11),
(null,200, '2023-06-28 12:40:00', 12),
(null,15, '2023-06-29 14:55:00', 13),
(null,20, '2023-06-30 10:10:00', 14),
(null,25, '2023-07-01 13:25:00', 15),
(null,30, '2023-07-02 09:40:00', 16),
(null,50, '2023-07-03 11:55:00', 1),
(null,100, '2023-07-04 15:10:00', 2),
(null,200, '2023-07-05 08:25:00', 3),
(null,15, '2023-07-06 12:40:00', 4),
(null,20, '2023-07-07 14:55:00', 5),
(null,25, '2023-07-08 11:10:00', 6),
(null,30, '2023-07-09 13:25:00', 7),
(null,50, '2023-07-10 09:40:00', 8),
(null,100, '2023-07-11 11:55:00', 9),
(null,200, '2023-07-12 15:10:00', 10),
(null,15, '2023-07-13 08:25:00', 11),
(null,20, '2023-07-14 12:40:00', 12),
(null,25, '2023-07-15 14:55:00', 13),
(null,30, '2023-07-16 11:10:00', 14),
(null,50, '2023-07-17 13:25:00', 15),
(null,100, '2023-07-18 09:40:00', 16);

insert into pontuacao values 
(null,500, '2023-01-18 09:40:00', 1);



















