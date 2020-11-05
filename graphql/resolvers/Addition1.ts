import { Resolver, Arg, Mutation } from "type-graphql";

@Resolver()
export class AdditionResolver {
    
    @Mutation(() => String)
    async add(@Arg("num1", { nullable: true })num1: number,@Arg("num2", { nullable: true })num2: number) { 
    return `${num1} + ${num2} = ${num1+num2}`;
    }
}