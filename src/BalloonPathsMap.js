// // import React, { useEffect, useState } from "react";
// // import {
// //   MapContainer,
// //   TileLayer,
// //   Polyline,
// //   CircleMarker,
// //   Popup,
// // } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";

// // // const [balloonData1, setBalloonData1] = useState({}); // will store { 0: [...], 1: [...], ... }

// // // Sample data: 3 hours of data, 2 balloons total.
// // // balloonData[0] = newest data (current), balloonData[1] = 1hr ago, balloonData[2] = 2hrs ago
// // const sampleData = [
// //   // Hour 0 (current)
// //   [
// //     [-61.29475864155893, 104.83917394320257, 12.019405501901083],
// //     [14.727198017806838, 141.89383521159797, 21.960360285732648],
// //   ],
// //   // Hour 1 (1 hour ago)
// //   [
// //     [-63.15190349007618, 109.35611715886948, 13.97639363169786],
// //     [15.306181409639441, 141.64577294498557, 19.74806777543715],
// //   ],
// //   // Hour 2 (2 hours ago)
// //   [
// //     [-46.71678898379558, -124.9001463003869, 6.024529920588],
// //     [-22.236392092925694, -78.4041464587933, 20.22751031386967],
// //   ],
// // ];


  
// // function BalloonPathsMap() {
// // const [balloonData, setBalloonData] = useState({}); // will store { 0: [...], 1: [...], ... }

// // useEffect(() => {
// //     // Fetch from Flask endpoint
// //     fetch("http://localhost:5000/data", {method: "GET", headers: {
// //       'Content-Type': 'application/json'
// //     }}).then((res) => {
// //         console.log(res)
// //         return res.json();
// //       })
// //       .then((data) => {
// //         console.log(data);
// //         // balloonData = data
// //         setBalloonData(data);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching balloon data:", err);
// //       });
// //   }, []);

// //   // const balloonData = sampleData;

// //   // Build balloonPaths: array of balloon "tracks"
// //   // Each track is an array of { lat, lon, alt, hourAgo }
// //   const balloonPaths = [];
// //   // if (balloonData)
// //   // {
// //     if (balloonData.length > 0) {
// //         const numBalloons = balloonData[0].length;
// //         for (let b = 0; b < numBalloons; b++) {
// //         const path = [];
// //         for (let h = 0; h < balloonData.length; h++) {
// //             const [lat, lon, alt] = balloonData[h][b];
// //             path.push({ lat, lon, alt, hourAgo: h });
// //         }
// //         balloonPaths.push(path);
// //         }
// //     }
// //   // }

// //   return (
// //     <MapContainer
// //       center={[0, 0]}
// //       zoom={2}
// //       style={{ height: "100vh", width: "100vw" }}
// //     >
// //       <TileLayer
// //         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />

// //       {balloonPaths.map((balloonPath, balloonIndex) => {
// //         // Convert to Leaflet polyline positions: [[lat, lon], [lat, lon], ...]
// //         const coordsArray = balloonPath.map((pos) => [pos.lat, pos.lon]);

// //         return (
// //           <React.Fragment key={balloonIndex}>
// //             {/* Draw the connecting path for this balloon */}
// //             <Polyline positions={coordsArray} color="blue" />

// //             {/* Mark each position; color the *current* position (hourAgo=0) in red */}
// //             {balloonPath.map((pos, idx) => {
// //               const { lat, lon, alt, hourAgo } = pos;

// //               // If hourAgo === 0, this is the latest/current position
// //               const isCurrent = (hourAgo === 0);

// //               return (
// //                 <CircleMarker
// //                   key={idx}
// //                   center={[lat, lon]}
// //                   // If it's the current hour, color = red. Otherwise, e.g., "blue"
// //                   pathOptions={{
// //                     color: isCurrent ? "green" : "blue",
// //                     fillColor: isCurrent ? "green" : "blue",
// //                   }}
// //                   // Make current marker slightly larger
// //                   radius={isCurrent ? 8 : 5}
// //                 >
// //                   <Popup>
// //                     <div>
// //                       <strong>Balloon {balloonIndex+1}</strong>
// //                       <br />
// //                       Hour Ago: {hourAgo}
// //                       <br />
// //                       Altitude: {alt?.toFixed(2)}
// //                       <br />
// //                       Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
// //                     </div>
// //                   </Popup>
// //                 </CircleMarker>
// //               );
// //             })}
// //           </React.Fragment>
// //         );
// //       })}
// //     </MapContainer>
// //   );
// // }

