import React, { Component } from "react";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCountryAction } from "../../store/actions/fetchCountryAction";
import ApartmentsListsbyCountry from "../layout/ApartmentsListsbyCountry";

class Countries extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetchCountryAction(id);
  }
  render() {
    const selected = this.props.match.params.id;
    const listofapt = this.props.postsbycountry;
    console.log(listofapt);
    return (
      <div>
        <div className="row s12 center-align">
          <div>
            <h5 className="grey-text text-darken-1 center-align">
              {selected} is one of the top destinations.
            </h5>
            <h6>Check the apartments, listed in {selected}</h6>
          </div>
        </div>
        <div className="col s12">
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
