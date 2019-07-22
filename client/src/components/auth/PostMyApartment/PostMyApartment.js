import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../../store/actions/fetchPostAction";
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
    title: "",
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
    finished: false
  };
  formatAddress = value => {
    this.setState({
      coordinates: [value.lat, value.lng]
    });
  };

  formValidate = e => {
    const patterns = {
      title: /^\W*(?:\w+\b\W*){1,15}$/gm,
      max_guest_num: /^[0-9]{1,2}$/gm,
      body: /^\W*(?:\w+\b\W*){10,100}$/gm
    };
    const warnings = {
      title:
        "Title should contain at least one word. Maximum should contain 15 words.",
      body:
        "Body should contain at least 10 words. Better explanation will bring you more customers",
      max_guest_num: "Please write number"
    };
    if (patterns[e.target.id].test(e.target.value)) {
      console.log("Passes its test", e.target.id);
    } else {
      console.log("Can not pass the test", e.target.id);
    }
  };

  handleChange = e => {
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
        },
        this.formValidate(e)
      );
    }
  };
  onFileSubmit = () => {
    console.log("File submited from frontend");
    //Redux call will be here
  };

  handleFormOne = () => {
    this.setState({
      formOne: false,
      formTwo: true
    });
    console.log("First form completed", this.state);
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
              onFileSubmit={this.onFileSubmit}
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
  creating: state.post.creating
});
const mapDispatchToProps = dispatch => {
  return { createPost: project => dispatch(createPost(project)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMyApartment);
