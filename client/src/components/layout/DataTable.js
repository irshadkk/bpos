import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class DataTable extends React.Component {
    sum(array, key) {
        return array.reduce((a, b) => parseFloat(a) + parseFloat(b[key] || 0), 0);
    }
    render() {

        return (
            // <div>
            //     <Grid container spacing={2}>
            //         {this.props.header.map(header => (
            //             <Grid item xs={2}>{header} </Grid>
            //         ))}
            //     </Grid>
            //     {this.props.data.map(row => (
            //         <Grid container spacing={2} >
            //             {this.props.header.map(header => (
            //                 <Grid item xs={2}>{row[header]}</Grid>
            //             ))}
            //         </Grid>
            //     ))}
            //     <Grid container spacing={2}>
            //        total: {
            //             this.sum(this.props.data, "ttl").toFixed(2)
            //         }
            //     </Grid>
            // </div>

            <List  >
                <ListItem button>
                    <ListItemText  ><Grid container spacing={2}>
                        {this.props.header.map(header => (
                            <Grid item xs={2}>{header} </Grid>
                        ))}
                    </Grid></ListItemText  >
                </ListItem> <Divider />
                {this.props.data.map(row => (
                    <ListItem button>
                        <ListItemText  ><Grid container spacing={2} >
                            {this.props.header.map(header => (
                                <Grid item xs={2}>{row[header]}</Grid>
                            ))}
                        </Grid></ListItemText  >
                    </ListItem>

                ))}
                <ListItem button>
                    <ListItemText  >
                        <Grid container spacing={2}>
                        
                            <Grid  item  >total </Grid> 
                    <Grid item  >{
                        this.sum(this.props.data, "ttl").toFixed(2)
                    }</Grid> 
                    </Grid></ListItemText  >
                </ListItem> <Divider />
            </List>

        );
    }
}

DataTable.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default DataTable;