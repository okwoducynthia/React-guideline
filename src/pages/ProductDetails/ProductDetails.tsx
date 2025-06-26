import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams()
  console.log(id);
  
   const [viewResult, setViewResult] = useState<any>({});
   console.log(viewResult);

   useEffect(() => {
       const fetchPosts = async () => {
         try {
           const { data } = await axios.get(
             `https://fullstack-student-backend.onrender.com/api/products/${id}`
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
      <h1>Product Details Screen</h1>
      <h2>{viewResult?.products?.name}</h2>
      <h3>{viewResult?.products?.brand}</h3>
      <h4>{viewResult?.products?.category}</h4>
      <h5>{viewResult?.products?.description}</h5>
      <h5>{viewResult?.products?.price}</h5>
      <h5>{viewResult?.products?.color}</h5>
      {viewResult?.products?.images?.map((items: any) => (
      <>
        <img src={items.url} alt="" />
      </>
    ))}
      {/* The reason for the question mark is because the details maybe empty, 
      the question makes sure data does not breakdown */}
    </div>
  )
}

export default ProductDetails