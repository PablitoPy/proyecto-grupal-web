import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Space, Tooltip, Button } from 'antd';
import { EditFilled, DeleteFilled, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

// const dummyProveedores = [
//     {
//             "id_proveedor": 2,
//             "nombre": "Pablo",
//             "ruc": 5631,
//             "telefono": 026545
//     }
// ]

function ProveedorList (props) {

    const [proveedores, setProveedores] = useState([]);

    const getProveedores = () => {
        // axios.get('primer-trabajo-grupal/rest/proveedores/paginated', { params: { pageSize: 2, first: 0 }})
        axios.get('primer-trabajo-grupal/rest/proveedores')
            .then(res => {
                setProveedores(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getProveedores();
    }, [])

    const deleteProveedor = idProveedor => {
        axios.delete(`/primer-trabajo-grupal/rest/proveedores/${idProveedor}`)
            .then(res => {
                alert(`Tipo con ID: ${idProveedor} borrada correctamente`);
                getProveedores();
            })
            .catch(err => {
                console.log(err);
                alert(`Seleccione un type que no tenga una tarea asociada`);
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'idProveedor',
            key: 'idProveedor'
        },
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre'
        },
        {
          title: 'RUC',
          dataIndex: 'ruc',
          key: 'ruc',
        },
        {
            title: 'Telefono',
            dataIndex: 'telefono',
            key: 'telefono',
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
                        onClick={() => props.history.push(`${props.match.url}/edit/${record.idProveedor}`)} 
                        icon={<EditFilled />} />
                </Tooltip>
                <Tooltip title="Delete">
                    <Button 
                        type="danger" 
                        shape="circle" 
                        onClick={() => deleteProveedor(record.idProveedor)} 
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
                        icon={<PlusOutlined />}>Nuevo Proveedor</Button>
                </Tooltip>
                </Col>
            </Row>
            <Table pagination={{ defaultCurrent:1, pageSize: 5, total:proveedores.length }} columns={columns} dataSource={proveedores} />
        </div>
    )
}

export default ProveedorList;