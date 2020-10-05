import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Option } = Select;


function ProductoForm (props) {

    // const [producto, setProducto] = useState({});
    const [proveedores, setProveedores] = useState([]);
    const [form] = Form.useForm();

    // Ejecutado solo al renderizar el componente por primera vez
    useEffect(() => {

        // Obtengo los tipos del backend para poder mostrar en el select
        axios.get('/primer-trabajo-grupal/rest/productos')
            .then(res => {
                setProveedores(res.data)
            })
            .catch(err => {
                console.log(err);
            });

        const { match } = props;
        if (props.match.params.productoId) {
            axios.get(`/primer-trabajo-grupal/rest/productos/${props.match.params.productoId}`)
                .then((rsp) => {
                    // NOTE: modificamos atributo producto para tener como id
                    let productoForm = rsp.data;
                    productoForm.producto = productoForm.producto ? productoForm.producto.id : null;
                    productoForm.limitDate = productoForm.limitDate ? moment(productoForm.limitDate) : moment();
                    form.setFieldsValue(productoForm);
            });
        }
    }, []);

    const submit = (formProducto) => {
        // NOTE: modificamos atributo producto para enviar como objeto
        formProducto.producto = {
            id: formProducto.producto
        }
        const {match, history } = props;
        if (props.match.params.productoId) {
            axios.put(`/primer-trabajo-grupal/rest/productos/${props.match.params.productoId}`, formProducto)
                .then((rsp) => {
                    alert('exito');
                    history.push('/productos');
                });
        } else {
            axios.post(`/primer-trabajo-grupal/rest/productos/`, formProducto)
                .then((rsp) => {
                    alert('exito');
                    history.push('/productos');
                });
        }
    }

    const onFinish = values => {
        console.log('Success:', values);
        submit(values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            style={{width: '60%', margin: '0 auto'}}
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descripción"
                name="descripcion"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="Precio"
                name="precio"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="Stock"
                name="stock"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Favorito"
                name="favorito"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="URL"
                name="url"
                rules={[{ required: false, message: 'Required!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Proveedor"
                name="proveedor"
                rules={[{ required: true, message: 'Required!' }]}
            >
                <Select style={{ width: '100%' }} onChange={(value) => console.log('handleChangeSelect -> ' + value)}>
                    {
                        proveedores.map(proveedor => {
                            return (
                                <Option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>{proveedor.nombre}</Option>
                            )
                        })
                    }
                </Select>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row>
                    <Col span={12}>
                        <Button proveedor="default" onClick={() => props.history.push(`/productos`)}>
                            Cancel
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button proveedor="primary" htmlProveedor="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default ProductoForm;