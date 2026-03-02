import { Header } from "@/components/header-2";
import Footer from "@/components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex justify-center">
      <div className="w-[50%] outline-1 outline-gray-200 py-4" id="home">
        {isHome && <Header />}
        <main className="mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
