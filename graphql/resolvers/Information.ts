import {Query, Resolver } from "type-graphql";

@Resolver()
export class InformationResolver {
    
    @Query(() => String)
    async aboutUs(){
        return "This is the back end API of the next big thing.";
    }
}