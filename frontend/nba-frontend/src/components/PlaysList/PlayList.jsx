import * as React from "react";
import NoHighlights from "./NoHighlights";
import SinglePlay from "./SinglePlay";

//const project = projects[0];
export default function PlayList(props) {
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [showHighlightPreview, setShowHighlightPreview] = React.useState(false);

  //   const handleSwitchChange = (event) => {
  //     setShowHighlightPreview(!showHighlightPreview);
  //   };
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
  return (
    <>
      {props.playByPlay.plays
        .filter((play) => play.quarter === props.currentQuarter)
        .map((play) => play).length === 0 && <NoHighlights isPlay={true} />}
      {props.playByPlay.plays
        .filter((play) => play.quarter === props.currentQuarter)
        .map((play) => (
          <React.Fragment key={play.url}>
            <nav aria-label='playbyplay'>
              <SinglePlay
                play={play}
                // team_ids={props.playByPlay.team_ids}
                team_ids={[props.home_teamID, props.away_teamID]}
                players_length={props.playByPlay.players.length}
              />
            </nav>
          </React.Fragment>
        ))}
    </>
  );
}
