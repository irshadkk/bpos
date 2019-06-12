import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { CardHeader } from '@material-ui/core';
import DataTable from './DataTable'
const rows = [
    { id: 1, name: 'Camera', price: 120, tax: 5, stock: 5, action: 'delete' },
    { id: 2, name: 'Tea', price: 100, tax: 4, stock: 4, action: 'delete' },
    { id: 3, name: 'HHH', price: 100, tax: 4, stock: 4, action: 'delete' },
    { id: 4, name: 'Camera', price: 120, tax: 5, stock: 5, action: 'delete' },
    { id: 5, name: 'Tea', price: 100, tax: 4, stock: 4, action: 'delete' },
    { id: 6, name: 'HHH', price: 100, tax: 4, stock: 4, action: 'delete' }
];
class Products extends React.Component {


    render() {

        return (

            <Card >

                <CardContent>
                    <DataTable header={['id', 'name', 'price', 'tax', 'stock', 'action']} data={rows}></DataTable >
                </CardContent>
            </Card>

        );
    }
} 
export default Products;