import { Request } from "express"
import { request } from "http"

export interface MyContext{
    req: Request
}