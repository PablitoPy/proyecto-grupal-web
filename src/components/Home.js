import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Carousel, Image, Row, Col, Card, Button } from 'antd';
import axios from 'axios';



const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function About(props) {

  const [productosFavoritos, setProductosFavoritos] = useState([]);

  const getProductos = () => {
    // axios.get('primer-trabajo-grupal/rest/catalogo/paginated', { params: { pageSize: 2, first: 0 }})
    axios.get('primer-trabajo-grupal/rest/productos')
      .then(res => {
        setProductosFavoritos(res.data.filter(producto => producto.favorito == false))
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProductos();
  }, [])

  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Carousel autoplay>
        <div>
          <Image
            src="https://www.eltormes.com/enamodate/wp-content/uploads/2018/08/10-elle.jpg"
          />
        </div>
        <div>
          <Image src="https://www.forever21.com/images/f21/us/en/web/20200407/0929_WGA_JACKETS_D_M_082604_f21.jpg?1" />
        </div>
        <div>
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5323.jpg?w=1349&auto=format"
          />
        </div>
        <div>
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5310.jpg?w=1349&auto=format"
          />
        </div>
      </Carousel>

      <h4>NOVEDADES</h4>

      <Row>
        {productosFavoritos.map(producto => {
          return (
            <Col span={8}>
              <Card title={producto.nombre} bordered={true}>
                <Image width src={producto.url} />
                <br />
                <p>
                  {producto.descripcion}
                </p>
                <p>
                  Precio: {producto.precio} Gs.
                </p>
                <a href="url" >Ver detalles del producto</a>
                <br></br>
                <br></br>
                <Button onClick={() => alert("Añadido a carrito")} type="primary" shape="round" icon={<ShoppingCartOutlined />} size={30}   >
                  Añadir a carrito  </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export default About;