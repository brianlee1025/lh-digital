import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  const { member } = props;
  const { avatar, name, position, details } = member;
  return (
    <Card className="team-card bg-maniac-mansion">
      <div className="team-card-div">
        <CardMedia
          sx={{
            height: "12vw",
            width: "12vw",
            borderRadius: "50%",
            margin: "auto",
          }}
          image={avatar}
          title={"alt-" + name}
        />
        <CardContent className="team-card-content">
          <p className="team-card-content-position clay-slate-wacke">
            {position}
          </p>
          <p className="team-card-content-name">{name}</p>
          <ul className="team-card-content-details">
            {details.map((ds, i) => {
              return (
                <li key={i}>
                  {ds.map((d, j) => {
                    return (
                      <span
                        className={
                          j % 2 === 0
                            ? "team-card-content-details-regular"
                            : "team-card-content-details-bold"
                        }
                        key={"span-" + i + "-" + j}
                      >
                        {d}
                      </span>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </div>
    </Card>
  );
}

export default TeamCard;
