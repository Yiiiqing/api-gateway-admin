module.exports = {
    development: {
      username: 'test',
      password: '113@db!',
      database: 'yiqing_api_gateway',
      host: '10.0.0.113',
      dialect: 'mysql',
      opratorsAliases:true,
      timezone: '+08:00' //东八时区
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      dialect: process.env.DB_CONNECTION,
      opratorsAliases:true,
      timezone: '+08:00' //东八时区
    },
}