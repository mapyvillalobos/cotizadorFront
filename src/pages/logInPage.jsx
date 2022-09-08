import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout, Image, Space } from 'antd';
import { Link } from 'react-router-dom';

import { loginWs, signupWs } from '../services/auth-ws'

const { Header, Footer, Sider, Content } = Layout;


const LogInPage = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="space-align-container">
            <div className="space-align-block">
                <Space align="center">
        <Layout
            style={{
                minHeight: '100vh',
            }}>
            <Header>
                <Image className="logo" src="https://res.cloudinary.com/dvgmi864m/image/upload/v1662520902/EventQuote/EventQuote_blanco_bzlfob.png" />
            </Header>
            <Layout>
                <Content>

                
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    placeholder="Contraseña"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Olvidé mi contraseña
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    <Link to='/login'>Iniciar Sesión</Link> 
                </Button>
            </Form.Item>
        </Form>
                </Content>
            </Layout>
            <Footer></Footer>
        </Layout>
        </Space>
        </div>
        </div>
    );
};

export default LogInPage;