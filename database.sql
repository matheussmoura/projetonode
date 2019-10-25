CREATE DATABASE matheusapp;

use matheusapp;

CREATE TABLE usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100), 
    email VARCHAR(150),
    senha VARCHAR(50),
    dtNascimento DATE,
    cep VARCHAR(15),
    bairro VARCHAR(70),
   	rua VARCHAR(70),
    estado VARCHAR(50)
)

/* GERADO AUTOMATICAMENTE NO PHPMYADMIN */


INSERT INTO `usuario` 
(`id`, `nome`, `email`, `senha`, `dtNascimento`, `cep`, 
`bairro`, `rua`, `estado`) 
VALUES (NULL, 'Ana', 'ana@gmail.com', 
'123123123', '1997-04-01', '22250-040', 
'Botafogo', 'Praia Botafogo - de 285/286 ao fim',
 'Rio de Janeiro'); 