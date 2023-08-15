import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";

export default function List() {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [option]= useState(location.state.option);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="IsTitle">Search</h1>
            <div className="IsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="IsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!opendate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy ")}`}</span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="LsOptions">
                <div className="LsOptionItem">
                  <span className="LsOptionText">
                    min price <small>per night</small>
                  </span>
                  <input type="number" className="LsOptionInput" />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">
                    max price <small>per night</small>
                  </span>
                  <input type="number" className="LsOptionInput" />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText"> Adult </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={option.adult}
                    className="LsOptionInput"
                  />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">Children </span>
                  <input
                    type="number"
                    min={0}
                    placeholder={option.children}
                    className="LsOptionInput"
                  />
                </div>
                <div className="LsOptionItem">
                  <span className="LsOptionText">Room </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={option.room}
                    className="LsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="ListResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
