import { useState, useEffect } from 'react';
import { createEntityWs } from "../services/entity-ws"
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Divider,
} from 'antd';
import { uploadURL } from '../services/api';



const EntityForm = ({ beingCreated, setBeingCreated }) => {
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
        createEntityWs({ ...values, ImageURL: imageURL })
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
            <Divider orientation="center">Crear nueva Entidad</Divider>
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
                <Form.Item name="entityName" rules={[{ required: true }]}>
                    <Input placeholder="Nombre de la entidad" />
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
                    <div>
                        <Button type="primary" htmlType="submit">
                            Crear
                        </Button>
                    </div>
                </div>
            </Form>
            </div>
            <div>

            </div>


        </div>
    )
};

export default EntityForm;