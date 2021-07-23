import React, { useState, useEffect } from "react";
import "../css/Timetable.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import batch1 from "../timetable/batch1.json";
import batch2 from "../timetable/batch2.json";
import ChooseBatch from "./ChooseBatch";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
  },

  title: {
    fontSize: 14,
  },
  teacher: {
    marginBottom: 12,
  },
});
const Timetable = () => {
  let location = useLocation();
  const [timetable, setTimeTable] = useState([]);
  const showTimetable = () => {
    const batch = parseInt(localStorage.getItem("batch")) || 1;
    const dayOrder = parseInt(location.pathname[1]) || 1;
    console.log(dayOrder);
    console.log("Test");
    if (batch === 1) setTimeTable(batch1[dayOrder - 1]);
    else setTimeTable(batch2[dayOrder - 1]);
  };
  useEffect(() => {
    showTimetable();
    // eslint-disable-next-line
  }, [location]);

  const classes = useStyles();
  return (
    <div className="timetable">
      <div className="container">
        <ChooseBatch showTimetable={showTimetable} />
        <div className="github">
          <a href="https://github.com/mmuazam98/mytimetable" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
        {timetable.map((tt, index) => {
          return (
            <Card className={classes.root} variant="outlined" key={index}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Slot: {tt.slot}
                </Typography>
                <Typography variant="h5" component="h2">
                  {tt.subjectName}
                  <span>({tt.subjectCode})</span>
                </Typography>
                <Typography className={classes.teacher} color="textSecondary">
                  {tt.teacher} ({tt.teacherCode})
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="subject-details">{tt.category}</span>
                  <span className="subject-details">{tt.type}</span>
                </Typography>
                <div className="slot">
                  <span>{tt.subjectSlot}</span>
                </div>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => window.open(tt.link, "_blank")}>
                  Join Now
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Timetable;
