import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer blue-grey lighten-5">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="blue-grey-text text-lighten-4">
              Some Footer Content Comes Here
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="blue-grey-text">Links</h5>
            <ul>
              <li>
                <a className="blue-grey-text text-lighten-1" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="blue-grey-text text-lighten-1" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="blue-grey-text text-lighten-1" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="blue-grey-text text-lighten-1" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright orange lighten-3">
        <div className="container">
          © 2019 Asli
          <a
            className="blue-grey-text text-darken-1 right"
            href="https://github.com/mssui/AirbnbClone"
          >
            Source Code on Github{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
