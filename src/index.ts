import server from "./graphql/server/apollo";
import postgresConfig from "./database/config/cofig";

postgresConfig.sync().then(() => console.log(`🚀 Connected to database`))

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});