import React from 'react'
import './Work.css'
import Footer from '../components/Footer';
import datawork from '../data/datawork'
function Work() {
  return (
    <>
        <div className="content">
          <div className="content-work">
              <h1>ຜົນງານແລະກິດຈະກຳຕ່າງໆ</h1>
                  <div className="content-performances">
                      {datawork.map((conwork, index) =>{
                        return(
                            <div className="box" key={index}>
                                <img src={conwork.img} alt="" />
                                  <div className="title">
                                      <h2>{conwork.title}</h2>
                                      <p>{conwork.time}</p>
                                  </div>
                            </div> 
                              )
                      })}
                  </div>
           </div>
        </div>
      <Footer />
    </>
  )
}

export default Work