import React from 'react'
import Navbartop from './Navbar'
import { CartProvider } from './CartContext'
import Applogo from './Applogo'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import BandMembers from '../assets/Band Members.png'
import { useHref } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <CartProvider>
        <Navbartop></Navbartop>
        <Applogo></Applogo>
      </CartProvider>

      <div style={{alignItems:'centre', justifyContent:'center', textAlign:'center',color:'slategray',fontFamily:'fantasy',padding:'20px',fontSize:'30px'}}>About...</div>
      
      <Container>
      <Row>
        <Col xs={4} md={3}>
          <Image src={require("../assets/Band Members.png")} thumbnail />
        </Col>
        <Col xs={4} md={9}>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid cum. Explicabo eligendi aperiam veritatis dicta voluptatibus. Dolorum ipsam maiores, ex saepe dicta eos aliquam ullam dolore numquam eligendi hic.
          Aliquam nobis quod magni ad assumenda, repellat adipisci cumque dicta laudantium libero optio aspernatur vero corrupti amet temporibus, itaque, beatae excepturi iure mollitia architecto autem veniam nisi. Suscipit, minima voluptatem!
          Illo quis, suscipit obcaecati est reiciendis molestias ab asperiores, voluptatum aspernatur soluta laborum, nemo rerum eveniet aperiam necessitatibus magnam nam. Iure officiis dicta, officia assumenda maiores consequuntur quas tempore quis.
          Quis quod magnam corrupti consectetur asperiores totam enim, maiores sit quia architecto velit deleniti veniam quisquam placeat necessitatibus? Temporibus molestias reiciendis distinctio neque, facere necessitatibus magnam vitae! Unde, reprehenderit voluptatum.
          Unde, a quidem nihil nulla incidunt, fuga ratione numquam eos saepe at cupiditate laboriosam perferendis id minus est quia alias esse, voluptates magnam eum perspiciatis? Officiis perferendis quisquam fugiat aperiam.
           Dolorum fugiat tenetur voluptas impedit quam rem fugit, quibusdam commodi, iste animi aperiam! Maxime illum qui praesentium numquam laudantium provident molestias libero voluptatibus illo obcaecati doloremque, nobis dicta, </div>
        </Col>
      </Row>
    </Container>

      <Applogo></Applogo>
    </div>
  )
}

export default About