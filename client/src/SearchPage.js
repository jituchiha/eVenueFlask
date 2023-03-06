import Row from "react-bootstrap/esm/Row";
import "./SearchPage.css";
import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import TopNav from "./Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const data = [
    { name: "VolleyBall", location: "SRSC", availability: "Yes" },
    { name: "Skating", location: "SRSC", availability: "No" },
    { name: "FootBall", location: "SRSC", availability: "Yes" },
    { name: "Tennis", location: "Bill Garet", availability: "Yes" },
    { name: "BasketBall", location: "Bill Garet", availability: "No" },
    {
      name: "TableTennis",
      location: "SRSC",
      availability: "No"
    }
  ];

  const filteredData = data.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const locationMatch = locationFilter
      ? item.location === locationFilter
      : true;
    const availabilityMatch = availabilityFilter
      ? item.availability === availabilityFilter
      : true;

    return nameMatch && locationMatch && availabilityMatch;
  });

  return (
    <div className="bg">
        <TopNav brandname = 'Events'/>
        <h2>Events</h2>
        <Row xs={1} md={3} style={{marginTop: '45vh'}}>
            <Col style={{align: 'center'}}>
            <input
            style={{backgroundColor: 'white', height: '50px'}}
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            </Col>
            <Col>
            <select
            style={{backgroundColor: 'white', height: '50px'}}
                value={locationFilter}
                onChange={(event) => setLocationFilter(event.target.value)}
                >
                <option value="">Filter by location</option>
                <option value="SRSC">SRSC</option>
                <option value="Bill Garet">Bill Garet</option>
            </select>
            </Col>
            <Col>
            <select
            style={{backgroundColor: 'white', height: '50px'}}
          value={availabilityFilter}
          onChange={(event) => setAvailabilityFilter(event.target.value)}
        >
          <option value="">Filter by availability</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
            </Col>       
        </Row>
      <div>
        
      </div>
      <div>
        <h2>Results</h2>
        <ul style={{alignContent: 'center'}}>
          {filteredData.map((item, index) => (
            <li key={index} style={{alignContent: 'center'}}>
              <p>{item.name}</p>
              <p>Location: {item.location}</p>
              <p>Availability: {item.availability}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
