import { useState, useEffect } from 'react';
import { getAllCataloguesWs } from "../services/catalogue-ws";
import { createPackageWs } from "../services/package-ws"
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Checkbox, 
    Col, 
    Row
} from 'antd';
const { TextArea } = Input;



const PackageForm = () => {
    const [productList, setProductList] = useState([])
    const [imageURL, setImageURL] = useState('')
    const [selectedProduct, setSelectedProduct] = useState([])
    useEffect(() => {
        getAllCataloguesWs()
        .then(res => {
            console.log(res.data)
            setProductList(res.data.catalogues)
        })
        .catch(error => {console.log("el error", error)})
    }, [])
    console.log(productList)

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
                // message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                // message.error(`${info.file.name} file upload failed.`);
            }
        },
    }

    const onFinish = (values) => {
        console.log(values)
        createPackageWs({ ...values, ImageURL: imageURL, _products:selectedProduct })
            .then(response => (console.log(response)))
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setSelectedProduct(checkedValues)
    };

    return (
        <div>
            <h1> Crear Paquete</h1>

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
                <Form.Item name="packageName" rules={[{ required: true }]}>
                    <Input placeholder="Nombre del paquete" />
                </Form.Item>

                <Form.Item name="packageShortDescription">
                    <TextArea rows={4} placeholder="Descripción corta" />
                </Form.Item>

                <Form.Item name="packageCost" rules={[{ required: true }]}>
                    <Input placeholder="Precio por persona" />
                </Form.Item>

                <Form.Item name="packageAmountPeople" >
                    <Input placeholder="Cantidad de personas" />
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
                                            productList.map(item => ({ value: item._id, label: item.productName }))
                                        }
                                    />
                                </Col>
                            </Row>
                        </Checkbox.Group>  
                    </Form.Item>
                        <div>
                    <Button type="primary" htmlType="submit">
                        Crear paquete
                    </Button>
                    </div>
                </div>
            </Form>
                <div>
                   
                </div>
               
            
        </div>
    )
};

export default PackageForm;