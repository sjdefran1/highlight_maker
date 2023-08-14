import * as React from "react";
import NoHighlights from "./NoHighlights";
import SinglePlay from "./SinglePlay";
import { Alert, Hidden, Button, Grow, Collapse, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//const project = projects[0];
export default function PlayersPlayList(props) {
  const navigate = useNavigate();
  const [alertShowing, setAlertShowing] = React.useState(true);

  const linkToNeedHelp = () => {
    navigate("/downloadHelp");
  };

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

  // console.log(page);
  return (
    <>
      <Collapse in={alertShowing}>
        <Alert
          severity='info'
          onClose={() => setAlertShowing(false)}
          sx={{ justifyContent: "center" }}>
          Click the blue download button to directly save to your device, having
          issues?
          <Button onClick={() => linkToNeedHelp()} size='small' color='success'>
            Get Help
          </Button>
        </Alert>
      </Collapse>

      <Grow in={true}>
        <Alert
          severity='info'
          variant='outlined'
          sx={{ justifyContent: "center" }}>
          Currently Viewing
        </Alert>
      </Grow>
      {props?.playByPlay &&
        props?.playByPlay?.plays?.map((play) => play).length === 0 && (
          <NoHighlights isPlay={true} />
        )}
      {props?.playByPlay &&
        props?.playByPlay?.plays?.map((play, index) => (
          <React.Fragment key={play.playid}>
            <nav aria-label='playbyplay'>
              {/* {props.playInVideoPlayer} */}
              <SinglePlay
                index={index}
                playInVideoPlayer={props.playInVideoPlayer}
                play={play}
                currentStatType={props.currentStatType}
                team_ids={[play.htid, play.atid]}
                // team_ids={props.playByPlay.team_ids}
                // team_ids={[props.home_teamID, props.away_teamID]}
                players_length={1}
              />
            </nav>
            <Button>Show in Player</Button>
          </React.Fragment>
        ))}
    </>
  );
}
