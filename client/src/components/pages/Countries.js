import React, { Component } from "react";

import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCountryAction } from "../../store/actions/fetchCountryAction";
import ApartmentsListsbyCountry from "../layout/ApartmentsListsbyCountry";

class Countries extends Component {
  state = {};
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetchCountryAction(id);
  }
  render() {
    // console.log("PROPSUM", this.props);
    // const posts = this.props.posts;
    const selected = this.props.match.params.id;
    console.log("Posts by country", this.props.postsbycountry);
    console.log("", this.props.countryLoading);
    const listofapt = this.props.postsbycountry;
    return (
      <div>
        <h4>
          {selected} is one of the top destinations. Check the apartments,
          listed in {selected}
        </h4>
        <div className="col s12">
          {/* Sort and Slice */}
          {this.props.countryLoading ? (
            <Loading />
          ) : (
            <ApartmentsListsbyCountry posts={listofapt} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postsbycountry: state.country.posts_bycountry,
    countryLoading: state.country.countryLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchCountryAction }
)(Countries);
