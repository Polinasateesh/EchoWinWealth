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

const Restaurants = () => {
    const [data, setData] = useState([
        {
          id: 1,
          name: "Restaurant A",
          location: "City X",
          cuisine: "Italian",
          contact: "111-111-1111"
        },
        {
          id: 2,
          name: "Restaurant B",
          location: "City Y",
          cuisine: "Mexican",
          contact: "222-222-2222"
        },
        {
          id: 3,
          name: "Restaurant C",
          location: "City Z",
          cuisine: "Chinese",
          contact: "333-333-3333"
        },
        {
          id: 4,
          name: "Restaurant D",
          location: "City P",
          cuisine: "Japanese",
          contact: "444-444-4444"
        },
        {
          id: 5,
          name: "Restaurant E",
          location: "City Q",
          cuisine: "Indian",
          contact: "555-555-5555"
        },
        {
          id: 6,
          name: "Restaurant F",
          location: "City R",
          cuisine: "Mediterranean",
          contact: "666-666-6666"
        },
        {
          id: 7,
          name: "Restaurant G",
          location: "City S",
          cuisine: "Thai",
          contact: "777-777-7777"
        },
        {
          id: 8,
          name: "Restaurant H",
          location: "City T",
          cuisine: "Steakhouse",
          contact: "888-888-8888"
        },
        {
          id: 9,
          name: "Restaurant I",
          location: "City U",
          cuisine: "French",
          contact: "999-999-9999"
        },
        {
          id: 10,
          name: "Restaurant J",
          location: "City V",
          cuisine: "Greek",
          contact: "101-101-1010"
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
            name: 'Cuisine',
            selector: row => row.cuisine,
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
                    <p className='card-heading'>Restaurants Details</p>
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

export default Restaurants;