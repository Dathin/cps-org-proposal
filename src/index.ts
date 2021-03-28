import Database from "./config/Database";
import server from "./graphql/server/apollo";
import { getPerson } from "./repository/PersonRepositoy";

new Database();
getPerson();
// const sequelize = database.getSequelize();
// postgresConfig.sync().then(() => console.log(`🚀 Connected to database`))

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});