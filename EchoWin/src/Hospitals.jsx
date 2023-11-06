import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {
    Card,
    TextField,
    IconButton,
    Icon,
    Tooltip,
    Button,
} from '@mui/material';
import './App.css';

const Hospitals = () => {
    const [data, setData] = useState([
        {
          id: 1,
          name: "City General Hospital",
          location: "City X",
          capacity: 300,
          contact: "123-456-7890"
        },
        {
          id: 2,
          name: "County Medical Center",
          location: "City Y",
          capacity: 250,
          contact: "987-654-3210"
        },
        {
          id: 3,
          name: "Community Hospital",
          location: "City Z",
          capacity: 150,
          contact: "555-555-5555"
        },
        {
          id: 4,
          name: "Regional Health Center",
          location: "City A",
          capacity: 200,
          contact: "111-222-3333"
        },
        {
          id: 5,
          name: "Sunset Medical Clinic",
          location: "City B",
          capacity: 100,
          contact: "999-888-7777"
        },
        {
          id: 6,
          name: "Unity Hospital",
          location: "City C",
          capacity: 350,
          contact: "777-777-7777"
        },
        {
          id: 7,
          name: "Metropolitan Hospital",
          location: "City D",
          capacity: 400,
          contact: "444-333-2222"
        },
        {
          id: 8,
          name: "Valley Health Center",
          location: "City E",
          capacity: 180,
          contact: "123-456-7890"
        },
        {
          id: 9,
          name: "Central Medical Center",
          location: "City F",
          capacity: 220,
          contact: "555-555-5555"
        },
        {
          id: 10,
          name: "Riverside Hospital",
          location: "City G",
          capacity: 270,
          contact: "777-888-9999"
        }
      ]
      )

    const columns = [
        {
            name: 'SNo',
            selector: (row) => row.id,
            sortable: true,
            width: '75px'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,

        },
        {
            name: 'Location',
            selector: row => row.location,
            sortable: true,

        },

        {
            name: 'Capacity',
            selector: row => row.capacity,
            sortable: true,

        },
        {
            name: 'Contact',
            selector: row => row.contact,
            sortable: true,

        },
    ];

   
    return (
        <>
          
            <Card className='card-container'>
                <div className='card-header'>
                    <p className='card-heading'>Hospitals Details</p>
                  
                  
                </div>

                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    striped
                    highlightOnHover
                    pointerOnHover
                    //   noDataComponent="There are no records to display"
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 20, 50, 75, 100]}
                    customStyles={customStyles}
                />

            </Card>
           

        </>
    );
}



const customStyles = {
    subHeader: {
        style: {
            backgroundColor: 'blue',
        },
    },
    head: {
        style: {
            color: 'black',
            fontSize: '11px',
            fontWeight: 500,
            minHeight: '2px',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#ADC8E3',
            minHeight: '30px',
            borderBottomWidth: '1px',
            borderBottomColor: '#ffffff',
            borderBottomStyle: 'solid',
        },
    },

    rows: {
        style: {
            fontSize: '11px',
            minHeight: '30px',
        },
    },
}

export default Hospitals;