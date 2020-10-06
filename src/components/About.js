import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Button, Input, Row, Col, Card } from 'antd';
import { MailOutlined, UserOutlined, ShoppingOutlined, SkinOutlined, ItalicOutlined } from '@ant-design/icons';
import './About.css';

function About(props) {
  const [counter, setCounter] = useState(0);
  const [types, setTypes] = useState();
  const { TextArea } = Input;
  const { Content } = Layout;

  useEffect(() => {
    console.log('useEffect');

    axios.get('/ws/rest/tasks')
      .then(res => {
        console.log(res);
        setTypes(res.data);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Content
        className="site-layout-background"
        style={{
          padding: 20,
          margin: 0,
          minHeight: 300,
        }}>
        <Row>
          <Col span={8}>
            <br />
            <Card bordered={false}>
              <h3 style={{ fontSize: 30 }}>Misión</h3>
              <p>
                Producir ropa de mujer que sea objeto de deseo para la mujer, valorando su autoestima,
                feminidad y traduciendo sus sentimientos, deseos y sueños en moda del mismo modo
                ofreciendo a los compradores una selección de modas sun igual de la actualidad
                con precios accesibles.
           </p>
            </Card>
          </Col>
          <Col span={8}>
            <br />
            <Card bordered={false}>
              <h3 style={{ fontSize: 30 }}>Valores</h3>
              <p>
                En esta empresa tenemos como valores:
              <li>la calidad</li>
              <li>la honestidad</li>
              <li>la responsabilidad.</li>
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <br />
            <Card bordered={false}>
              <h3 style={{ fontSize: 30 }}>Visión</h3>
              <p>
                Ser una empresa líder y reconocida en la venta de ropa, lograr también extendernos y crear nuestras cadenas de almacenes, proporcionando cada día más un servicio de
                excelencia a nuestros clientes y que al mismo tiempo nos permitan competir en el mercado nacional con los mejores precios del mercado.
           </p>
            </Card>
          </Col>
        </Row>
      </Content>
      <h3 style={{ fontSize: 30 }}>Conócenos más!</h3>
      <Row>
      <Col span={14}>
      <iframe width="800" height="400" src="https://www.youtube.com/embed/YzcS4XYW6Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Col>
      <Col span={10}>
      <h3 style={{ fontSize: 50, textAlign: 'center', color:'#EC95DA', fontFamily: 'Garamond'  }}> <strong>"Style is a way to say who you are without having to speak"<ShoppingOutlined /><SkinOutlined /></strong></h3>
      </Col>
      </Row>

      <div style={{ fontSize: 50 }}>
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
