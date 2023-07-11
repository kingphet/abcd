import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
      <footer>
              <div className="addess">
                    <h3>ທີ່ຕັ້ງ</h3>
                    <h4>ຄະນະວິສະວະກຳສາດ</h4>
                    <p>ພາກວິສະວະກຳຄອມພິວເຕີແລະເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ</p>
              </div>

              <div className="contact">
                    <h3>ຕິດຕໍ່ຊ່ອງທາງ</h3>
                    <h4>020 96423903</h4> 
                    <a href="https://www.facebook.com/profile.php?id=100092155759913"><FaFacebookSquare style={{color: "#371af7"}} /></a>
                    <a href="https://wa.me/qr/VCW7YIBUVIDWK1"><RiWhatsappFill style={{color: "#09e209"}} /></a>
              </div>
      </footer>
  )
}

export default Footer