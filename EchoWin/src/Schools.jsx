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

const Schools = () => {
    const [data, setData] = useState([
        {
            "id": 1,
            "name": "School A",
            "location": "City X",
            "students": 500,
            "contact": "555-555-5555"
        },
        {
            "id": 2,
            "name": "School B",
            "location": "City Y",
            "students": 300,
            "contact": "444-444-4444"
        },
        {
            "id": 3,
            "name": "School C",
            "location": "City Z",
            "students": 400,
            "contact": "333-333-3333"
        },
        {
            "id": 4,
            "name": "School D",
            "location": "City W",
            "students": 600,
            "contact": "666-666-6666"
        },
        {
            "id": 5,
            "name": "School E",
            "location": "City V",
            "students": 450,
            "contact": "777-777-7777"
        },
        {
            "id": 6,
            "name": "School F",
            "location": "City U",
            "students": 700,
            "contact": "888-888-8888"
        },
        {
            "id": 7,
            "name": "School G",
            "location": "City T",
            "students": 350,
            "contact": "999-999-9999"
        },
        {
            "id": 8,
            "name": "School H",
            "location": "City S",
            "students": 550,
            "contact": "111-111-1111"
        },
        {
            "id": 9,
            "name": "School I",
            "location": "City R",
            "students": 250,
            "contact": "222-222-2222"
        },
        {
            "id": 10,
            "name": "School J",
            "location": "City Q",
            "students": 800,
            "contact": "123-123-1234"
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
            name: ' Name',
            selector: row => row.name,
            sortable: true,

        },
        {
            name: 'Location',
            selector: row => row.location,
            sortable: true,

        },

        {
            name: 'Students',
            selector: row => row.students,
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
                    <p className='card-heading'>Schools Details</p>

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

export default Schools;