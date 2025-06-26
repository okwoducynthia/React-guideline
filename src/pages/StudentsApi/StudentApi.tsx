import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const StudentApi = () => {
  const {id} = useParams()
  console.log(id);
  
   const [viewResult, setViewResult] = useState<any>({});
   console.log(viewResult);

   useEffect(() => {
       const fetchPosts = async () => {
         try {
           const { data } = await axios.get(
             `https://fullstack-student-backend.onrender.com/api/auth/${id}`
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
      <h1>Students Details</h1>
      <h2>{viewResult?.firstName}</h2>
      <h3>{viewResult?.lastName}</h3>
      <h4>{viewResult?.phoneNumber}</h4>
      <h5>{viewResult?.email}</h5>
      <h5>{viewResult?.password}</h5>
      <h5>{viewResult?.isBlocked}</h5>

      {/* {viewResult?.products?.images?.map((items: any) => (
      <>
        <img src={items.url} alt="" />
      </>
    ))} */}

      {/* The reason for the question mark is because the details maybe empty, 
      the question makes sure data does not breakdown */}
    </div>
  )
}

export default StudentApi