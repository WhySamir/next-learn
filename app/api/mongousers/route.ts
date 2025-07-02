import {dbConnect} from '@/lib/mongoConnect'
import {User} from '@/models/user'

export async function POST(req:Request){
   try {
     await dbConnect();
     const {name,email} =await req.json();
    const user =  await User.create({name,email})
      return new Response(JSON.stringify(user), { status: 201 });
   } catch (error:any) {
     if (error.code === 11000) {
      return new Response("Email already exists", { status: 409 });
    }
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
   
}


export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const { id, name, email } = await req.json();
    const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();
    await User.findByIdAndDelete(id);
    return new Response("User deleted", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}