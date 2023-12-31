import db from '@/libs/db';
import getSession from './get-session';

export default async function getCurrentUser( ) {
  const session = await getSession();
  
  if(!session?.user?.email) return null

  const currentUser = await db.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if(!currentUser) return null

  return currentUser
}