import React, { useEffect, useState } from 'react';
//import ProductoCat from './ProductoCat';

import { Carousel, Image, Row, Col, Card } from 'antd';
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
          {/* <h3 style={contentStyle}> */}
          <Image
            //  width={1000}
            src="https://www.eltormes.com/enamodate/wp-content/uploads/2018/08/10-elle.jpg"
          />
          {/* </h3> */}
        </div>
        <div>
          {/* <h3 style={contentStyle}> */}
          <Image
            //  width={1000}
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/aeropuerto-ok-1531303498.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
          />
          {/* </h3> */}
        </div>
        <div>
          {/* <h3 style={contentStyle}> */}
          <Image
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5323.jpg?w=1349&auto=format"
          />
          {/* </h3> */}
        </div>
        <div>
          {/* <h3 style={contentStyle}> */}
          <Image
            //width={200}
            src="https://forever21.imgix.net/img/app/shopmedia/production/1/16-66-5310.jpg?w=1349&auto=format"
          />
          {/* </h3> */}
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
                    Precio: {producto.precio}
                  </p>
                </Card>
              </Col>
            )
          })}
        </Row>
  </>
  );
}

export default About;