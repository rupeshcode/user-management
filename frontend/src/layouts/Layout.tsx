// import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const NO_HEADER_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = new Set(["/login", "/register"]);
const DEFAULT_PUBLIC_ROUTE = "/login";

const isProtectedRoute = (route: string) => !PUBLIC_ROUTES.has(route);

function Layout({ children }: any) {
  const router = useRouter();
  //   const token = useUserStore.use.token();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if (router.pathname === "/") {
    //   router.push("/login");
    // }
    // if (!token) {
    //   setStatus(false);
    //   return;
    // }
    // if (token && !isProtectedRoute(router.pathname)) {
    //   router.push("/dashboard");
    //   return;
    // }
    setStatus(true);
  }, [router.asPath]);

  const setStatus = (isValid: boolean) => {
    setTimeout(() => {
      if (!isValid && isProtectedRoute(router.asPath)) {
        router.replace(DEFAULT_PUBLIC_ROUTE);
      }
      setIsAuthenticated(isValid);
      setIsLoading(false);
    }, 500);
  };

  return (
    !isLoading &&
    (isAuthenticated ||
      (!isAuthenticated && PUBLIC_ROUTES.has(router.asPath))) && (
      <div className="flex flex-column w-100 h-100 ">
        {/* {!NO_HEADER_ROUTES.includes(router.pathname) && <Header />} */}
        <div>{children}</div>
        {/* {!NO_HEADER_ROUTES.includes(router.pathname) && <Footer />} */}
      </div>
    )
  );
}

export default Layout;
