import { useState, useEffect } from 'react';
import { getAllCataloguesWs } from "../services/catalogue-ws";
import { createQuoteWs } from "../services/quote-ws"
import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    DatePicker,
    Space,
    Modal
} from 'antd';



const QuoteForm = ({ beingCreated, setBeingCreated }) => {
    const [productList, setProductList] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])


    useEffect(() => {
        getAllCataloguesWs()
            .then(res => {
                setProductList(res.data.catalogues)
            })
            .catch(error => { console.log("el error", error) })
    }, [])


    const onFinish = (values) => {
        createQuoteWs({ ...values, _products: selectedProduct })
            .then(response => {
                if (response.data) {
                    setBeingCreated(!beingCreated)
                }
                if (response.status) {
                    Modal.success({
                        content: "Cotización creada exitosamente",
                    })
                }
            })
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    const onChange = (checkedValues) => {
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
                        <Form.Item name="clientName" rules={[{ required: true }]}>
                            <Input placeholder="*Nombre o Razón Social" />
                        </Form.Item>

                        <Form.Item name="email" rules={[{ required: true }]}>
                            <Input placeholder="*Correo electrónico" />
                        </Form.Item>

                        <Form.Item name="quoteAmountPeople" rules={[{ required: true }]}>
                            <Input placeholder="*Cantidad de personas" />
                        </Form.Item>

                        <Form.Item name="clientPhone" rules={[{ required: true }]}>
                            <Input placeholder="*Teléfono de contacto" />
                        </Form.Item>

                        <Form.Item name="eventDate">
                            <DatePicker placeholder="*Fecha evento" />
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
                                            productList.map(item => ({ value: item._id, label: item.productName }))
                                        }
                                    />
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>

                        <div>
                            <div>
                                <Button type="primary" htmlType="submit"
                                    beingCreated={beingCreated}
                                    setBeingCreated={setBeingCreated} >
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

export default QuoteForm;