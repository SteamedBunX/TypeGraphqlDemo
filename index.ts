import "reflect-metadata"
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {buildSchema} from 'type-graphql';
import { AdditionResolver } from "./graphql/resolvers/Addition5";
import { InformationResolver } from "./graphql/resolvers/Information";
import { authChecker } from "./graphql/authorize";

const main = async () => {
    const schema = await buildSchema({
        resolvers: [InformationResolver, AdditionResolver],
        authChecker
    });

    const apolloServer = new ApolloServer({
        schema,
        context: ({req}: any) => ({req})},
    );

    const app = Express();
    apolloServer.applyMiddleware({app, path: "/graphql"})

    app.listen(4000, () => {
        console.log(`The next big thing is launched at http://localhost:4000${apolloServer.graphqlPath} 🚀`)
    })
}

main();