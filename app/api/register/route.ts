import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import db from '@/libs/db';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if(!email || !password || !name) {
    return new NextResponse('Please provide data', {
      status: 400
    })
  }

  const user = await db.user.findUnique({
    where: {
      email
    }
  })

  if(user) {
    return new NextResponse('User already exists', {
      status: 400
    })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  await db.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  })

  return NextResponse.json({ message: 'User created' })
}