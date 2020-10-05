import React from 'react';
//import ProductoCat from './ProductoCat';

import { Carousel, Image } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function About(props) {

//  const [productosFavoritos, setProductosFavoritos] = useState([]);

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
{/* 
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
  
        <Row>
          {productos.map(producto => {
            return (
              <Col span={6}>
                <Card title={producto.nombre} bordered={true}>
                  <Image width src="https://9eba410b89d8c2b814f2-f653ee9e3b6aad4b2107b6a1ab482f61.ssl.cf2.rackcdn.com/product-hugerect-940908-112265-1490004508-136be288ddcfe9030a8632f9ffcdb003.jpg" />
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

    
   
  ); */}
  </>
  );
}

export default About;