// // export default BalloonPathsMap;

// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   MapContainer,
// // //   TileLayer,
// // //   Polyline,
// // //   CircleMarker,
// // //   Popup,
// // // } from "react-leaflet";
// // // import "leaflet/dist/leaflet.css";

// // // function BalloonPathsMap() {
// // //   console.log('reaching here')

// // //   const [balloonData, setBalloonData] = useState([]);

// // //   useEffect(() => {
// // //     // Fetch from Flask endpoint
// // //     fetch("http://localhost:5000/data", {
// // //       method: "GET",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //     })
// // //       .then((res) => {
// // //         console.log("Raw response:", res);
// // //         return res.json();
// // //       })
// // //       .then((data) => {
// // //         console.log("Parsed JSON:", data);
// // //         setBalloonData(data); // Store in state
// // //       })
// // //       .catch((err) => {
// // //         console.error("Error fetching balloon data:", err);
// // //       });
// // //   }, []);

// // //   // Build balloonPaths from balloonData
// // //   const balloonPaths = [];

// // //   // Check if balloonData is actually an array and has length
// // //   if (Array.isArray(balloonData) && balloonData.length > 0) {
// // //     // balloonData looks like [ [ [lat, lon, alt], [lat, lon, alt] ], ... ]
// // //     // The 0th element is the newest data array, 1st is 1 hour ago, etc.

// // //     // Number of balloons is the length of balloonData[0]
// // //     const numBalloons = balloonData[0].length;

// // //     // For each balloon b, gather positions across all hours h
// // //     for (let b = 0; b < numBalloons; b++) {
// // //       const path = [];
// // //       for (let h = 0; h < balloonData.length; h++) {
// // //         const [lat, lon, alt] = balloonData[h][b];
// // //         path.push({ lat, lon, alt, hourAgo: h });
// // //       }
// // //       balloonPaths.push(path);
// // //     }
// // //   }
// // //   const safeBalloonPath = balloonPaths || [];

// // //   return (
// // //     <MapContainer
// // //       center={[0, 0]}
// // //       zoom={2}
// // //       style={{ height: "100vh", width: "100vw" }}
// // //     >
// // //       <TileLayer
// // //         attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
// // //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //       />

// // //       {/* If no data yet, you could show nothing or a simple message. */}
// // //       {safeBalloonPath.map((balloonPath, balloonIndex) => {
// // //         // Convert to Leaflet polyline positions: [[lat, lon], [lat, lon], ...]
// // //         const coordsArray = balloonPath.map((pos) => [pos.lat, pos.lon]);

// // //         return (
// // //           <React.Fragment key={balloonIndex}>
// // //             {/* Draw the polyline for this balloon */}
// // //             <Polyline positions={coordsArray} color="blue" />

// // //             {/* Mark each position; color the *current* position (hourAgo=0) in green */}
// // //             {balloonPath.map((pos, idx) => {
// // //               const { lat, lon, alt, hourAgo } = pos;

// // //               // If hourAgo === 0, this is the latest/current position
// // //               const isCurrent = hourAgo === 0;

// // //               return (
// // //                 <CircleMarker
// // //                   key={idx}
// // //                   center={[lat, lon]}
// // //                   pathOptions={{
// // //                     color: isCurrent ? "green" : "blue",
// // //                     fillColor: isCurrent ? "green" : "blue",
// // //                   }}
// // //                   radius={isCurrent ? 8 : 5}
// // //                 >
// // //                   <Popup>
// // //                     <div>
// // //                       <strong>Balloon {balloonIndex + 1}</strong>
// // //                       <br />
// // //                       Hour Ago: {hourAgo}
// // //                       <br />
// // //                       Altitude: {alt?.toFixed(2)}
// // //                       <br />
// // //                       Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
// // //                     </div>
// // //                   </Popup>
// // //                 </CircleMarker>
// // //               );
// // //             })}
// // //           </React.Fragment>
// // //         );
// // //       })}
// // //     </MapContainer>
// // //   );
// // // }

