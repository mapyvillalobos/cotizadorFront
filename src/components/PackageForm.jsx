import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Upload,
} from 'antd';



const PackageForm = () => {
    const { TextArea } = Input;
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

                <Form.Item valuePropName="fileList" name="ImageURL">
                    <Upload action="/upload.do" listType="picture-card">
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

                <Form.Item name="_products" rules={[{ required: true }]}>
                    <Input placeholder="Productos" />
                </Form.Item>
                <div>
                <Button type="primary" htmlType="submit">
                    Agregar productos
                </Button>
                </div>
                <div>
                <Button type="primary" htmlType="submit">
                    Crear paquete
                </Button>
                </div>
            </Form>
        </div>
    )
};

export default PackageForm;