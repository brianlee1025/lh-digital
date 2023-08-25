import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "../../component/TeamCard/TeamCard";
import "./Team.css";

import JT from "../../assets/images/jt.jpg";
import TAN from "../../assets/images/tan.png";
import JASON from "../../assets/images/jason.png";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";

function Team() {
  const leftVLTableTeamProp = {
    title: "Team",
    details: [
      "We are a team of diverse backgrounds, qualifications, experiences, skills - enabling us to",
      " consult end-to-end",
      " on challenges of the web3 world",
    ],
  };

  const Team = [
    {
      avatar: JT,
      name: "JT",
      position: "Tech & Product",
      details: [
        [
          "6 years as",
          " a technology consultant & product manager",
          ", with robust industry experience – TMT, Oil & Gas, etc.",
        ],
        ["Specialized in", " Digital Transformation", " and", " B2C Products"],
      ],
    },
    {
      avatar: TAN,
      name: "Tan",
      position: "BD, DD & Incubation",
      details: [
        [
          "10 years as a",
          " strategy & ops consultant",
          " working with",
          " Fortune 100 companies, VCs & PEs in TradFi & web3",
        ],
        [
          "Specializes in",
          " Due Diligence",
          "  Venture",
          "  Incubation",
          " and",
          " Post Merger Integration",
        ],
      ],
    },
    {
      avatar: JASON,
      name: "Jason Lee",
      position: "Marketing & Growth",
      details: [
        [
          "A passionate",
          " digital marketer ",
          " with",
          " >15 years of digital commerce business & growth hacking experience",
        ],
        [
          "Leads",
          " Marketing & Social Incubation for web 3 startups",
          " across different web 3 verticals",
        ],
      ],
    },
  ];

  return (
    <React.Fragment>
      <Container>
        <LeftVLTable data={leftVLTableTeamProp}></LeftVLTable>
        <div className="team-members">
          {Team.map((m, i) => {
            return <TeamCard member={m} key={i}></TeamCard>;
          })}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Team;