// // // export default BalloonPathsMap;

// import React, { useState, useEffect } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   CircleMarker,
//   Popup,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // Sample data structure:
// // balloonData[h] is an array of balloon positions at "h hours ago."
// // balloonData[h][b] = [lat, lon, altForBalloon_b]
// const sampleData = [
//   // Hour 0 (current)
//   [
//     [-61.29476, 104.83917, 12.0],
//     [14.72719, 141.89383, 21.96],
//   ],
//   // Hour 1
//   [
//     [-63.15190, 109.35611, 13.97],
//     [15.30618, 141.64577, 19.74],
//   ],
//   // Hour 2
//   [
//     [-46.71678, -124.90014, 6.02],
//     [-22.23639, -78.40414, 20.22],
//   ],
// ];

// function BalloonMapWithDropdown() {
//   // Replace 'sampleData' with your real balloon data
//   const [balloonData, setBalloonData] = useState({}); // will store { 0: [...], 1: [...], ... }
//   const [selectedHour, setSelectedHour] = useState(0);

// useEffect(() => {
//     // Fetch from Flask endpoint
//     fetch("http://localhost:5000/data", {method: "GET", headers: {
//       'Content-Type': 'application/json'
//     }}).then((res) => {
//         console.log(res)
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         // balloonData = data
//         setBalloonData(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching balloon data:", err);
//       });
//   }, []);

//   // State to track which "hour ago" subset we show in addition to the current positions

//   // Handle dropdown changes
//   const handleChange = (e) => {
//     setSelectedHour(Number(e.target.value));
//   };

//   // Build a list of dropdown options:
//   // 0 = only current positions,
//   // 1..(balloonData.length-1) = hours ago
//   const hourOptions = Array.from(
//     { length: balloonData.length },
//     (_, i) => i
//   );

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <label>
//         Show data from how many hours ago? &nbsp;
//         <select onChange={handleChange} value={selectedHour}>
//           {hourOptions.map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//         </select>
//       </label>

//       <MapContainer
//         center={[0, 0]}
//         zoom={2}
//         style={{ height: "80vh", marginTop: "1rem" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Always show the "current" balloon positions (index 0) in red */}
//         {balloonData.length > 0 &&
//           balloonData[0].map(([lat, lon, alt], balloonIndex) => (
//             <CircleMarker
//               key={`current-${balloonIndex}`}
//               center={[lat, lon]}
//               pathOptions={{ color: "red", fillColor: "red" }}
//               radius={8}
//             >
//               <Popup>
//                 <div>
//                   <strong>Balloon {balloonIndex}</strong>
//                   <br />
//                   Hour Ago: 0 (current)
//                   <br />
//                   Alt: {alt?.toFixed(2)}
//                   <br />
//                   Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
//                 </div>
//               </Popup>
//             </CircleMarker>
//           ))}

//         {/* Show "selectedHour" markers (if selectedHour > 0) in blue */}
//         {selectedHour > 0 &&
//           balloonData.length > selectedHour &&
//           balloonData[selectedHour].map(([lat, lon, alt], balloonIndex) => (
//             <CircleMarker
//               key={`hour-${selectedHour}-${balloonIndex}`}
//               center={[lat, lon]}
//               pathOptions={{ color: "blue", fillColor: "blue" }}
//               radius={6}
//             >
//               <Popup>
//                 <div>
//                   <strong>Balloon {balloonIndex}</strong>
//                   <br />
//                   Hour Ago: {selectedHour}
//                   <br />
//                   Alt: {alt?.toFixed(2)}
//                   <br />
//                   Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
//                 </div>
//               </Popup>
//             </CircleMarker>
//           ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default BalloonMapWithDropdown;

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Insert your OpenWeatherMap API key
const OPENWEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * Fetch OpenWeatherMap current weather for lat/lon, returning a promise of { data, severe }.
 * We'll do .then() style (no async/await).
 */
function fetchOpenWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`OpenWeather fetch error: ${resp.statusText}`);
      }
      return resp.json();
    })
    .then((data) => ({
      data,
      severe: isSevereConditions(data),
    }))
    .catch((err) => {
      console.error("fetchOpenWeather error:", err);
      return null; // or throw
    });
}

/**
 * Decide if OWM data is 'severe': i.e., has Rain, Snow, hail, or high wind speed (>10 m/s).
 * Adjust logic as needed.
 */
function isSevereConditions(owmData) {
  if (!owmData) return false;

  const weatherArr = owmData.weather || [];
  // check if main = Rain/Snow/Thunderstorm or description includes 'hail'
  const hasRainSnowHail = weatherArr.some((w) => {
    const mainType = w.main || "";
    const desc = w.description?.toLowerCase() || "";
    return (
      mainType === "Rain" ||
      mainType === "Snow" ||
      mainType === "Thunderstorm" ||
      desc.includes("hail")
    );
  });
  // check wind speed
  const highWind = (owmData.wind?.speed || 0) > 10;

  return hasRainSnowHail || highWind;
}

/**
 * Our main component:
 * - Fetches balloon data from Flask every hour (and on mount).
 * - Shows a loading overlay while first fetching.
 * - Caches weather in weatherCache[wKey], coloring markers green if severe.
 * - Skips any data point where lat, lon, or alt == -181.
 * - Popup shows the balloon's lat, lon, and alt.
 */
