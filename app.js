const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user:'sql10701770',
    password:'uh4Vi5Y7dZ',
    database:'sql10701770'
})

connection.connect()

//inserir dados - insert into nometabela
function inserir(lg,sn,mail) {
    let sql = "insert into users set ?"
    let dados = {login:lg,senha:sn,email:mail}

    connection.query(sql,dados, function(error,results,fields){
        if(error) throw error
        console.log("cadastro com sucesso!")
    })
}
//selecionar dados por id - select nometabela
function selecionaPorId(id){
    let sql ="select * from users where id = ?"
    connection.query(sql,id, function(error,results,fields){
                 if(error) throw error
                 console.log("selecionado: " + results[0].id + ":" + results[0].login +
                                                                          ":" + results[0].email)
        
 

        
    })
}


//selecionar dados por id - select nometabela
function selecionaTudo(){
    let sql ="select * from users "
    connection.query(sql, function(error,results,fields){

        for(let i=0;i<results.length;i++) {
                 if(error) throw error
                 console.log("selecionado: " + results[i].id + ":" + results[i].login +
                                                                          ":" + results[i].email)
        }
        
 

        
    })
}

selecionaTudo()


//Apagar dados - delete from nometabela
function apagar(id){
    let sql = "delete from users where id = ?"
    connection.query(sql,id, function(error,results,fields){
        if(error) throw error
        console.log("Apagado com sucesso! " + id)

    })
}


connection.end()