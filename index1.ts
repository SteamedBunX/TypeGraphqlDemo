import "reflect-metadata"
import Express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {buildSchema, Query, Resolver} from 'type-graphql';

Resolver()
class HelloWorldResolver {
    
    @Query(() => String)
    async helloWorld() {
        return 'Hello World!🚀';
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloWorldResolver],
    });

    const apolloServer = new ApolloServer({schema})

    const app = Express();
    apolloServer.applyMiddleware({app, path: "/graphql"})

    app.listen(4000, () => {
        console.log(`The next big thing is launched at http://localhost:4000${apolloServer.graphqlPath} 🚀`)
    })
}

main();