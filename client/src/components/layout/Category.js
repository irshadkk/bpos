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

import { categoryClicked,fetchProducts } from '../../redux/ProductActions';

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

let onCategoryClick = (props,item) => { 
    props.fetchProducts(item.cat)
};

 
function Category(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList} cols={6}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {props.data.map(category => (
          <GridListTile key={category.img} onClick={() => onCategoryClick(props,category)} className={classes.gridListTile}>
            <img src={category.img} alt={category.cat} className={classes.image}/>
            <GridListTileBar className={classes.gridListTileBar} 
              subtitle={<span>{category.cat}</span>}
               
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
    // return {
    //     count: state.count
    // };
} 
const mapDispatchToProps = {
    categoryClicked,fetchProducts
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
)(Category) 