import { useState } from 'react';
import { signupWs } from "../services/auth-ws";
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Space
} from 'antd';
import { uploadURL } from '../services/api';



const UserForm = ({beingCreated, setBeingCreated}) => {
    const [imageURL, setImageURL] = useState('')
    
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
        signupWs({ ...values, ImageURL: imageURL })
            .then(response => {
                if (response.data) {
                    setBeingCreated(!beingCreated)
                }
            })
    }
    
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };


    return (
        <div>
            <div className='forms'>
                <Space
                    direction="vertical"
                    align="mock-block"
                    style={{
                        display: 'flex'
                    }}
                >
                    <br /> <br />

            <Form
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
                    </Form.Item>
                
                    <div>
                        <Button type="primary" htmlType="submit">
                            Crear
                        </Button>
                </div>
            </Form>
            </Space>
            </div>

            </div>
    )
};

export default UserForm;