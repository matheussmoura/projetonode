const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão
const mysql = require('mysql')

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: '',
        port: 3306,
        user: 'root',
        password: '',
        database: 'matheusapp'
    })

    connection.query(sqlQry, function(error, results, fields){
        if (error) res.json(error)
        else res.json(results)
        connection.end()
        console.log('executou!')
    })
}

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//definindo as rotas
const router = express.Router()
router.get('/', (req, res) =>{
    res.json({message : 'Hello world para não dar azar!'})
    })

//listar todos os usuario
router.get('/usuario/listar', (req, res) =>{
    execSQLQuery('SELECT * FROM usuario', res);
})

// lista por id
router.get('/usuario/user/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id); // evitando sql injection
    console.log("o id passado foi " + req.params.id)
    execSQLQuery('Select * FROM usuario ' + filter, res);
})

router.post('/usuario/adicionar/', (req, res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const dtNascimento = req.body.dtNascimento;
    const cep = req.body.cep;
    const bairro = req.body.bairro;
    const rua = req.body.rua;
    const estado = req.body.estado;
    console.log("matheus esteve aqui")
    execSQLQuery(`INSERT INTO usuario 
    (id, nome, email, senha, dtNascimento, cep, bairro, rua, estado) 
    VALUES (NULL, '${nome}', '${email}', '${senha}', '${dtNascimento}', '${cep}', '${bairro}', '${rua}', '${estado}')`, res);
});

    app.use('/', router)

    app.listen(process.env.PORT || port)

console.log(`API funcionando`)