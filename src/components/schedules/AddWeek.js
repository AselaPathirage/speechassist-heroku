import React, { useEffect, useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddWeek = (props) => {
    // const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
    const [value, setValue] = useState(new Date());
    const [value2, setValue2] = useState('');
    const [weeks, setweeks] = useState(props.weeks);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [formFields, setFormFields] = useState([
        { title: '', treatmentMethod: '',treatmentvalue:'' },
    ])

    const handleFormChange = (event, index) => {
        // console.log(event.target);
        let data = [...formFields];
        data[index].title = event.target.value;
        setFormFields(data);
    }
    
    const handleFormChange2 = (event, index) => {
        let data = [...formFields];
        // console.log(data[index]);
        data[index].treatmentMethod = event.target.value;
        setFormFields(data);
    }
    const handleFormChange3 = (event, index) => {
        // console.log(event.target);
        let data = [...formFields];
        data[index].treatmentvalue = event.target.value;
        setFormFields(data);
    }
    const submit = (e) => {
        e.preventDefault();
        let object={
            title:value2,
            date:value,
            tasks:formFields,
        };
        props.setweeks(object);
        // console.log(formFields)
        props.close();
    }

    const addFields = () => {
        let object = {
            title: '', 
            treatmentMethod: '',
            treatmentvalue:''
        }
        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <Dialog
            open={props.openStatus}
            onClose={props.close}
            maxWidth="sm"
            fullWidth={true}
        >
            <DialogTitle>Add Week</DialogTitle>
            <DialogContent>

                <form onSubmit={submit}>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Stack spacing={2}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={value2}
                                onChange={(e)=>setValue2(e.target.value)}
                            />

                            <DesktopDatePicker
                                label="Start Date"
                                inputFormat="DD/MM/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />

                            <Divider>
                                <Chip label="Tasks" sx={{ bgcolor: '#d5e5f7' }} />
                            </Divider>

                            {formFields.map((form, index) => {
                                return (
                                    <div key={index}>
                                        <TextField
                                            margin="dense"
                                            id="title"
                                            label="Title"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            value={form.title}
                                            sx={{ mb: 1 }}
                                            onChange={event => handleFormChange(event, index)}
                                        />
                                        <Stack spacing={2} direction="row" m={0} justifyContent="space-between">
                                            <FormControl sx={{ minWidth: 200 }}>
                                                <InputLabel id="demo-simple-select-autowidth-label">Treatment Method</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-autowidth-label"
                                                    id="demo-simple-select-autowidth"
                                                    value={form.treatmentMethod}
                                                    onChange={event => handleFormChange2(event, index)}
                                                    autoWidth
                                                    label="Treatment Method"
                                                >
                                                    <MenuItem value="None">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={"DAF"}>DAF</MenuItem>
                                                    <MenuItem value={"FAF"}>FAF</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            <TextField
                                                margin="dense"
                                                id="treatmentvalue"
                                                label="Value"
                                                type="number"
                                                fullWidth
                                                variant="outlined"
                                                value={form.treatmentvalue}
                                                onChange={event => handleFormChange3(event, index)}
                                            />
                                            <Button color="error" variant="outlined" size="small" onClick={() => removeFields(index)}>
                                                Remove
                                            </Button>
                                        </Stack>
                                        <Divider variant="inset" />
                                    </div>
                                )
                            })}

                            <Button variant="outlined" size="small" onClick={addFields}>
                                Add Item
                            </Button>


                        </Stack>
                    </LocalizationProvider>
                </form>

            </DialogContent>
            <DialogActions>
                <Button onClick={props.close}>Cancel</Button>
                <Button onClick={submit}>Add Week</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddWeek