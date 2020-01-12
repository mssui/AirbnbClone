import React, { Component } from "react";
import Loading from "../layout/Loading";
import { connect } from "react-redux";
import { fetchCountryAction } from "../../store/actions/fetchCountryAction";
import ApartmentsListsbyCountry from "../layout/ApartmentsListsbyCountry";

class Countries extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetchCountryAction(id);
  }

  render() {
    const selectedCountry = this.props.match.params.id;
    const apartmentList = Array.from(this.props.postsbycountry);

    return (
      <div>
        <div className="row s12 center-align">
          <div>
            <h5 className="grey-text text-darken-1 center-align">
              {selectedCountry} is one of the top destinations.
            </h5>
            <h6>Check the apartments, listed in {selectedCountry}</h6>
          </div>
        </div>
        <div className="col s12">
          {this.props.countryLoading ? (
            <Loading />
          ) : (
            <ApartmentsListsbyCountry posts={apartmentList} />
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

export default connect(mapStateToProps, { fetchCountryAction })(Countries);
