//Type
type Order = {
    productId: string;
    price:number
}

//Type
type User={
    firstName:string;
    age: number;
    email:string;
    password?: string; //? torna opcional o objeto
    orders:Order[]
}

const user: User= {
    firstName: 'Jane',
    age: 20,
    email:'jane@email.com',
    password: '12345',
    orders:[{productId:'1',price:200}]
}