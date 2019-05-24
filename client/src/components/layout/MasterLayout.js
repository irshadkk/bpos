// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';

// import Button from '@material-ui/core/Button';


// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import { CardHeader } from '@material-ui/core';

// import { NavLink } from 'react-router-dom'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Products from './Products';
// import Sale from './Sale';

// const drawerWidth = 240;
// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//     id += 1;
//     return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



// const styles = theme => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginLeft: 12,
//         marginRight: 20,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing.unit * 3,
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
// });

// class MasterLayout extends React.Component {
//     state = {
//         open: false,
//     };

//     handleDrawerOpen = () => {
//         this.setState({ open: true });
//     };

//     handleDrawerClose = () => {
//         this.setState({ open: false });
//     };

//     render() {
//         const { classes, theme } = this.props;
//         const { open } = this.state;

//         return (
//             <Router>
//                 <div className={classes.root}>
//                     <CssBaseline />
//                     <AppBar
//                         position="fixed"
//                         className={classNames(classes.appBar, {
//                             [classes.appBarShift]: open,
//                         })}
//                     >
//                         <Toolbar disableGutters={!open}>
//                             <IconButton
//                                 color="inherit"
//                                 aria-label="Open drawer"
//                                 onClick={this.handleDrawerOpen}
//                                 className={classNames(classes.menuButton, open && classes.hide)}
//                             >
//                                 <MenuIcon />
//                             </IconButton>

//                             <Typography variant="h6" color="inherit" noWrap>
//                             </Typography>
//                         </Toolbar>
//                     </AppBar>
//                     <Drawer
//                         className={classes.drawer}
//                         variant="persistent"
//                         anchor="left"
//                         open={open}
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                     >
//                         <div className={classes.drawerHeader}>
//                             <IconButton onClick={this.handleDrawerClose}>
//                                 Bairuha POS
//               {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                             </IconButton>
//                         </div>
//                         <Divider />

//                         <List>
//                             <ListItem> <NavLink to="/"> Sale </NavLink></ListItem>
//                             <ListItem> <NavLink to="/products"> Products </NavLink> </ListItem>



//                         </List>


//                     </Drawer>
//                     <main
//                         className={classNames(classes.content, {
//                             [classes.contentShift]: open,
//                         })}
//                     >
//                         <div className={classes.drawerHeader} />
//                         <div>

//                             <Switch>
//                                 <Route exact path='/' component={Sale} />
//                                 <Route path='/products' component={Products} />
//                             </Switch>
//                         </div>


//                     </main>
//                 </div>
//             </Router>
//         );
//     }
// }

// MasterLayout.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(MasterLayout);





import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Products from './Products';
import Sale from './Sale';
import ServerApiTest from './ServerApiTest'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

var appBarStyle = {
    top: 'auto',
    bottom: 0, 
    backgroundColor:'#3fc769'

}
var appHeaderBarStyle = {
    top: 0,
    bottom: 'auto',
    // colorPrimary:'#3fc769',
    backgroundColor:'#3fc769'
}

const useStyles = withStyles(theme => ({
    root: {
    //   flexGrow: 1,
      colorPrimary:'#3fc769'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class MasterLayout extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        const fullList = (
            <div className={classes.fullList}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        // .MuiAppBar-colorPrimary-10 {
        //     color: #fff;
        //     background-color: #3fc769;
        // }
        return (
            <div>

                <AppBar position="fixed" color="primary" style={appHeaderBarStyle}>
                    <Toolbar >
                        <Button color="inherit" onClick={this.toggleDrawer('left', true)}>Open Left</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('right', true)}>Open Right</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('top', true)}>Open Top</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Driver
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Waiter
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Instructions
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Customer
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Misc
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Take Away
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Home Delivery
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Dine In
                        </Button>

                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer('bottom', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <br />
                <br />
                <br />
                <br />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Sale} />
                        <Route path='/products' component={Products} />
                        <Route path='/test' component={ServerApiTest} />
                        
                    </Switch>
                </Router>

                <AppBar position="fixed" color="primary" style={appBarStyle}>
                    <Toolbar >
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Driver</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Waiter</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Instructions</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Customer</Button>
                        <Button color="inherit" onClick={this.toggleDrawer('bottom', true)}>Misc</Button>

                        <Button color="inherit" aria-label="Open drawer">
                            Take Away
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Home Delivery
                        </Button>
                        <Button color="inherit" aria-label="Open drawer">
                            Dine In
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MasterLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MasterLayout);
