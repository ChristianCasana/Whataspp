
const configs = {
  api: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:3000',
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  db: {
    development: {
      //? Aquí deberán estar las configuraciones para la conexión con sequelize
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chat-db',
      define: {
        timestamps: true, //? Nos obliga que todas las tablas tengan la propiedad createdAt y updatedAt
        underscored: true,
        underscoredAll: true
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    },
    production: {

    },
    testing: {

    }
  }
}

module.exports = configs