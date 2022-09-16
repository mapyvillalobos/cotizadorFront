import { useState, useEffect } from 'react';
import { getAllCataloguesWs } from "../services/catalogue-ws";
import { Carousel } from 'antd';
import { createQuoteWs } from "../services/quote-ws"
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
    Checkbox,
    Col,
    Row,
    DatePicker,
} from 'antd';
const { TextArea } = Input;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};



const QuoteForm = ({beingCreated, setBeingCreated}) => {
    const [quoteInfo, setQuoteInfo] = useState([])
    const [productList, setProductList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    useEffect(() => {
        getAllCataloguesWs()
            .then(res => {
                console.log(res.data)
                setProductList(res.data.catalogues)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    

    // useEffect(() => {
    //     createQuoteWs()
    //         .then(res => {
    //             console.log(res.data)
    //             setQuoteInfo(res.data.quote)
    //         })
    //         .catch(error => { console.log("el error", error) })
    // }, [beingCreated])
    // console.log(quoteInfo)


    const onFinish = (values) => {
        console.log(values)
        createQuoteWs({ ...values, _products: selectedProduct })
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
                <Form.Item name="clientName" rules={[{ required: true }]}>
                    <Input placeholder="*Nombre o Razón Social" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true }]}>
                    <Input placeholder="*Correo electrónico" />
                </Form.Item>

                <Form.Item name="quoteAmountPeople" rules={[{ required: true }]}>
                    <Input placeholder="*Cantidad de personas" />
                </Form.Item>

                <Form.Item name="eventDate">
                    <DatePicker placeholder="Fecha del evento" />
                </Form.Item>

                <Form.Item name="clientRFC">
                    <Input placeholder="RFC" />
                </Form.Item>

                <Form.Item name="clientTaxRegime">
                    <Input placeholder="Régimen Fiscal" />
                </Form.Item>

                <Form.Item name="clientZipCode" >
                    <Input placeholder="Código Postal" />
                </Form.Item>

                <Form.Item name="clientPhone" >
                    <Input placeholder="Teléfono de contacto" />
                </Form.Item>

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
                    <div>
                        <Button type="primary" htmlType="submit"
                            beingCreated={beingCreated}
                            setBeingCreated={setBeingCreated} >
                            Guardar
                        </Button>
                    </div>
                </div>
            </Form>

        </div>
    )
};

export default QuoteForm;