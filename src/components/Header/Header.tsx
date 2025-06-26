import "./Header.css"
import { DataInfo } from '../../Data/Data'

const Header = () => {
  return (
    <div>
      <section>
  {/* =====IMAGE SECTION STARTS HERE===== */}
   <div className="images-display">
    <div className="our-services">
      <p>Our Blogs</p>
      <div className="div-divider"></div>
    </div>


{/* ====IMAGES SECTION STARTS HERE==== */}
<div className="images-section">
{DataInfo.map((items:any) => (
  
<>

      <div>
        <img src={items.image} alt="image of a man sitting down"/>
        <p className="heading-title">{items.title}</p>
        <p className="heading-description">
          {items.desc}
        </p>
      </div>
      


</>
)  )}
</div>

    

    {/* ===IMAGES SECTION ENDS HERE==== */}
   </div>
    </section>
    </div>
  )
}

export default Header