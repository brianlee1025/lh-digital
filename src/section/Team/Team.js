import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "../../component/TeamCard/TeamCard";
import "./Team.css";

import YB from "../../assets/images/bike.jpg";
import TAN from "../../assets/images/tan.jpg";
import JASON from "../../assets/images/jason.jpg";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import Achievements from "../Achievements/Achievements";
import Advisors from "../Advisors/Advisors";

function Team() {
  const leftVLTableTeamProp = {
    title: "Team",
    details: [
      <span>
        We are a team of diverse backgrounds, qualifications, experiences,
        skills - enabling us to
      </span>,
      <span className="cong-lu-green-bold"> consult end-to-end</span>,
      <span> on challenges of the web3 world</span>,
    ],
  };

  const Team = [
    {
      avatar: YB,
      name: "YB",
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
      <Container id="Team">
        <LeftVLTable data={leftVLTableTeamProp}></LeftVLTable>
        <div className="team-members">
          {Team.map((m, i) => {
            return <TeamCard member={m} key={i}></TeamCard>;
          })}
        </div>
        <Achievements></Achievements>
        <span className="talent">Talent with experience from</span>

        <div className="team-talent-carousel"></div>

        <Advisors></Advisors>
      </Container>
    </React.Fragment>
  );
}

export default Team;
