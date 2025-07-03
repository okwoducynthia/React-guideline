import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const FetchStudent = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${id}`
      );
      window.location.reload();
    } catch (error: any) {
      console.error(error.data.response);
    }
  };

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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "30px",
        }}
      >
        {viewResult.map((items: any) => (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Link to={`/studentApi/${items._id}`}>
                <Card.Title> {items.firstName} </Card.Title>
                <Card.Title> {items.lastName} </Card.Title>
                <Card.Title> {items.phoneNumber} </Card.Title>
                <Card.Title> {items.email} </Card.Title>
                <Card.Title> {items.password} </Card.Title>
                <Card.Title> {items.isBlocked} </Card.Title>
                <Card.Title> {items.createdAt} </Card.Title>
                <Card.Title> {items.updatedAt} </Card.Title>
                </Link>
                <FaTrash style={{ color: "red", fontSize: "20px", cursor: "pointer" }} onClick={() => handleDelete(items._id)}/>
                {/* You have to pass ID to the handleDelete function so as to be able to delete individual data */}
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchStudent;
