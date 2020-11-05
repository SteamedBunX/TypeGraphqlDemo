import { Arg, Authorized, Ctx, Mutation, registerEnumType, Resolver } from "type-graphql";
import { MyContext } from "../../types/MyContext";
import { CalculationResult } from "../types/CalculationResult";

@Resolver()
export class AdditionResolver {

    @Mutation(() => CalculationResult)
    async add(@Arg("num1", { nullable: false}) num1: number, @Arg("num2", { nullable: false }) num2: number, @Ctx() ctx: MyContext) {
        const result: CalculationResult = {
            detail: `${num1} + ${num2} = ${num1 + num2}, request was sent with the roles: ${ctx.req.headers.roles}`,
            result: num1 + num2
        };
        return result;
    }
}