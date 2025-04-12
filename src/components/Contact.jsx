import React from 'react'

const Contact = () => {
  return (
    <section className="container contact" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>Contact <span>Me</span></h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me here</h4>
              <p>
                feel free to contact me! I am open to any opportunities!
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location:</span>
                  </div>
                  <p>United States, Notre Dame</p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                    <span>Email:</span>
                  </div>
                  <p>
                    <span>lcao3@nd.edu</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                    <span>Mobile Number:</span>
                  </div>
                  <p>
                    <span>4129796455</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-globe-africa"></i>
                    <span>Languages:</span>
                  </div>
                  <p>
                    <span>English, Chinese</span>
                  </p>
                </div>
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  <a href="https://github.com/lukewarm3" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/luke-cao-student/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form action="mailto:lcao3@nd.edu" className="contact-form">
                <div className="input-control i-c-2">
                  <input type="text" required placeholder="YOUR NAME" id="name" name="name"/>
                  <input type="email" required placeholder="YOUR EMAIL" id="email" name="email"/>
                </div>
                <div className="input-control">
                  <input type="text" required placeholder="ENTER SUBJECT" id="subject" name="subject" />
                </div>
                <div className="input-control">
                  <textarea
                    id="message" name="message"
                    cols="15"
                    rows="8"
                    placeholder="Message Here..."
                  ></textarea>
                </div>
                <div className="submit-btn">
                    <button type="submit" value="Send" className="btn-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
