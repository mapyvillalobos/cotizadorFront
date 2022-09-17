import { useState } from 'react';
import { createCatalogueWs } from "../services/catalogue-ws"
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Space,
    Modal,
} from 'antd';
import { uploadURL } from '../services/api';
const { TextArea } = Input;



const ProductForm = ({ beingCreated, setBeingCreated }) => {
    const [imageURL, setImageURL] = useState('')

    const configUpload = {
        name: 'image',
        action: uploadURL,
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                setImageURL(info.file.response.url.uri)
            } else if (info.file.status === 'error') {
            }
        },
    }

    const onFinish = (values) => {
        createCatalogueWs({ ...values, catalogueImageURL: imageURL })
            .then(response => {
                if (response.data) {
                    setBeingCreated(!beingCreated)
                }
                if (response.status) {
                    Modal.success({
                        content: "Producto o servicio creado exitosamente",
                    })
                }
            })
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    return (
        <div >
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
                        <Form.Item name="productName" rules={[{ required: true }]}>
                            <Input placeholder="*Nombre del producto" />
                        </Form.Item>

                        <Form.Item name="productShortDescription">
                            <TextArea rows={4} placeholder="Descripción corta" />
                        </Form.Item>

                        <Form.Item name="productCost" rules={[{ required: true }]}>
                            <Input placeholder="*Precio" />
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

export default ProductForm;