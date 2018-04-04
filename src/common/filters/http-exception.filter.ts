import { ExceptionFilter, Catch } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import * as express from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, response: express.Response) {
        const status = exception.getStatus();

        response
        .status(status)
        .json({
            statusCode: status,
            message: status === 404 ? "Resource not found" : "Exception filter message",
        });
    }

}