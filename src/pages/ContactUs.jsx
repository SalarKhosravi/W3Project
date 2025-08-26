import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
      


      <form className="container pt-5 px-3 bg-body-secondary mx-auto">
      <h1 className="pt-5 px-3">
        Contact Us page
      </h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Full name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="john doe"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Your message</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </>
  );
}

export default ContactUs;
