import { useState, useEffect } from 'react';
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



const QuoteForm = () => {
    const [quoteInfo, setQuoteInfo] = useState([])
    useEffect(() => {
        createQuoteWs()
            .then(res => {
                console.log(res.data)
                setQuoteInfo(res.data.quote)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    console.log(quoteInfo)

    const onFinish = (values) => {
        console.log(values)
        createQuoteWs({ ...values })
            .then(response => (console.log(response)))
    }
    const onFinishFailed = (values) => {
        console.log('Failed', values);
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

export default QuoteForm;