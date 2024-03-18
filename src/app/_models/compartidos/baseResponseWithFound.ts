import { baseResponse } from "./BaseResponse";

export interface BaseResponseWithFound extends baseResponse{
    encontado : boolean,
}
