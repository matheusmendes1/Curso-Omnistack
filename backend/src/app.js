const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

// App deve entender json
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() <- preferencial
 */