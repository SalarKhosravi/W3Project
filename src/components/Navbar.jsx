import { Link } from "react-router";

function Navbar() {
    return (
        <>
            {/* nav pc */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-none d-lg-block">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">DigiShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/store">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cards">Cards</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact US</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-primary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* nac mobile */}
            <nav className="d-block d-lg-none bg-dark position-absolute bottom-0 container-fluid py-4">
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <Link className="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0 m-0 text-white fw-bold" to="/store">
                                <i className="bi text-white fs-3 bi-cart"></i>
                                Store
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <Link className="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0 m-0 text-white fw-bold" to="/store">
                                <i className="bi text-white fs-3 bi-cart"></i>
                                Cards
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <Link className="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0 m-0 text-white fw-bold" to="/contact-us">
                                <i className="bi text-white fs-3 bi-telephone-plus"></i>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="">
                            <Link className="d-flex flex-column justify-content-center align-items-center text-decoration-none p-0 m-0 text-white fw-bold" to="/about-us">
                                <i className="bi text-white fs-3 bi-voicemail"></i>
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
