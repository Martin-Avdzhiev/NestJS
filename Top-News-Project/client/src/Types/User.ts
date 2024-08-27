export type User = {
    email: string;
    username:string;
    password:string;
}

export type UserError = {
    message: string[],
    error: string;
    statusCode: number;
}