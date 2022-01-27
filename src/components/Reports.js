import React, { useState } from "react";
import axios from "axios";

export default function Reports() {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);

  const getProjects = () => {
    axios
      .get("http://178.63.13.157:8090/mock-api/api/projects")
      .then((response) => setProjects(response.data.data));
  };

  const getGateways = () => {
    axios
      .get("http://178.63.13.157:8090/mock-api/api/gateways")
      .then((response) => setGateways(response.data.data));
  };

  return (
    <main>
      <div className="row block center">
        <div>
          <h2>Reports</h2>
          <p className="description">
            Easily generate a report of your transactions.
          </p>
        </div>
        <table className="buttons">
          <tr>
            <td>
              <button className="color1" onClick={getProjects}>
                Select project
              </button>
            </td>
            <td>
              <button className="color1" onClick={getGateways}>
                Select gateway
              </button>
            </td>
            <td>
              <button className="color1">From date</button>
            </td>
            <td>
              <button className="color1">To date</button>
            </td>
            <td>
              <button className="color2">Generate report</button>
            </td>
          </tr>
        </table>
      </div>

      <div>
        <div className="projects">
          {projects.map((pr, i) => (
            <div className="block center">
              <div>{pr.name}</div>
              {gateways.map((gt, i) => (
                <ul>
                  <il>
                    {gt.name}
                  </il>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
