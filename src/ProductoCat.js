import React, { useState, useEffect } from 'react';
//import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import axios from 'axios';

import { Layout,  Row, Col, Card, Image, Pagination } from 'antd';

const { Content } = Layout;



function ProductoCat (props) {

    const [productos, setProductos] = useState([]);
   
    const getProductos = () => {
        // axios.get('primer-trabajo-grupal/rest/catalogo/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get('primer-trabajo-grupal/rest/productos')
            .then(res => {
                setProductos(res.data);
                          })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProductos();
    }, [])

//     return(

    return (
                <Content>
<Row>
{productos.map(producto => {
                             return (
                                <Col span={6}>
                                    <Card title={producto.nombre} bordered={true}>
                                        <Image width src= {producto.url}/>
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
                    <Row>

                        <br/> <br/>
              
                    </Row>
                    <br />
                    <Pagination defaultCurrent={1} total={10} />
                </Content>
            

    )
}

export default ProductoCat;