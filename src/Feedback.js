import { useState, React } from "react";
import axios from "axios";
const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [currency, setCurrency] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://127.0.0.1:8000/feedback", {
          name: name,
          email: email,
          contact: contact,
          currency: currency,
          message: message,
        })
        .then(function (response) {
          console.log(response);
          setName("");
          setEmail("");
          setContact("");
          setCurrency("");
          setMessage("Sent successfully");
        })
        .catch(function (error) {
          console.log(error);
          setMessage("Some error occured");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="wrapper">
          <div class="row no-gutters">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                <h3 class="mb-4">Write us Feedback</h3>

                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  class="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="contact"
                          class="form-control"
                          name="contact"
                          id="contact"
                          placeholder="Contact"
                          onChange={(e) => setContact(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="currency"
                          id="currency"
                          placeholder="Currency"
                          onChange={(e) => setCurrency(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          cols="30"
                          rows="6"
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <button
                          type="button"
                          onClick={(e) => handleSubmit(e)}
                          class="btn btn-primary"
                        >
                          Send Feedback
                        </button>

                        <div class="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                <h3>Contact information</h3>
                <p class="mb-4">
                  We're open for any suggestion or just to have a chat
                </p>
                <div class="dbox w-100 d-flex align-items-start">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-map-marker"></span>
                  </div>
                  <div class="text pl-3">
                    <p>
                      <span>Address:</span> JKLU Mahapura Ajme Road Jaipur
                      Rajasthan INDIA 302026.
                    </p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-phone"></span>
                  </div>
                  <div class="text pl-3">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text pl-3">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:aayushmehta@jklu.edu.in">
                        aayushmehta@jklu.edu.in
                      </a>
                    </p>
                  </div>
                </div>
                <div class="dbox w-100 d-flex align-items-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-globe"></span>
                  </div>
                  <div class="text pl-3">
                    <p>
                      <span>Website</span> <a href="#">www.jklu.edu.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
