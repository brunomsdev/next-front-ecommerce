import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

export function withAuth(gssp?: GetServerSideProps){
  return async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(context.req, context.res, authOptions)

    if(!session){
      return {
        redirect:  {
          destination: "/login",
          permanent: false
        }
      }
    }

    const cleanedSession = {
      user: { 
        id: session?.user?.id || null,
        name: session?.user?.name || null,
        email: session?.user?.image || null,
        image: session?.user?.image || null
      },
      accessToken: session?.accessToken || null,
      expires: session?.expires || null
    }

    if(gssp){
      const gsspData = await gssp(context)

      if('props' in gsspData){
        return {
          props: {
            ...gsspData.props,
            session: cleanedSession
          }
        }
      }

      return gsspData
    }

    return {
      props: {
        session: cleanedSession
      }
    }

  } 
}