import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import MapFetchOnPopupOpen from "./BalloonPathsMap";

// Fix default marker icon issues with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function App() {
  return (
    <div className="app-container" style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      {/* Page Header */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "2rem",
          color: "#333",
        }}
      >
        Windborne Balloon + Weather Tracker
      </h1>

      {/* Description / Explanation Card */}
      <div
        className="description-card"
        style={{
          maxWidth: "900px",
          margin: "0 auto 1.5rem",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        }}
      >
        <p style={{ lineHeight: "1.6", color: "#555" }}>
          <strong>Marker Colors:</strong> 
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>
              <span style={{ color: "blue" }}>Blue</span> &mdash; Positions from 
              <em> previous hours</em>.
            </li>
            <li>
              <span style={{ color: "red" }}>Red</span> &mdash; The 
              <em> current</em> balloon positions.
            </li>
            <li>
              <span style={{ color: "green" }}>Green</span> &mdash; Severe weather 
              conditions (rain, snow, or high speed winds), potentially posing a 
              <em> risk</em> to the balloons. You will also see green markers if 
              historical data shows they were at a location with severe conditions 
              at that time.
            </li>
          </ul>
        </p>
        <p style={{ lineHeight: "1.6", color: "#555" }}>
          You can click on the dropdown to view previous hours' balloon data. 
          Clicking on the marker will fetch you the weather at that position at 
          that particular time, and the marker will be highlighted in green if 
          weather condition is severe.
          <br></br>
          <br></br>
          Because the free OpenWeather API plan limits the number of requests per 
          minute, I did <strong>not</strong> fetch all weather data in one shot. 
          Instead, each marker fetches weather data on-demand when you open its 
          popup. This approach avoids hitting rate limits, though it differs from 
          the original plan of pre-fetching all data to highlight severe conditions 
          upfront.
        </p>
      </div>

      {/* Map Section */}
      <div
        className="map-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          height: "80vh",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* The custom map component that fetches weather on popup open */}
        <MapFetchOnPopupOpen />
      </div>
    </div>
  );
}

export default App;
