import ResponsiveAppBar from './Navbar';
import "./Page.css";

function Page({ children }) {
    return (
        <section className="page">
            <ResponsiveAppBar />
            {children}
        </section>
    )
}

export default Page;