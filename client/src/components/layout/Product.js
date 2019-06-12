// import React from 'react';
// import PropTypes from 'prop-types';


// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

// import Button from '@material-ui/core/Button';


// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import { CardHeader, Divider } from '@material-ui/core';


// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import Grid from '@material-ui/core/Grid';
// import DataTable from './DataTable';

// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// import './Product.css';


// import { connect } from "react-redux";


// class Product extends React.Component {
//     addToCart = (item) => {
//         this.props.dispatch({ type: "ADDTOCART", payload: item });
//     };

//     // removeFromCart = () => {
//     //     this.props.dispatch({ type: "REMOVEFROMCART" });
//     // };


//     render() {

//         return (
//             <Grid container spacing={2}>
//                 {this.props.data.map(data => (
//                     <Grid item >
//                         <Card className="product-card">
//                             <CardContent>
//                                 <Typography component="p">
//                                     {data.name}
//                                 </Typography>
//                                 <Typography component="p">
//                                     {data.price}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button size="full" color="primary" 
//                                 onClick={() => this.addToCart(data)} >
//                                     ADD TO CART
//                                  </Button>
//                             </CardActions>
//                         </Card>






//                     </Grid>
//                 ))}
//             </Grid>




//         );
//     }
// }

// Product.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
//     return {
//         count: state.count
//     };
// }

// export default connect(mapStateToProps)(Product);



















// import { connect } from "react-redux";
// import compose from 'recompose/compose'

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         minWidth: 300,
//         width: '100%',
//     },
//     image: {
//         position: 'relative',
//         height: 70,
//         [theme.breakpoints.down('xs')]: {
//             width: '100% !important', // Overrides inline-style
//             height: 100,
//         },
//         '&:hover, &$focusVisible': {
//             zIndex: 1,
//             '& $imageBackdrop': {
//                 opacity: 0.15,
//             },
//             '& $imageMarked': {
//                 opacity: 0,
//             },
//             '& $imageTitle': {
//                 border: '4px solid currentColor',
//             },
//         },
//     },
//     focusVisible: {},
//     imageButton: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: theme.palette.common.white,
//     },
//     imageSrc: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center 40%',
//     },
//     imageBackdrop: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.4,
//         transition: theme.transitions.create('opacity'),
//     },
//     imageTitle: {
//         position: 'relative',
//         // padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
//     },
//     imageMarked: {
//         height: 3,
//         width: 18,
//         backgroundColor: theme.palette.common.white,
//         position: 'absolute',
//         bottom: -2,
//         left: 'calc(50% - 9px)',
//         transition: theme.transitions.create('opacity'),
//     },
// });


// let addToCart = (props,item) => {
//      props.dispatch({ type: "ADDTOCART", payload: item });
// };
// function ButtonBases(props) {
//     const { classes } = props;

//     return (
        
//         <div className={classes.root}>
//             {props.data.map(image => (
//                 <ButtonBase
//                     focusRipple
//                     key={image.name}
//                     className={classes.image}
//                     onClick={() => addToCart(props,image)}
//                     focusVisibleClassName={classes.focusVisible}
//                     style={{
//                         width: '20%',
//                     }}
//                 >
//                     <span
//                         className={classes.imageSrc}
//                         style={{
//                             backgroundImage: `url(${image.img})`,
//                         }}
//                     />
//                     <span className={classes.imageBackdrop} />
//                     <span className={classes.imageButton}>
//                         <Typography
//                             component="span"
//                             variant="subtitle1"
//                             color="inherit"
//                             className={classes.imageTitle}
//                         >
//                             {image.name}
//                             <span className={classes.imageMarked} />
//                         </Typography> :
//                         <Typography
//                             component="span"
//                             variant="subtitle1"
//                             color="inherit"
//                             className={classes.imageTitle}
//                         >
//                             {image.price} 
//                         </Typography>
//                     </span>
//                 </ButtonBase>
//             ))}
//         </div>
//     );
// }

// ButtonBases.propTypes = {
//     classes: PropTypes.object.isRequired,
// }; 
// function mapStateToProps(state) {
//     return {
//         count: state.count
//     };
// } 

// export default compose(
//     withStyles(styles),
//     connect(mapStateToProps)
// )(ButtonBases)



import { connect } from "react-redux";
import compose from 'recompose/compose'

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info'; 

import { addToCart, removeFromCart } from '../../redux/Actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  gridListTile: {
    maxHeight:  70, 
    minWidth:  100, 
  },
  gridListTileBar: {
    maxHeight:  15, 
    minWidth:  70, 
  },
  image: {
    // width: 128,
    // height: 128,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

let addToTheCart = (props,item) => {
    props.addToCart(item);
};

 
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList} cols={6}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {props.data.map(tile => (
          <GridListTile key={tile.img} onClick={() => addToTheCart(props,tile)} className={classes.gridListTile}>
            <img src={tile.img} alt={tile.name} className={classes.image}/>
            <GridListTileBar className={classes.gridListTileBar} 
              subtitle={<span>{tile.name}: {tile.price}</span>}
               
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
    // return {
    //     count: state.count
    // };
} 
const mapDispatchToProps = {
  addToCart,
  removeFromCart
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
)(TitlebarGridList) 