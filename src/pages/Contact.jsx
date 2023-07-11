import React from 'react'
import './Contact.css'
import Iframe from 'react-iframe';
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function Contact() {
  return (
    <>
         <div className="content-contect">
                <div className="contract">
                    <h1>ຊ່ອງທາງການຕິດຕໍ່/ຕິດຕາມ</h1>
                        <div className="big-box">
                            <div className="box-1">
                                    <a href="https://www.facebook.com/profile.php?id=100092155759913"><FaFacebookSquare style={{color: "#371af7"}} size={100} /></a>
                            </div>
                            <div className="box-2">
                                    <a href="https://wa.me/qr/VCW7YIBUVIDWK1"><RiWhatsappFill style={{color: "#09e209"}} size={100} /></a>
                            </div>
                        </div>

                        <div className="map">
                            <h1>CEIT CyberSecurity Map</h1>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4530.795187651515!2d102.62758740641242!3d17.93898777076269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124661f3b5aaaab%3A0xfe5b338b7a2303a3!2sJICA%20ITSD!5e0!3m2!1sth!2sla!4v1688708584575!5m2!1sth!2sla"
                                frameBorder="0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                />
                        </div>
                </div>
         </div>

    </>
  )
}

export default Contact