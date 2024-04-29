create database bob;
use bob;

create table usuario(
    id int auto_increment not null,
    login varchar (120) null,
    senha varchar(120) null,
    email varchar(200) null,
    primary key(id)
)