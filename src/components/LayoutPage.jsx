import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    ShopOutlined,
    ReconciliationOutlined,
    ShoppingOutlined,
    AppstoreOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, ConfigProvider, Image } from 'antd';
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

ConfigProvider.config({
    theme: {
        primaryColor: '#D70000',
    },
});

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Paquetes', '2', <AppstoreOutlined />),
    getItem('Cotizaciones', '3', < ReconciliationOutlined />),
    getItem('Catálogo', '4', < ShoppingOutlined />),
    getItem('Vendedores', '5', <TeamOutlined />),
    getItem('Entidades', '6', <ShopOutlined />),
    getItem('Mi Perfil', '7', <UserOutlined />),
    getItem('Cerrar Sesión', '8', <LogoutOutlined />),
    
    
];

const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Image className="logo" src="https://res.cloudinary.com/dvgmi864m/image/upload/v1662520902/EventQuote/EventQuote_blanco_bzlfob.png" />
            
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Coded with 💜 by Mapy Villalobos
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;
