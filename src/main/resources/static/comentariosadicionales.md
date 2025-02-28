# SPRING

## comando para correr spring por cl
mvn spring-boot:run


# BASE DE DATOS:

## Cambiar nombre aun campo de una tabla cambias el campo paswoord a password
ALTER TABLE usuarios CHANGE COLUMN  paswoord  password varchar(45);


## Insersion de datos usuarios e la tabla (aqui van los campos id es autoincrement) y values(valores a insertar)
insert into usuarios (nombres,apellidos, email,telefono,password)
values  ('Luis','Suarez','lucho@gmail.com','666659874','fcshasas15!62');


## Modificar  la columna id de la tabla usuarios para qeu sea auto incrementable tipo bigint y no null
ALTER TABLE usuarios MODIFY COLUMN id BIGINT NOT NULL AUTO_INCREMENT ;

## Ver puertos y host mysql
SHOW VARIABLES
WHERE Variable_name IN (
'hostname',
'port')

## Ver version de mysql
SELECT version ();

## Aveces es necesario cambiar la zona horaria para que peuda compilar
SET @@global.time_zone = '+00:00';
SET @@session.time_zone = '+00:00';
SELECT @@global.time_zone, @@session.time_zone;

