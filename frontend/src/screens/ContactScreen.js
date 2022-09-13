import "./ContactScreen.css";
import { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactScreen = () => {
  const [val, setVal] = useState();
  return (
    <div className="contactscreen">
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                  <br />
                  <span>OnlineKonfekcija</span>
                </div>
                <div className="app-location">
                  <span>
                    <br />
                    <LocationOnIcon />
                    123 Main Street
                  </span>
                </div>
                <div className="app-contact">
                  CONTACT INFO : +391 123 456 789
                </div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      value={val}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={val}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NUMBER"
                      value={val}
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      value={val}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      className="app-form-button"
                      onClick={() => setVal(() => "")}
                    >
                      SEND
                    </button>
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

export default ContactScreen;
