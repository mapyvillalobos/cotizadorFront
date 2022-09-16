import { useState, useEffect } from 'react';
import { signupWs } from "../services/auth-ws";
import { getAllEntitiesWs } from "../services/entity-ws";
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Checkbox,
    Col,
    Row,
} from 'antd';
import { uploadURL } from '../services/api';



const UserForm = () => {
    const [userInfo, setUserInfo] = useState([])
    const [imageURL, setImageURL] = useState('')
    const [selectedEntity, setSelectedEntity] = useState([])
    useEffect(() => {
        getAllEntitiesWs()
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data.entities)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(userInfo)

    const configUpload = {
        name: 'image',
        action: uploadURL,
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                console.log("que es info", info)
                setImageURL(info.file.response.url.uri)

            } else if (info.file.status === 'error') {
            }
        },
    }

    const onFinish = (values) => {
        console.log(values)
        signupWs({ ...values, ImageURL: imageURL, _entities: selectedEntity })
            .then(response => (console.log(response)))
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setSelectedEntity(checkedValues)
    };

    return (
        <div>

            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item name="firstName" rules={[{ required: true }]}>
                    <Input placeholder="*Nombre" />
                </Form.Item>

                <Form.Item name="lastName" rules={[{ required: true }]}>
                    <Input placeholder="*Apellido" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="*Correo electrónico" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true }]}>
                    <Input placeholder="*Contraseña" />
                </Form.Item>

                <Form.Item valuePropName="fileList">
                    <Upload {...configUpload} listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Imagen
                            </div>
                        </div>
                    </Upload>

                    <Form.Item>
                        <Checkbox.Group
                            style={{
                                width: '100%',
                            }}

                        >
                            <Row>
                                <Col span={8}>
                                    <Checkbox.Group
                                        onChange={onChange}
                                        options={
                                            userInfo.map(item => ({ value: item._id, label: item.entityName }))
                                        }
                                    />
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>

                </Form.Item>
                <div>
                    <div>
                        <Button type="primary" htmlType="submit">
                            Guardar
                        </Button>
                    </div>
                </div>
            </Form>
            <div>

            </div>


        </div>
    )
};

export default UserForm;