import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Tooltip, Button } from 'antd';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';

const dummyProductos = [
    {
        "idProducto": 1,        
        "nombre": 'remera',
        "precio": '50000',
        "descripcion": 'blanco y gris',
        "stock": '50',
        "url": 'https://i.etsystatic.com/18236162/r/il/201b8b/1628087393/il_794xN.1628087393_mjjw.jpg',
        "favorito": true,
        "proveedor": {
            "idProveedor": 1,
            "nombre": 'Chacomer',
            "ruc": '5654987',
            "telefono": '0981654321' 
        }
    }
]

function ProductoList (props) {

    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        // axios.get('primer-trabajo-grupal/rest/productos/paginated', { params: { pageSize: 2, first: 0 }})
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

    const deleteProducto = idProducto => {
        axios.delete(`/primer-trabajo-grupal/rest/productos/${idProducto}`)
            .then(res => {
                alert(`Producto con ID: ${idProducto} borrada correctamente`);
                getProductos();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'idProducto',
            key: 'idProducto'
        },
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre'
        },
        {
          title: 'Descripcion',
          dataIndex: 'descripcion',
          key: 'descripcion',
        },
  
        {
            title: 'Precio',
            dataIndex: 'precio',
            key: 'precio',
          },
        {
          title: 'Proveedor',
          key: 'proveedor',
          dataIndex: 'proveedor',
          render: proveedor => (
            <>
              {proveedor && proveedor.nombre}
            </>
          ),
        },
        {
          title: 'Actions',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
                <Tooltip title="Edit">
                    <Button 
                        type="primary" 
                        shape="circle" 
                        onClick={() => props.history.push(`${props.match.url}/edit/${record.idProducto}`)} 
                        icon={<EditFilled />} />
                </Tooltip>
                <Tooltip title="Delete">
                    <Button 
                        type="danger" 
                        shape="circle" 
                        onClick={() => deleteProducto(record.idProducto)} 
                        icon={<DeleteFilled />} />
                </Tooltip>
            </Space>
          ),
        }
    ];

    return (
        <div>
            <Row style={{ padding: 20 }}>
                <Col span={22}></Col>
                <Col span={2}>
                <Tooltip title="New">
                    <Button 
                        type="primary" 
                        shape="round" 
                        onClick={() => props.history.push(`${props.match.url}/new`)}
                        icon={<PlusOutlined />}>New Producto</Button>
                </Tooltip>
                </Col>
            </Row>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:productos.length }} columns={columns} dataSource={productos} />
        </div>
    )
}

export default ProductoList;