import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createPost,
  uploadPhoto
} from "../../../store/actions/fetchPostAction";
import moment from "moment";
import { Redirect } from "react-router-dom";
import PostFormOneDetails from "./PostFormOneDetails";
import PostFormTwoDates from "./PostFormTwoDates";
import PostFormThreeUploads from "./PostFormThreeUploads";
import PostFormFourLocation from "./PostFormFourLocation";
import PostFormFinal from "./PostFormFinal";

class PostMyApartment extends Component {
  componentWillMount() {
    // Today's date
    var dateOfToday = moment();
    this.setState({ start: dateOfToday });

    // Add 90 days to Today's date
    var dateOfNext = moment(dateOfToday).add(90, "days");
    this.setState({ end: dateOfNext });
  }
  state = {
    title: null,
    slug: "",
    body: "",
    img: [], // Upload companent will be replaced
    addedBy: this.props.user,
    address: {
      country: "",
      city: "",
      all: ""
    },
    max_guest_num: "",
    start: new Date(), // Sets onload
    end: new Date(), // Sets onload,
    not_available: [],
    loc: {
      coordinates: [0, 0]
    },
    formOne: true,
    formTwo: false,
    formThree: false,
    formFour: false,
    finished: false,
    formdata: null,
    error: null
  };
  formatAddress = value => {
    this.setState({
      coordinates: [value.lat, value.lng]
    });
  };

// Handle form changes validates first
  handleChange = e => {
    const patterns = {
      title: /^\W*(?:\w+\b\W*){2,15}$/gm,
      max_guest_num: /^[0-9]{1,2}$/gm,
      body: /^\W*(?:\w+\b\W*){10,100}$/gm
    };
      // If target passes its test, set value to state
    if (patterns[e.target.id].test(e.target.value)) {
      if (
        e.target.id === "country" ||
        e.target.id === "city" ||
        e.target.id === "all"
      ) {
        let address = Object.assign({}, this.state.address);
        address[e.target.id] = e.target.value.toLowerCase();
        this.setState({ address });
      } else {
        this.setState(
          {
            [e.target.id]: e.target.value.toLowerCase()
          }
        );
      }

      // If target can not pass its regex test, set value to false
    } else {
      this.setState({ [e.target.id]: false });
    }
  };

  onFileSubmit = () => {
    const data = new FormData();
    data.append(
      "apartmentListing",
      this.state.formdata,
      this.state.formdata.name
    );

    this.props.uploadPhoto(data);
  };
  onFileChange = e => {
    e.preventDefault();

    this.setState({
      formdata: e.target.files[0]
    });
  };
  handleFormOne = () => {
    if (this.state.title && this.state.body && this.state.max_guest_num) {
      this.setState({
        formOne: false,
        formTwo: true
      });
    } else {
      //You cant pass
      this.setState({
        error: "Please fill all the fields before contunie"
      });
    }
  };
  handleFormTwo = () => {
    this.setState({
      formTwo: false,
      formThree: true
    });
  };
  handleFormThree = () => {
    this.setState({
      formThree: false,
      formFour: true
    });
  };
  handleFormFour = () => {
    this.setState({
      formFour: false,
      finished: true
    });
  };
  postApartment = () => {
    this.setState({
      finished: false
    });
    const data = {
      title: this.state.title,
      slug: this.state.slug,
      body: this.state.body,
      img: [], // Upload companent will be replaced
      addedBy: this.props.user,
      address: {
        country: this.state.country,
        city: this.state.city,
        all: this.state.all
      },
      max_guest_num: this.state.max_guest_num,
      start: this.state.start,
      end: this.state.end,
      not_available: this.state.not_available,
      loc: {
        //Will be selected by user
        coordinates: this.state.coordinates
      }
    };
    console.log("Sending to DB", data);
    this.props.createPost(data);
  };
  render() {
    let user = this.props.user;
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12">
              <h5 className="grey-text text-darken-1 center-align">
                Fill the form & List your apartment
              </h5>
            </div>
          </div>
          {this.state.formOne ? (
            <PostFormOneDetails
              handleFormOne={this.handleFormOne}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              title={this.state.title}
              body={this.state.body}
              guest={this.state.max_guest_num}
              error={this.state.error}
            />
          ) : null}
          {this.state.formTwo ? (
            <PostFormTwoDates
              handleFormTwo={this.handleFormTwo}
              handleCalender={e =>
                this.setState(
                  {
                    not_available: [
                      ...this.state.not_available,
                      e.target.getAttribute("value")
                    ]
                  },
                  () => {
                    console.log(
                      "Dates selected callback",
                      this.state.not_available
                    );
                  }
                )
              }
            />
          ) : null}
          {this.state.formThree ? (
            <PostFormThreeUploads
              handleFormThree={this.handleFormThree}
              onFileSubmit={e => {
                this.onFileSubmit(e);
              }}
              onFileChange={e => {
                this.onFileChange(e);
              }}
              link={this.props.photo_upload_link}
            />
          ) : null}
          {this.state.formFour ? (
            <PostFormFourLocation
              handleFormFour={this.handleFormFour}
              formatAddress={val => this.formatAddress(val)}
            />
          ) : null}

          {this.state.finished ? (
            <PostFormFinal postApartment={this.postApartment} />
          ) : null}

          {this.props.creating === false ? (
            <Redirect
              to={{
                pathname: `/profile/${user}`,
                state: { from: this.props.location }
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  creating: state.post.creating,
  photo_upload_link: state.post.photo_upload_link
});
const mapDispatchToProps = dispatch => {
  return {
    createPost: project => dispatch(createPost(project)),
    uploadPhoto: data => dispatch(uploadPhoto(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMyApartment);
