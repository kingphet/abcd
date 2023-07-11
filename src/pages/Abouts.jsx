import React from 'react'
import './about.css'
import Footer from '../components/Footer'
import datamember from '../data/datamember'
import datarj from '../data/datarj'


function About() {
  return (
    <>
        <div className="member">
              <div className="membergen1">
                      <div className="rj-list">
                            <h3>ອາຈານທີ່ປຶກສາ</h3>
                      </div>

                      <div className="member-rj">
                            {datarj.map((datar, index) =>{
                              return(
                                  <div className="box-rj" key={index}>
                                        <img src={datar.img} alt="" />
                                        <h3>{datar.name}</h3>
                                        <h5>{datar.position}</h5>
                                  </div>  
                                    )
                            })}
                      </div>

                      <div className="studen-list">
                            <h3>ສະມາຊິກ</h3>
                      </div>

                      <div className="member-studen">
                            {datamember.map((datamem,index) =>{
                                return(
                                      <div className="box-st" key={index}>
                                          <img src={datamem.pucture} alt="" />
                                          <h5>{datamem.name}</h5>
                                          {/* <h5>{datamem.class}</h5> */}
                                          <h5>{datamem.position}</h5>
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

export default About