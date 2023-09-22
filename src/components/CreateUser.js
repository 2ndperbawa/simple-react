import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <div className="login-container">
                    <div className="login-inner-container">
                        <table cellSpacing="5">
                            <tbody>
                                <tr>

                                    <td>
                                        <TextField className="create-text-field" id="outlined-basic" label="Name" variant="outlined" name="name" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>

                                    <td> 
                                        <TextField className="create-text-field" id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <TextField className="create-text-field" id="outlined-basic" label="Mobile" variant="outlined" name="mobile" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align ="right">
                                        <Button type="submit" color="success" variant="contained" startIcon={<SaveIcon />}>Save</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    )
}
