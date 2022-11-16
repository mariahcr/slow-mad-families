import ResponsiveAppBar from './Navbar';
import SlowmadAppFooter from './SlowmadAppFooter';
import "./Page.css";

function Page({ children }) {
    return (
        <section className="page">
            <ResponsiveAppBar />
            {children}
            <SlowmadAppFooter />
        </section>
    )
}

export default Page;