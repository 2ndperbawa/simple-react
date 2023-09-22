import axios from "axios"
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';






export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }


    const columns = [
        { field: 'no', headerName: 'no', width: 50 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'mobile', headerName: 'Mobile', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 130,
            renderCell: (params) => (
              <Button style={{backgroundColor : 'red'}} variant="contained" startIcon={<DeleteIcon />} onClick={() =>  deleteUser(params.row.id)}>Delete</Button>
            ),
          },
      ];
      
      let idx = 0;
      const rows = users.map((item) => {
            idx++;
            return  {   no: idx,
                        id: item.id,
                        name: item.name, 
                        email: item.email, 
                        mobile: item.mobile, 
                    };
        });;


    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }


    return (
        <div>
            <h1>List Users</h1>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                <div style={{ width: '80%'  }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            </div>
        </div>
    )
}
