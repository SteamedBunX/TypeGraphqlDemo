import { Arg, Mutation, Resolver } from "type-graphql";
import { CalculationResult } from "../types/CalculationResult";

@Resolver()
export class AdditionResolver {
    
    @Mutation(() => CalculationResult)
    async add(@Arg("num1", { nullable: true })num1: number,@Arg("num2", { nullable: true })num2: number) { 
        const result: CalculationResult = {
            detail:`${num1} + ${num2} = ${num1+num2}`, 
            result: num1+num2};
    return result;
    }
}