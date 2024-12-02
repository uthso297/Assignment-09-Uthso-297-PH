import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";



const Root = () => {
    

    return (
        <>
            <header>
                <section className="bg-[#095749] py-4 px-3">
                    <NavBar />
                </section>
               
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Root;
