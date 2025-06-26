import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Fetch2 = () => {
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
  const navigate= useNavigate()
  const productDetails = (id:any) => {
    navigate(`/productDetails/${id}`)
  }
  return (
    <div>
      <h1>Display Data Screen</h1>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", gap:"30px"}}>
        {viewResult.map((items: any) => (
      <>
      <Card style={{ width: '18rem' }}>
        {items.images.map((items: any) => (
          <Card.Img variant="top" src={items.url} /> 
        ))}
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      {/*
        you can navigate through products screens using their id: 
        1. anchor(a) tag.
        2. link tag: link tag must be imported to be effective
        3. using a onclick function
      */}
      {/* <a href={`/productDetails/${items._id}`}> */}
      {/* <Link to={`/productDetails/${items._id}`}> */}
      <Card.Body onClick={() => productDetails(items._id)}>
        <Card.Title> {items.name} </Card.Title>
        <Card.Text>
          {items.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
      {/* </a> */}
      {/* </Link> */}
    </Card>


      {/* <Card.Title> {items.name} </Card.Title> */}
        {/* <h1> {items.name} </h1> */}
        {/* <h1> {items.brand} </h1> */}
        {/* <h1> {items.category} </h1> */}
        {/* <h1> {items.price} </h1> */}

        {/* {items.images.map((items: any) => (
      <>
       <img src={items.url}/>
      <Card.Img variant="top" src={items.url} />

      </>
    ))} */}


    {/* {items.color.map((items: any) => (
      <>
       <h1>{items}</h1>
      </>
    ))} */}


      </>
    ))}        
      </div>
       
    </div>   
  );
};

export default Fetch2;
