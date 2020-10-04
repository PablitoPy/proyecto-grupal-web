import React, {useEffect, useState } from 'react';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';

function TypeForm (props) {

    const [types, setTypes] = useState([]);
    const [form] = Form.useForm();


    useEffect(() => {
        if (props.match.typeID)

        axios.get('/ws/rest/types')
            .then(res => {
                setTypes(res.data)
            })
            .catch(err => {
                console.log(err);
            });

        const { match } = props;
        if (match.params.taskId) {
            axios.get(`/ws/rest/tasks/${match.params.taskId}`)
                .then((rsp) => {
                    // NOTE: modificamos atributo type para tener como id
                    let taskForm = rsp.data;
                    taskForm.type = taskForm.type ? taskForm.type.id : null;
                    taskForm.limitDate = taskForm.limitDate ? moment(taskForm.limitDate) : moment();
                    form.setFieldsValue(taskForm);
            });
        }
    }, []);
