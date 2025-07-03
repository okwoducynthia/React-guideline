import { useEffect, useState } from "react";
// import Card from 'react-bootstrap/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import axios from "axios";
import { Link } from "react-router-dom";
const FetchDataTable= () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Students Data in Tabular Form</h1>
  <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">createdAt</TableCell>
            <TableCell align="right">updatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {viewResult.map((item: any) => (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link}
              to={`/studentApi/${item._id}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {item.firstName}
              </TableCell>
              <TableCell align="right">{item.lastName}</TableCell>
              <TableCell align="right">{item.phoneNumber}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.createdAt}</TableCell>
              <TableCell align="right">{item.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
       
    </div>   
  );
};

export default FetchDataTable;