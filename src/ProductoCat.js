import React, { useState, useEffect } from 'react';
//import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import axios from 'axios';

import { ShoppingCartOutlined } from '@ant-design/icons';
import {Button, Layout, Row, Col, Card, Image, Pagination, Space } from 'antd';

const { Content } = Layout;



function ProductoCat(props) {

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
                            <Space direction="vertical">
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
                            </Space>
                        </Col>
                    )
                })}
            </Row>
            <Row>

                <br /> <br />

            </Row>
            <br />
            <Pagination defaultCurrent={1} total={10} />
        </Content>


    )
}

export default ProductoCat;