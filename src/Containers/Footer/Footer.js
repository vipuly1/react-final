import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-6 large">
            Copyright © <b>2021</b> All rights reserved. Design:{" "}
            <a
              rel="nofollow noopener"
              href="https://templatemo.com"
              className="tm-footer-link"
            >
              Template Mo <br/>By Akash Magar
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
