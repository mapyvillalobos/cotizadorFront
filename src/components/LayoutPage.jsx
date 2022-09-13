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
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

ConfigProvider.config({
    theme: {
        primaryColor: '#D70000',
    },
});

function getItem(label, key, icon, onClick) {
    return {
        key,
        icon,
        onClick,
        label,
    };
}



const LayoutPage = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const items = [
        getItem('Dashboard', '1', <PieChartOutlined />, () => { navigate("/main/dashboard") }),
        getItem('Paquetes', '2', <AppstoreOutlined />, () => { navigate("/main/paquetes") }),
        getItem('Cotizaciones', '3', < ReconciliationOutlined />, () => { navigate("/main/cotizaciones") }),
        getItem('Catálogo', '4', < ShoppingOutlined />, () => { navigate("/main/catalogo") }),
        getItem('Vendedores', '5', <TeamOutlined />, () => { navigate("/main/vendedores") }),
        getItem('Entidades', '6', <ShopOutlined />, () => { navigate("/main/entidades") }),
        getItem('Mi Perfil', '7', <UserOutlined />, () => { navigate("/main/mi-perfil") }),
        getItem('Cerrar Sesión', '8', <LogoutOutlined />, () => { navigate("/main/logout") })


    ];

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
                      {props.children}
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