function MapWithCachingAndSevere() {
  // The array of balloon data, each index is an hour; each sub-array is an array of [lat, lon, alt]
  const [balloonData, setBalloonData] = useState([]);

  // While fetching balloon data the first time, show an overlay
  const [loading, setLoading] = useState(true);

  // The user picks which hour to display
  const [selectedHour, setSelectedHour] = useState(0);

  // Track which balloon's popup is open => triggers fetch if needed
  const [openBalloon, setOpenBalloon] = useState(null);

  // Cache of weather data: wKey => { data: OWM JSON, severe: boolean }
  const [weatherCache, setWeatherCache] = useState({});

  // 1) Function to fetch the balloon data from Flask
  function fetchBalloonData() {
    setLoading(true);
    fetch("https://windborne-balloon-challenge.onrender.com/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched balloon data:", data);
        setBalloonData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching balloon data:", err);
        setLoading(false);
      });
  }

  // 2) On mount, fetch balloon data, then set an interval to re-fetch every hour
  useEffect(() => {
    fetchBalloonData();

    const hourMs = 60 * 60 * 1000; // 1 hour in ms
    const intervalId = setInterval(() => {
      console.log("Re-fetching balloon data after an hour...");
      fetchBalloonData();
    }, hourMs);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // 3) When openBalloon changes, see if we already have cached weather. If not, fetch.
  useEffect(() => {
    if (!openBalloon) return;

    const { hour, balloonIndex, lat, lon } = openBalloon;
    const wKey = `${hour}-${balloonIndex}`;

    if (weatherCache[wKey]) {
      // Already cached => no fetch needed
      return;
    }

    // Not in cache => fetch now
    fetchOpenWeather(lat, lon).then((result) => {
      if (result) {
        setWeatherCache((prev) => ({
          ...prev,
          [wKey]: result, // { data, severe }
        }));
      }
    });
  }, [openBalloon, weatherCache]);

  // Decide marker color: if severe => green, else default
  function getMarkerColor(hour, balloonIndex, defaultColor) {
    const wKey = `${hour}-${balloonIndex}`;
    const entry = weatherCache[wKey];
    if (entry && entry.severe) {
      return "green";
    }
    return defaultColor;
  }

  // Render popup content: if no cache entry => "Loading weather..."
  function renderPopupContent(hour, balloonIndex, lat, lon, alt) {
    const wKey = `${hour}-${balloonIndex}`;
    const entry = weatherCache[wKey];

    if (!entry) {
      return (
        <div>
          <strong>Balloon {balloonIndex}</strong>
          <br />
          Hour: {hour}
          <br />
          Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
          <br />
          Alt: {alt.toFixed(2)}
          <br />
          <em>Loading weather...</em>
        </div>
      );
    }

    // We have { data, severe }
    const { data, severe } = entry;
    const main = data.main || {};
    const wArr = data.weather || [];
    const condition = wArr[0] || {};

    return (
      <div>
        <strong>Balloon {balloonIndex}</strong>
        <br />
        Hour: {hour}
        <br />
        Lat: {lat.toFixed(4)}, Lon: {lon.toFixed(4)}
        <br />
        Alt: {alt.toFixed(2)}
        <hr />
        <strong>Weather (OpenWeatherMap)</strong>
        <br />
        Condition: {condition.description}
        <br />
        Temp (C): {main.temp ?? "?"}
        <br />
        Humidity: {main.humidity ?? "?"}%
        <br />
        Wind (m/s): {data.wind?.speed ?? "?"}
        {severe && (
          <p style={{ color: "red" }}>Severe Conditions Detected!</p>
        )}
      </div>
    );
  }

  // We'll treat balloonData as an array for hours, if data from server is structured that way.
  const hourCount = Array.isArray(balloonData) ? balloonData.length : 0;
  const hourOptions = Array.from({ length: hourCount }, (_, i) => i);

  function handleHourChange(e) {
    setSelectedHour(Number(e.target.value));
  }

  // Skip points if lat/lon/alt == -181
  function isValidPoint(lat, lon, alt) {
    return lat !== -181 && lon !== -181 && alt !== -181;
  }

  return (
    <div style={{ position: "relative" }}>
      {/* Overlay if loading balloon data the very first time */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading Balloon Data...</h1>
        </div>
      )}

<div
    style={{
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "5px 10px",
      borderRadius: "5px",
      zIndex: 1000,
    }}
  >
    <label>
      Show data from how many hours ago? &nbsp;
      <select onChange={handleHourChange} value={selectedHour}>
        {hourOptions.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
    </label>
  </div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "80vh", marginTop: "1rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* If we do have balloonData, render hour=0 balloons in red or green if severe */}
        {hourCount > 0 &&
          Array.isArray(balloonData[0]) &&
          balloonData[0].map(([lat, lon, alt], balloonIndex) => {
            // Skip invalid points
            if (!isValidPoint(lat, lon, alt)) {
              return null;
            }
            const color = getMarkerColor(0, balloonIndex, "red");
            return (
              <CircleMarker
                key={`h0-${balloonIndex}`}
                center={[lat, lon]}
                radius={8}
                pathOptions={{ color, fillColor: color }}
                eventHandlers={{
                  popupopen: () => {
                    setOpenBalloon({ hour: 0, balloonIndex, lat, lon });
                  },
                }}
              >
                <Popup>
                  {renderPopupContent(0, balloonIndex, lat, lon, alt)}
                </Popup>
              </CircleMarker>
            );
          })}

        {/* If selectedHour > 0, show those balloons in blue or green if severe */}
        {selectedHour > 0 &&
          selectedHour < hourCount &&
          Array.isArray(balloonData[selectedHour]) &&
          balloonData[selectedHour].map(([lat, lon, alt], balloonIndex) => {
            // Skip invalid points
            if (!isValidPoint(lat, lon, alt)) {
              return null;
            }
            const color = getMarkerColor(selectedHour, balloonIndex, "blue");
            return (
              <CircleMarker
                key={`h${selectedHour}-${balloonIndex}`}
                center={[lat, lon]}
                radius={6}
                pathOptions={{ color, fillColor: color }}
                eventHandlers={{
                  popupopen: () => {
                    setOpenBalloon({
                      hour: selectedHour,
                      balloonIndex,
                      lat,
                      lon,
                    });
                  },
                }}
              >
                <Popup>
                  {renderPopupContent(selectedHour, balloonIndex, lat, lon, alt)}
                </Popup>
              </CircleMarker>
            );
          })}
      </MapContainer>
    </div>
  );
}

export default MapWithCachingAndSevere;
