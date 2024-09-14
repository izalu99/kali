import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
    '/settings',
    '/admin',
    '/api/graphql',
  ]);
  
  
  
  export default clerkMiddleware((auth, req) => {

    // allow post requests to the graphql api
    if (req.url.startsWith('/api/graphql') && req.method === 'POST') {
      return;
    }

    if (isProtectedRoute(req)) {
      auth().protect()
    };

  });
  
  export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };