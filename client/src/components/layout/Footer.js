import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer blue-grey lighten-5">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="blue-grey-text text-lighten-4">
              Some Footer Content Comes Here
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="blue-grey-text">Links</h5>
            <ul>
              <li>
                <a class="blue-grey-text text-lighten-1" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a class="blue-grey-text text-lighten-1" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a class="blue-grey-text text-lighten-1" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a class="blue-grey-text text-lighten-1" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright orange lighten-3">
        <div class="container">
          © 2019 Asli
          <a
            class="blue-grey-text text-darken-1 right"
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
