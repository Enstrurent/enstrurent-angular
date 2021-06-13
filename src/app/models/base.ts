import { Time } from "@angular/common";
import { LiteralPrimitive } from "@angular/compiler";

export interface Base{
    id:number
    createdAt:Time
    updatedAt:Time
    deletedAt:Time
}