import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import pe from "../timetable/professionalelectives.json";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ChooseProfessionalElective = (props) => {
  const classes = useStyles();
  const [electives, setElectives] = useState([]);
  const currPE1 = localStorage.getItem("currPE2") || "18CSE352T";
  const [pe2, setPe2] = useState(currPE1);

  const handleChange = (event) => {
    setPe2(event.target.value);
    localStorage.setItem("currPE2", event.target.value);
    props.showTimetable();
  };
  useEffect(() => {
    setElectives(pe);
  }, []);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">D slot</InputLabel>
      <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={pe2} onChange={handleChange} label="batch">
        {electives.map((el) => {
          if (el.subjectSlot === "D")
            return (
              <MenuItem value={el.subjectCode} key={el.subjectCode}>
                {el.subjectName}
              </MenuItem>
            );
          else return "";
        })}
      </Select>
    </FormControl>
  );
};

export default ChooseProfessionalElective;
