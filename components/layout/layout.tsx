import Footer from "./footer";
import Header from "./header";

const Layout = ({
    children
}: any) => {

    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Header />
                <div id="container" className={``}>
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout