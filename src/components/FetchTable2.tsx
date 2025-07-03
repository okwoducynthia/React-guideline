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
const FetchTable2= () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/products"
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
      <h1>Products Data in Tabular Form</h1>
  <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {viewResult.map((items: any) => (
            <TableRow
              key={items._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link}
              to={`/productDetails/${items._id}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <TableCell align="left">
                {items.images.map((items: any) => (
                <img src={items.url} style={{width: "130px", height: "130px"}}/> 
              ))}
              </TableCell>
              <TableCell align="left">{items.name}</TableCell>
              <TableCell align="left">{items.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
       
    </div>   
  );
};

export default FetchTable2;