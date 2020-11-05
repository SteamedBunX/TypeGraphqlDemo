import { ObjectType, Field, Int, Authorized } from "type-graphql";

@ObjectType()
export class CalculationResult{
    @Authorized("REGISTERED")
    @Field()
    detail: String;

    @Authorized(["REGISTERED","PAID"])
    @Field(type => Int)
    result: number;
}