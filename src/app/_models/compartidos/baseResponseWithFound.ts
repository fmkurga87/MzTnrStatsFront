import { baseResponse } from "./baseResponse";

export interface BaseResponseWithFound extends baseResponse{
    encontrado : boolean,
}
