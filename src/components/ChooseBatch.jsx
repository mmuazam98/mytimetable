import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ChooseBatch = (props) => {
  const classes = useStyles();
  const currBatch = localStorage.getItem("batch") || 1;
  const [batch, setBatch] = useState(parseInt(currBatch));

  const handleChange = (event) => {
    setBatch(event.target.value);
    localStorage.setItem("batch", event.target.value);
    props.showTimetable();
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
      <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={batch} onChange={handleChange} label="batch">
        <MenuItem value={1}>Batch 1</MenuItem>
        <MenuItem value={2}>Batch 2</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChooseBatch;
