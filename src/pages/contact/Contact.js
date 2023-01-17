import axios from "axios";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import { BACKEND_URL } from "../../services/authService";
import "./Contact.scss"

const Contact = () => {

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="contact">
      <h3 className="--mt3"> </h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label> subject </label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label> Message </label>
            <textarea
              cols="30"
              rows="10"
              type="text"
              name="message"
              placeholder="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              {" "}
            </textarea>
            <button className="--btn --btn-primary"> Send Message </button>
          </Card>
        </form>
        <div className="details">
          <Card cardClass={"card2"}>
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>070123123123</p>
              </span>
              <span>
                <FaEnvelope />
                <p>Support@invent.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Abuja, Nigeria</p>
              </span>
              <span>
                <FaTwitter />
                <p>@ZinoTrust</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
