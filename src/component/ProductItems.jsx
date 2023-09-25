import React from 'react'

function ProductItems(props) {
  let{image,description,title,price}=props
  return (
    <>
      <div className="card my-3"style={{width: "18rem"}}>
              <img src={image} className="card-img-top" alt="Image" style={{height: "208px",width: "278px"}} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}...
                </p>
                <p className="card-text">
                  <div className="text-body-secondary">$
                    {price}
                  </div>
                </p>
              </div>
            </div>
    </>
  )
}

export default ProductItems
