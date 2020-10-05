import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Input, Row, Col } from 'antd';
import {  MailOutlined,  UserOutlined } from '@ant-design/icons';
import './About.css';

function About(props) {
const [counter, setCounter] = useState(0);
const [types, setTypes] = useState();
const { TextArea } = Input; 


useEffect (() => {
  console.log('useEffect');
 
  axios.get('/ws/rest/tasks')
  .then(res => {
    console.log(res);
    setTypes (res.data);
  }).catch(error => {
    console.log(error);
  });
},[]);
 
  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <h3 style={{fontSize: 30}}>Misión</h3>
      <p>Producir ropa de mujer que sea objeto de deseo para la mujer, valorando su autoestima, feminidad y traduciendo sus sentimientos, deseos y sueños en moda. </p>
      <h3>Visión</h3>
      <p>Ser una empresa líder y reconocida en la venta de ropa, lograr también extendernos y crear nuestras cadenas de almacenes, proporcionando cada día más un servicio de excelencia a nuestros clientes y que al mismo tiempo nos permitan competir en el mercado nacional con los mejores precios del mercado. </p>
      <p>Misión </p>
      <br></br><br></br><br></br>
                <div style={{fontSize: 50}}> 
                    Contactános! </div>
                <br></br>
                <Row>
                    <Col span={12}>
                        <Input Input size="large" placeholder="Tu nombre" prefix={<UserOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Input Input size="large" placeholder="Tu correo" prefix={<MailOutlined />} />
                    </Col>
                </Row>
                <br></br>
                <TextArea rows={4} />
                <br></br>
                <Button onClick={() => alert("Gracias por tu mensaje!!")} type="primary">
                    Enviar mensaje
        </Button>


      
    </>
  );
}
 
export default About;
