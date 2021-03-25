import server from "./graphql/server/apollo"

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});