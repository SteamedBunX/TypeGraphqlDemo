import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { MyContext } from "../../types/MyContext";
import { CalculationResult } from "../types/CalculationResult";

@Resolver()
export class AdditionResolver {

    @Mutation(() => CalculationResult)
    async add(@Arg("num1", { nullable: true }) num1: number, @Arg("num2", { nullable: true }) num2: number, @Ctx() ctx: MyContext) {
        var registered: Boolean = false;
        var paidUser: Boolean = false;
        switch (ctx.req.headers.uid) {
            case "3579248":
                registered = true;
                break;
            case "3552443":
                registered = true;
                paidUser = true;
                break;
        }

        if(!registered){
            throw Error("You must login to perform this action")
        }
        if(!paidUser){
            if(Math.abs(num1) >= 100 || Math.abs(num2) >= 100){
                throw Error("You cannot do addition above 3 digit from without a subscription")
            }
        }

        const result: CalculationResult = {
            detail: `${num1} + ${num2} = ${num1 + num2}`,
            result: num1 + num2
        };
        return result;
    }
}