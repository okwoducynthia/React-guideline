import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from "react-router-dom";
const FetchStudent= () => {
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
      <h1>Students Data</h1>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", gap:"30px"}}>
        {viewResult.map((items: any) => (
      <>
      <Link to={`/studentApi/${items._id}`}>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {items.firstName} </Card.Title>
        <Card.Title> {items.lastName} </Card.Title>
        <Card.Title> {items.phoneNumber} </Card.Title>
        <Card.Title> {items.email} </Card.Title>
        <Card.Title> {items.password} </Card.Title>
        <Card.Title> {items.isBlocked} </Card.Title>
        <Card.Title> {items.createdAt} </Card.Title>
        <Card.Title> {items.updatedAt} </Card.Title>
      </Card.Body>
    </Card>
    </Link>
      </>
    ))}        
      </div>
       
    </div>   
  );
};

export default FetchStudent;