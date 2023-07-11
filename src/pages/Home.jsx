import React from 'react'
import Imgslide from '../components/Imgslide'
import Footer from '../components/Footer'
import dataimg from '../data/dataimgslide'
import datacontent2 from '../data/datacontent2'
import datacontent from '../data/datacontent'
import './Home.css'

function Home() {
  return (
    <>

        <Imgslide images={dataimg} />  

        <div className="container-work" >
                <div className="content-work" >
                        <div className="content-work-header">
                            <h3>ຈຸດປະສົງ</h3>
                        </div>

                        <div className="spotlight" >
                                <div className="spotlight-content">
                                        {datacontent.map((menu, index) =>{
                                            return(
                                                <p key={index}>{menu.sotlight}</p> 
                                                  )
                                        })}
                                </div>
                        </div>

                        <div className="work">
                            <div className="content-work-header">
                                <h3>ໜ້າທີ່ວຽກ</h3>
                            </div>

                            {datacontent2.map((contentCMNS,index) =>{
                                return(
                                    <div className="content-work-image" key={index}>
                                            <div className="content-work-image1">
                                                 <img src={contentCMNS.img} alt="" className="f" />
                                                 <p>{contentCMNS.title}</p>
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

export default Home