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
import { CardHeader, Divider } from '@material-ui/core';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import DataTable from './DataTable';
import Product from './Product';
import Category from './Category';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Sale.css';
import { addToCart, removeFromCart } from '../../redux/Actions';
import { fetchProducts, fetchCategories } from '../../redux/ProductActions';




import { connect } from "react-redux";
 
var cardStyle = {
    display: 'block',
    // width: '30vw',
    transitionDuration: '0.3s',
    height: '44vh',
    overflow: 'scroll',
    marginBottom: '5px'

}
var cardHeaderStyle = {
    fontSize: '3px',
    margin: 0,
    padding: 0,
}
var cartStyle = {
    display: 'block',
    // width: '30vw',
    transitionDuration: '0.3s',
    height: '88vh',
    overflow: 'scroll',
    marginLeft: '3px'

}
var productUnit = {
    display: 'inline-block',
    width: '44',
}



class ProductsList extends React.Component {
    // addToCart = () => {
    //     this.props.dispatch({ type: "ADDTOCART" });
    // };

    removeFromCart = () => {
        this.props.dispatch(removeFromCart());
    };

    componentDidMount() {
        this.props.dispatch(fetchProducts(null));
        this.props.dispatch(fetchCategories());
        // this.props.dispatch(fetchTest());
        
    }


    render() { 
        

        if (this.props.error) {
            // return <div>Error! {this.props.error.message}</div>;
        }

        if (this.props.loading) {
            // return <div>Loading...</div>;
        }

        return (

            
            <Grid container spacing={8}>

                <Grid item xs={8}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} >
                            <Card style={cardStyle}>
                                <CardHeader style={cardHeaderStyle} name="Products" />
                                <CardContent>
                                    <Product data={this.props.products}></Product>

                                </CardContent>
                            </Card>
                        </Grid> 
                         
                        <Grid item xs={12}>
                            <Card style={cardStyle}>
                                <CardHeader style={cardHeaderStyle} name="Category" />
                                <CardContent>
                                    <Category data={this.props.categories}></Category>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>


                    <Card style={cartStyle}>
                        <CardHeader

                        />
                        <CardContent>
                            <DataTable header={['qty', 'name', 'price', 'tax', 'ttl']} data={this.props.rows}></DataTable >
                        </CardContent>

                    </Card>
                </Grid>
            </Grid> 




        );
    }
} 
 
const mapStateToProps = state => ({
    products: state.productReducer.items,
    categories: state.productReducer.categories,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
    rows: state.cartreducer.cartItem
  });
  
  export default connect(mapStateToProps)(ProductsList);
