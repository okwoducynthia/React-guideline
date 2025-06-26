import { useEffect, useState } from "react";
import axios from "axios";
const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://api-adsng.c9ja.com/cretive-products/pag/all?page=1"
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
      <h1>Display Data Screen</h1>

       {viewResult.map((items: any) => (
      <>
        <h1> {items.title} </h1>
        <h1> {items.category} </h1>
        <h1> {items.subCategory} </h1>
        <h1> {items.price} </h1>
        
        {items.fileUrl.map((items: any) => (
      <>
       <img src={items}/>
       
      </>
    ))}
      </>
    ))}
    </div>   
  );
};

export default FetchAllData;
