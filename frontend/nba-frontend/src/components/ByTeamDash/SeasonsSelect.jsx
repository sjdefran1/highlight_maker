import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Stack,
  Fade,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

export default function SeasonsSelect(props) {
  const [seasonsList, setSeasonsList] = React.useState(
    [
      "2014-15",
      "2015-16",
      "2016-17",
      "2017-18",
      "2018-19",
      "2020-21",
      "2021-22",
      "2022-23",
    ].reverse()
  );
  const [seasonsSelected, setSeasonsSelected] = React.useState([]);

  const handleSeasonSelect = (season) => {
    if (seasonsSelected.includes(season)) {
      setSeasonsSelected(seasonsSelected.filter((year) => year !== season));
    } else {
      let arr = [season];
      setSeasonsSelected(seasonsSelected.concat(arr));
    }
  };

  const handleAll = () => {
    setSeasonsSelected(seasonsList);
  };

  const handleClear = () => {
    setSeasonsSelected([]);
  };
  React.useEffect(() => {
    props.updateSeasons(seasonsSelected);
  }, [seasonsSelected]);

  return (
    <>
      {seasonsList.map((season) => (
        <FormControlLabel
          key={season}
          label={
            <Typography variant='body2' color={"text.secondary"}>
              {season}
            </Typography>
          }
          control={
            <Checkbox
              key={season}
              checked={seasonsSelected.includes(season)}
              icon={<CircleOutlined />}
              checkedIcon={<CircleIcon color='success' />}
              onChange={() => handleSeasonSelect(season)}
            />
          }
        />
      ))}
      <Button onClick={handleAll} color='success'>
        All
      </Button>
      <Button color='warning' onClick={handleClear}>
        Clear
      </Button>
    </>
  );
}
