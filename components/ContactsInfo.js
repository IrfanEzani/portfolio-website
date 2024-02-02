const ContactsInfo = () => {
  return (
    <div className="section contacts section_" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-android-phone-portrait" />
            </div>
            <div className="name">Phone</div>
            <p>+ 1 (240) 467 8564</p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-email" />
            </div>
            <div className="name">Email</div>
            <p>
              <a href="mailto:hello@irfanezani.com">
                hello@irfanezani.com
              </a>
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-location" />
            </div>
            <div className="name">Address</div>
            <p>College Park, Maryland</p>
          </div>
        </div>
      {/*   <div className="contact_form">
          <form id="cform" method="post">
            <div className="group-val">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="group-val">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="group-val ct-gr">
              <textarea
                name="message"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <a href="#" className="btn fill" data-text="Send Message">
              Send Message
            </a>
          </form>
          <div className="alert-success">
            <p>
              Thanks, your message is sent successfully. I'll get in touch shortly!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default ContactsInfo;
