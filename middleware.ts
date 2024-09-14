import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
    '/settings',
    '/admin',
  ]);
  
  
  
  export default clerkMiddleware((auth, req) => {
  

      //alow get requests w/o auth so non-logged in users can search
      if(req.method==='POST' || req.method==='GET' || req.method==='HEAD'){
        return;
      }

      if (isProtectedRoute(req)) {
        auth().protect()
      };

  });
  
  export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };