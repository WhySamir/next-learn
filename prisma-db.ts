import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const seedProducts = async ()=>{
    const count =  await prisma.product.count()
    if(count === 0){
        await prisma.product.createMany({
            data:[
                {title:"Product1",price:400, description:"Description1"},
                {title:"Product2",price:500, description:"Description2"},
                {title:"Product3",price:600, description:"Description3"},
            ]
        })
    }
}
seedProducts()

export async function getProducts() {
await new Promise((resolve)=>setTimeout(resolve,1500))    
return prisma.product.findMany()
}
export async function getProduct(id:number){
await new Promise((resolve)=>setTimeout(resolve,1500))   
return prisma.product.findUnique({
    where:{id}
}) 
}
export async function addProduct(title:string,price:number,description:string){
await new Promise((resolve)=>setTimeout(resolve,1500)) 
return prisma.product.create({
    data:{title,price,description}
})   
}

export async function updateProduct(id:number,title:string,price:number, description:string) {
    await new Promise((resolve)=>setTimeout(resolve,1500))    
return prisma.product.update({
    where:{id},
    data:{title,price,description}
})
    
}
export async function deleteProduct(id:number) {
    await new Promise((resolve)=>setTimeout(resolve,1500))    

    return prisma.product.delete({
        where:{id}
    })
    
}