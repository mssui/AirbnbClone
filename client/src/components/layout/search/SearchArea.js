import React from "react";
import { Link } from "react-router-dom";
import Increment from "./Increment";
import WhereTo from "./WhereTo";
import Calendar from "./DatePicker";

const SearchArea = ({ user, handleDate }) => {
  return (
    <React.Fragment>
      <div className="row s12 center-align">
        {user ? (
          <div>Welcome {user}</div>
        ) : (
          <div>
            <h5 className="grey-text text-darken-1 center-align">
              Welcome Guest, Wanna <Link to="/signup"> join?</Link>
            </h5>
            <h6>For test Username: asli, Password: 12345</h6>
          </div>
        )}
      </div>
      <div className="row col s12 center-align">
        <div className=" col s2 " />

        <form>
          <div className="input-field col s4 ">
            <WhereTo user={user} />
            {/* <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Where to go?</label> */}
          </div>
        </form>
        <div className="input-field col s4 " style={{ marginTop: "10px" }}>
          <Increment />
        </div>
        <div className=" col s2 " />
      </div>
      <div className="row col s12 center-align">
        <div className=" col s2 " />
        <Calendar
          placeholder={"Start Date"}
          number={1}
          handleDate={() => handleDate()}
        />
        <Calendar placeholder={"End Date"} />
        <div className=" col s2 " />
      </div>
    </React.Fragment>
  );
};
export default SearchArea;
