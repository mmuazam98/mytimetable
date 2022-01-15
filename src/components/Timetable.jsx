import React, { useState, useEffect } from "react";
import "../css/Timetable.css";
import batch1 from "../timetable/batch1.json";
import batch2 from "../timetable/batch2.json";
import ChooseBatch from "./ChooseBatch";
import ChooseProfessionalElectiveB from "./ChooseProfessionalElectiveB";
import ChooseProfessionalElectiveD from "./ChooseProfessionalElectiveD";
import peb from "../timetable/professionalelectives.json";
import ped from "../timetable/professionalelectives.json";
import oe from "../timetable/openelectives.json";
import ChooseOpenElective from "./ChooseOpenElective";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
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
  space: {
    marginLeft: 5,
  },
});
const Timetable = () => {
  let location = useLocation();
  const [timetable, setTimeTable] = useState([]);
  const showTimetable = () => {
    const bslot = localStorage.getItem("currPE1") || "18CSE355T";
    const dslot = localStorage.getItem("currPE2") || "18CSE352T";
    const gslot = localStorage.getItem("currOE") || "18NTO308T";
    const pe1 = peb.filter((p) => {
      return p.subjectCode === bslot;
    });
    const pe2 = ped.filter((p) => {
      return p.subjectCode === dslot;
    });
    const oe1 = oe.filter((o) => {
      return o.subjectCode === gslot;
    });
    const batch = parseInt(localStorage.getItem("batch")) || 1;
    const dayOrder = parseInt(location.pathname[1]) || 1;
    if (batch === 1) {
      const Timetable = batch1[dayOrder - 1].concat();
      Timetable.forEach((e, index) => {
        if (e.subjectSlot === "B") {
          const updatedSlot = { ...e, ...pe1[0] };
          Timetable[index] = updatedSlot;
        }
        if (e.subjectSlot === "D") {
          const updatedSlot = { ...e, ...pe2[0] };
          Timetable[index] = updatedSlot;
        }
        if (e.subjectSlot === "G") {
          const updatedSlot = { ...e, ...oe1[0] };
          Timetable[index] = updatedSlot;
        }
      });
      setTimeTable(Timetable);
    } else {
      const Timetable = batch2[dayOrder - 1].concat();
      Timetable.forEach((e, index) => {
        if (e.subjectSlot === "B") {
          const updatedSlot = { ...e, ...pe1[0] };
          Timetable[index] = updatedSlot;
        }
        if (e.subjectSlot === "D") {
          const updatedSlot = { ...e, ...pe2[0] };
          Timetable[index] = updatedSlot;
        }
        if (e.subjectSlot === "G") {
          const updatedSlot = { ...e, ...oe1[0] };
          Timetable[index] = updatedSlot;
        }
      });
      setTimeTable(Timetable);
    }
  };
  useEffect(() => {
    showTimetable();
    // eslint-disable-next-line
  }, [location]);

  const classes = useStyles();
  return (
    <div className="timetable">
      <div className="container">
        <div className="options">
          <ChooseBatch showTimetable={showTimetable} />
          <ChooseProfessionalElectiveB showTimetable={showTimetable} />
          <ChooseProfessionalElectiveD showTimetable={showTimetable} />
          <ChooseOpenElective showTimetable={showTimetable} />
        </div>
        <div className="github">
          <a href="https://github.com/mmuazam98/mytimetable" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
        {console.log(timetable)}
        {timetable.map((tt, index) => {
          return (
            <Card className={classes.root} variant="outlined" key={index}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Slot: {tt.slot}
                </Typography>
                <Typography variant="h5" component="h2">
                  {tt.subjectName}
                  <span className={classes.space}>({tt.subjectCode})</span>
                </Typography>
                <Typography className={classes.teacher} color="textSecondary">
                  {tt.teacher} <span>({tt.teacherCode})</span>
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
