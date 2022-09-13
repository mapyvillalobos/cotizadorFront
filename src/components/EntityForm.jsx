import { useState, useEffect } from 'react';
import { createEntityWs } from "../services/entity-ws"
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
} from 'antd';



const EntityForm = () => {
    const [entityInfo, setEntityInfo] = useState([])
    const [imageURL, setImageURL] = useState('')
    useEffect(() => {
        createEntityWs()
            .then(res => {
                console.log(res.data)
                setEntityInfo(res.data.entity)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(entityInfo)

    const configUpload = {
        name: 'image',
        action: 'http://localhost:5005/api/upload/single',
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
        createEntityWs({ ...values, ImageURL: imageURL })
            .then(response => (console.log(response)))
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    return (
        <div>
            <h1> Crear Entidad</h1>

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
                            Crear entidad
                        </Button>
                    </div>
                </div>
            </Form>
            <div>

            </div>


        </div>
    )
};

export default EntityForm;