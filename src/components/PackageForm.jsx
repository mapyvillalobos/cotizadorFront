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
    Row, 
    Space
} from 'antd';
import { uploadURL } from '../services/api';
const { TextArea } = Input;



const PackageForm = ({ beingCreated, setBeingCreated }) => {
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
        createPackageWs({ ...values, ImageURL: imageURL, _products:selectedProduct })
            .then(response => {
                if (response.data) {
                    setBeingCreated(!beingCreated)
                } 
            })
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
        
                                    <Checkbox.Group 
                                        onChange={onChange}
                                        options={ 
                                            productList.map(item => (
                                                {value: item._id, label: item.productName }
                                                
                                                ))
                                        } 
                                            />
                            </Row>
                        </Checkbox.Group>  
                    </Form.Item>
                        <div>
                    <Button type="primary" htmlType="submit">
                        Crear
                    </Button>
                    </div>
                </div>
            </Form>
                </Space>
                   
                </div>
               
            
        </div>
    )
};

export default PackageForm;