import { Link } from "react-router";

function Footer() {
    return (
        <div className="container-fluid">
            <footer className="row">
                <div className="col-4">
                    <div className="p-3 m-3 h1">DigiShop</div>
                </div>
                <div className="col-4">
                    <div className="p-3 m-3">
                        <p className="h5">
                            Other Pages
                        </p>
                        <hr className="m-0 p-0" />
                        <ul className="navbar-nav">
                            <li className="m-0 p-0">
                                <Link className="m-0 p-0 h6 text-decoration-none" to="/">Home</Link>
                            </li>
                            <li className="m-0 p-0">
                                <Link className="m-0 p-0 h6 text-decoration-none" to="/store">Store</Link>
                            </li>
                            <li className="m-0 p-0">
                                <Link className="m-0 p-0 h6 text-decoration-none" to="/cards">Cards</Link>
                            </li>
                            <li className="m-0 p-0">
                                <Link className="m-0 p-0 h6 text-decoration-none" to="/about-us">About US</Link>
                            </li>
                            <li className="m-0 p-0">
                                <Link className="m-0 p-0 h6 text-decoration-none" to="/contact-us">Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 m-3">
                        <p className="h5">
                            Contact information
                        </p>
                        <hr className="m-0 p-0" />
                        <div>
                            <p className="m-0 p-0">
                                <span className="fw-bold">Phone:</span>
                                <span className="text-secondary ms-3">09123456789</span>
                            </p>
                            <p className="m-0 p-0">
                                <span className="fw-bold">Email:</span>
                                <span className="text-secondary ms-3">info@digishop.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
