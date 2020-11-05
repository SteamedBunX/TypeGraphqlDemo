import { AuthChecker } from "type-graphql"
import { MyContext } from "../types/MyContext"

const registeredUsers = ["1252342", "2512452", "6435234", "1532522", "3847293", "4729465", "4739453"]
const paidUsers = ["3847293", "4729465", "4739453"]

export const authChecker: AuthChecker<MyContext> = ({ context }, roles) => {
    var authorized = true;
    roles.forEach((role) => {
        switch (role) {
            case "REGISTERED":
                if (!registeredUsers.includes(context.req.headers.uid as string)) {
                    authorized = false;
                    return false;
                }
                break;
            case "PAID":
                if (!paidUsers.includes(context.req.headers.uid as string)) {
                    authorized = false;
                    return false;
                }
        }
    })
    context.req.headers.roles = roles
    console.log( context.req.headers.roles)
    return authorized;
}