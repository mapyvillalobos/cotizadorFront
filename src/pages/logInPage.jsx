import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout, Image, Space, Modal, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


import { loginWs } from '../services/auth-ws'

const { Header, Footer, Sider, Content } = Layout;





const LogInPage = (props) => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        loginWs(values)
            .then(response => {
                console.log(response)
                if (response.status) {
                    props.authentication(response.data.user)
                    navigate("/main/dashboard")
                    Modal.success({
                        content: "¡Bienvenido!",
                    })
                }
            })
    };
    const onFinishFailed = (values) => {
        console.log('Failed', values);
    };

    return (
            <div>
               
                    <Layout
                        style={{
                            minHeight: '100vh',
                        }}>
                        <Header>
                            <Image className="logo" src="https://res.cloudinary.com/dvgmi864m/image/upload/v1662520902/EventQuote/EventQuote_blanco_bzlfob.png" />
                        </Header>
                            <Content
                    justify="center" align="middle">
                    <div>
                        
                    <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 8,
                            }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Username!',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="*Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="*Contraseña"
                                        />
                                    </Form.Item>
                                    {/* <Form.Item>
                <a className="login-form-forgot" href="">
                    Olvidé mi contraseña
                </a>
            </Form.Item> */}

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Iniciar Sesión
                                        </Button>
                                    </Form.Item>
                                </Form>
                                  
                    </div>
                            </Content>
                        </Layout>
        </div>
    );
};

export default LogInPage;