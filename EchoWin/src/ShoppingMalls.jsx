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

const ShoppingMalls = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Mall 1",
            location: "City P",
            stores: 100,
            contact: "777-777-7777"
          },
          {
            id: 2,
            name: "Mall 2",
            location: "City Q",
            stores: 80,
            contact: "888-888-8888"
          },
          {
            id: 3,
            name: "Mall 3",
            location: "City R",
            stores: 90,
            contact: "888-7878-8888"
          },
          {
            id: 4,
            name: "Mall 4",
            location: "City A",
            stores: 80,
            contact: "888-12345-8888"
          },
          {
            id: 5,
            name: "Mall 5",
            location: "City T",
            stores: 60,
            contact: "888-888-8888"
          },
          {
            id: 6,
            name: "Mall 6",
            location: "City W",
            stores: 90,
            contact: "888-888-8888"
          },
          {
            id: 7,
            name: "Mall 7",
            location: "City E",
            stores: 5,
            contact: "1234-888-8888"
          }
          
      ])
   
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
            name: 'Stores',
            selector: row => row.stores,
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
                    <p className='card-heading'>Shopping-Malls Details</p>
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
                    paginationRowsPerPageOptions={[ 10, 20, 50, 75, 100]}
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

export default ShoppingMalls;