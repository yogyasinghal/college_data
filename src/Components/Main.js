import React,{useState,useEffect} from 'react';
import axios from 'axios';import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles((theme)=>({
  root:{

  },
   menuButton:{
    // backgroundImage:`url(${image3})`,
    // backgroundColor:'aqua',
    fontSize:25,
    // padding : '50px'
  },
  tableCell:{
    color:'white',
    backgroundColor:'black',
    fontSize:18

  },
  tableData:{
    color:"aqua",
    backgroundColor:'FloralWhite'
  },
  title:{
    backgroundColor:'green',
    color:'green'
  }
}));

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row,value,user } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
//   const [user,setUser] = useState();
//   useEffect(()=>{
//       axios.get(`http://localhost:9000/`)
//       .then(res=>{
//           console.log("success in axios");
//           setUser(res.data);
//           console.log("res = ",user);
//       })
//       .catch(res=>{
//           console.log("error in axios");
//       })
//   },[])
    console.log("row = ",row);
    console.log("value = ",value);
    console.log("user = ",user);
    var val;
    val = user.map(function(user,i){
if (user.college == row){
return(
                <TableHead className = {classes.title}>
                <TableRow className = {classes.title} >
                <TableCell component="th" scope="row" style = {{color:'DodgerBlue', fontSize:'16px'}}>
                        {/* console.log(); */}
                        {user.firstname + " "}{user.lastname}
                      </TableCell>
                      <TableCell  align = "center" style = {{color:'DeepSkyBlue', fontSize:'16px'}}>{user.email}</TableCell>
                       <TableCell  align="center" style = {{color:'DodgerBlue', fontSize:'16px'}}>{user.number}</TableCell>
                        {/* <TableCell >{user.year}</TableCell> */}
                       {/* <TableCell align="right"> */}
                         {/* {Math.round(user.amount * row.price * 100) / 100} */}
                       {/* </TableCell> */}
                </TableRow>
                </TableHead>
)}
// else{
//   return(
//               <TableHead>
//                   <TableRow>
//                     <TableCell>namedfkmff</TableCell>
//                     <TableCell>email</TableCell>
//                     <TableCell align="right">number</TableCell>
//                     <TableCell align="right">year</TableCell>
//                   </TableRow>
//                 </TableHead>
//   )}

})

// {val}
  return (
    // {val}
    <React.Fragment>
   
    {/* {val} */}
      <TableRow  className={classes.root}>
        <TableCell className = {classes.title}>
          {/* <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
        </TableCell>
        <TableCell  component="th" scope="row" style = {{color:'navy', fontSize:'18px', fontWeight:'bold'}}>
          {row}
        </TableCell>
        <TableCell align="center" onClick={() => setOpen(!open)} style = {{color:'DeepSkyBlue', cursor:'pointer'  , fontSize:'18px',fontWeight:'bold'}} >{value}<ArrowDownwardIcon fontSize="small"></ArrowDownwardIcon> </TableCell>
        {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow className = {classes.title}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse className = {classes.title} in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases" >
                <TableHead  >
                  <TableRow className = {classes.title} >
                    <TableCell style = {{color:'red', fontSize:'16px',fontWeight: 'bold'}} >Full Name</TableCell>
                    <TableCell align = "center" style = {{color:'red', fontSize:'16px',fontWeight: 'bold'}}>Email Address </TableCell>
                    <TableCell align="center" style = {{color:'red', fontSize:'16px',fontWeight: 'bold'}}>Contact Number</TableCell>
                    {/* <TableCell align="right">year</TableCell> */}
                  </TableRow>
                </TableHead>
                {/* <TableBody> */}
                {val}
                  {/* {user.map((historyRow) => (   
                    <TableRow key={historyRow._id}>
                   
                      <TableCell component="th" scope="row">
                 
                        {historyRow.college}
                      </TableCell>
                      <TableCell>{historyRow.number}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                {/* </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function Main() {
const [user,setUser] = useState([]);
  const classes = useStyles();

  useEffect(()=>{
      axios.get(`http://localhost:9000/`)
      .then(res=>{
          console.log("success in axios");
          setUser(res.data);
          console.log("res = ",user);
      })
      .catch(res=>{
          console.log("error in axios");
      })
  },[])

    var len = user.length;
    var final = new Object();
    console.log("final = ",final);
    for (var i = 0;i<len;i++){
        console.log(user[i].college);
        final[user[i].college] = 0;
    }
    for (var i = 0;i<len;i++){
        final[user[i].college] += 1;
    }
    console.log("final = ",final);

  return (
    
    <TableContainer component={Paper}>
     <br/>
     <Button
        variant="contained"
        color="primary"
        component = {Link}
        to = "/register"
        // fontSize = '1.8r'
        className = {classes.menuButton}
        size = "large"
        // endIcon = {<RestaurantMenuIcon color = "primary" style={{ fontSize: 30 }} />}
      >
      Register
    </Button>
    <br/>
    <br/>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className = {classes.tableCell}>
            <TableCell />
            <TableCell className = {classes.tableCell}>College Name</TableCell>
            <TableCell className = {classes.tableCell} align="center">Number of users</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody className = {classes.tableData}>
        {/* <TableBody> */}
          {Object.keys(final).map((row) => (
            <Row key={row._id} row={row} value = {final[row]} user ={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// export default function Main(params) {
//     return(
//         <div> hello </div>
//     )    
// }
