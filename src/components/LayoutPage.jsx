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
import { Layout, Menu, ConfigProvider, Image, Row, Col, BackTop } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#D70000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
};

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
        //getItem('Dashboard', '1', <PieChartOutlined />, () => { navigate("/main/dashboard") }),
        getItem('Paquetes', '2', <AppstoreOutlined />, () => { navigate("/main/paquetes") }),
        getItem('Cotizaciones', '3', < ReconciliationOutlined />, () => { navigate("/main/cotizaciones") }),
        getItem('Catálogo', '4', < ShoppingOutlined />, () => { navigate("/main/catalogo") }),
        getItem('Vendedores', '5', <TeamOutlined />, () => { navigate("/main/vendedores") }),
        //getItem('Entidades', '6', <ShopOutlined />, () => { navigate("/main/entidades") }),
        getItem('Mi Perfil', '7', <UserOutlined />, () => { navigate("/main/mi-perfil") }),
        getItem('Cerrar Sesión', '8', <LogoutOutlined />, () => { props.handleLogout() })


    ];

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
                <Image className="logo" src="https://res.cloudinary.com/dvgmi864m/image/upload/v1662520902/EventQuote/EventQuote_blanco_bzlfob.png" />
            
                <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <div
                >
                <Content
                    style={{
                        margin: '0 16px',
                            height: '600vh',
                            padding: 8,
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
                        <BackTop>
                            <div style={style}>↑</div>
                        </BackTop>
                </Content>
                </div>
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
