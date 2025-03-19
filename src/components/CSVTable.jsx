import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const CSVTable = ({ filePath }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(filePath);
      const text = await response.text();
      Papa.parse(text, {
        complete: (result) => setData(result.data),
        header: false,
      });
    };
    fetchData();
  }, [filePath]);

  return (
    <div
      style={{
        overflowX: "auto",
        overflowY: "auto",
        maxHeight: "500px",  // Limits vertical height
        maxWidth: "100%",    // Ensures responsiveness
        whiteSpace: "nowrap", // Keeps rows on one line
      }}
    >
      <table style={{ borderCollapse: "collapse", width: "max-content" }}>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "200px", // Prevents very long cells from expanding too much
                    whiteSpace: "nowrap",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVTable;
