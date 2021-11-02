import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isSignPage =
    router.pathname === "/signin" || router.pathname === "/signup";

  return (
    <>
      {!isSignPage && <Navbar />}

      {isSignPage ? (
        <Component {...pageProps} />
      ) : (
        <div className="p-5 lg:p-10">
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;
