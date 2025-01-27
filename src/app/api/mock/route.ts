import { executeSeed } from './../utils/seed';

export async function GET(req:any,
    res:any) {

    const message = "Hello World";


    executeSeed();


    return Response.json({ message });
    
}