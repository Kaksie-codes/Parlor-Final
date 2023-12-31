import React from 'react'
import { slideContents } from '../../data'
import './gridsection.css'
import ImageHolder from '../imageholder/ImageHolder'
import SlideComponent from '../slidecomponent/SlideComponent'

const GridSection = () => {
  return (
    <section className="section grid-section">
        <div className="container">
            <div className="wrapper">
            {
                slideContents.map(slideContent => (
                  // <SlideComponent key={slideContent.id} image={slideContent.imgURL} title={slideContent.title}  moreInfo={slideContent.moreInfo}/>

                    <ImageHolder key={slideContent.id} Image={slideContent.imgURL} title={slideContent.title} slideContent={slideContent.moreInfo}/>                            
                ))
            } 
            </div>
        </div>
    </section>
  )
}

export default GridSection