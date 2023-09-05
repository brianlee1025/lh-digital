import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Edge.css";

import EdgeDetailImg1 from "../../assets/images/edge-detail-img-1.png";
import EdgeDetailImg2 from "../../assets/images/edge-detail-img-2.png";
import EdgeDetailImg3 from "../../assets/images/edge-detail-img-3.png";
import EdgeDetailImg4 from "../../assets/images/edge-detail-img-4.png";

function Edge() {
  const leftVLTableEdgeProp = {
    title: "Edge",
    details: [
      <span>To ensure the delivery of top-notch work, we leverage upon a</span>,
      <span className="cong-lu-green-bold">
        {" "}
        wealth of market-leading differentiators
      </span>,
      <span> offered by no other Web3 consulting group</span>,
    ],
  };

  const edgedDetailLeftImageTableProp = [
    {
      image: EdgeDetailImg1,
      title: "Intrinsic Due Diligence",
      details: [
        <span>
          Proprietary, in-house, proven due diligence process comprised of 10
          comprehensive aspects for
        </span>,
        <span className="cong-lu-green-bold"> our deal flow</span>,
      ],
    },
    {
      image: EdgeDetailImg2,
      title: "Web3 meets TradFi",
      details: [
        <span>A team with a</span>,
        <span className="cong-lu-green-bold">
          {" "}
          harmonious blend of experience
        </span>,
        <span>
          {" "}
          in both Web3 and TradFi worlds, positioned to bridge both fields
        </span>,
      ],
    },
    {
      image: EdgeDetailImg3,
      title: "Far-Reaching Network",
      details: [
        <span>Robust and experienced</span>,
        <span className="cong-lu-green-bold"> network of vendors</span>,
        <span>
          {" "}
          including development houses, KOL networks, and market makers
        </span>,
      ],
    },
    {
      image: EdgeDetailImg4,
      title: "In-House Toolkits",
      details: [
        <span>
          Operator and investor experience enables the Lighthouse team to employ
          a suite of{" "}
        </span>,
        <span className="cong-lu-green-bold">
          {" "}
          stress-tested frameworks and tools
        </span>,
      ],
    },
  ];

  const EdgeDetailsLeftImageTable = (props) => {
    const { data } = props;
    const { image, title, details } = data;

    return (
      <React.Fragment>
        <tr>
          <td rowSpan={2}>
            <div className="edge-detail-image">
              <img src={image} alt={title + "_img"}></img>{" "}
            </div>
          </td>
          <td className="edge-detail-title">{title}</td>
        </tr>
        <tr>
          <td className="edge-detail-text">
            {details.map((d, i) => {
              return <React.Fragment key={i}>{d}</React.Fragment>;
            })}
          </td>
        </tr>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Container>
        <LeftVLTable data={leftVLTableEdgeProp}></LeftVLTable>
      </Container>
      <div className="edge-detail bg-maniac-mansion">
        <table className="edge-detail-table">
          <tbody>
            {edgedDetailLeftImageTableProp.map((p, i) => {
              return (
                <EdgeDetailsLeftImageTable
                  data={p}
                  key={i}
                ></EdgeDetailsLeftImageTable>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Edge;
