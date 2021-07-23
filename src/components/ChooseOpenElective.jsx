import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ope from "../timetable/openelectives.json";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ChooseOpenElective = (props) => {
  const classes = useStyles();
  const [electives, setElectives] = useState([]);
  const currPE1 = localStorage.getItem("currOE") || "18NTO308T";
  const [oe, setOE] = useState(currPE1);

  const handleChange = (event) => {
    setOE(event.target.value);
    localStorage.setItem("currOE", event.target.value);
    props.showTimetable();
  };
  useEffect(() => {
    setElectives(ope);
  }, []);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">G slot</InputLabel>
      <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={oe} onChange={handleChange} label="batch">
        {electives.map((el) => {
          return (
            <MenuItem value={el.subjectCode} key={el.subjectCode}>
              {el.subjectName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChooseOpenElective;
