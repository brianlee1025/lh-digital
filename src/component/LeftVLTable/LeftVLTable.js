import React from "react";
import "./LeftVLTable.css";

function LeftVLTable(props) {
  const { data } = props;
  const { title, details } = data;
  return (
    <table className="left-vl-table">
      <tbody>
        <tr>
          <td rowSpan={2}>
            <div className="cong-lu-green-vl"></div>
          </td>
          <td className="left-vl-title">{title}</td>
        </tr>
        <tr>
          <td className="left-vl-text">
            {details.map((d, i) => {
              return (
                <span
                  className={i % 2 === 0 ? "" : "cong-lu-green-bold"}
                  key={"span-" + title + "-" + i}
                >
                  {d}
                </span>
              );
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default LeftVLTable;
