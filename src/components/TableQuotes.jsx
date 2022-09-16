import { useState, useEffect } from "react";
import { Space, Table } from 'antd';
import { getAllQuotesWs } from '../services/quote-ws'

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'clientName',
        key: 'clientName',
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Total',
        dataIndex: 'totalOrder',
        key: 'totalOrder',
    },
    {
        title: 'Vendedor',
        dataIndex: '_Owner',
        key: '_Owner',
        render: (_, record) => (
            <Space size="middle">
                <a>{record._Owner?.firstName}</a>
            </Space>
        ),
    },
    {
        title: 'Entidad',
        dataIndex: '_products',
        key: '_products',
        render: (_, record) => (
            <Space size="middle">
                <a>{record._products?.map(product => <span>{product.productName}</span>)}</a>
            </Space>)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Reenviar</a>
            </Space>
        ),
    },
];




const TableQuotes = () => {
    const [infoQuotes, setInfoQuotes] = useState([]);
    useEffect(() => {
        getAllQuotesWs()
            .then(res => {
                console.log(res)

                setInfoQuotes(res.data.quotes)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    const data = () => {

    };
    /**
     * infoQuotes =[{_id:"1234567",}]
     */
    return (<Table columns={columns} dataSource={infoQuotes} />)
};

export default TableQuotes;