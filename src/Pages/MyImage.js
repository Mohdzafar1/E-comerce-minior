import React,{useState} from 'react'
import "../Style/MyImage.css"

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return ( 
   <>
    <div className='row'>
      <div className='col-lg-4'>
      {imgs.map((curElm, index) => {
          return (
            <figure>
              <img  className="small-image"
                src={curElm.url}
                alt={curElm.filename}
                
                key={index}
                onClick={() => setMainImage(curElm)}
               />
            </figure>
          );
        })}
      </div>
      <div className="col-lg-8">
      <img className='large-image' src={mainImage.url} alt={mainImage.filename} />
      </div>
      </div>

   </>
 
  )
}

export default MyImage