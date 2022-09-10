import { useState, useEffect } from "react";
import { Space, Table } from 'antd';
import { getAllQuotesWs } from '../services/quote-ws'

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'clientName',
        key: 'clientName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Vendedor',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Entidad',
        dataIndex: 'Entity',
        key: 'entitys',
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
                <a>Delete</a>
            </Space>
        ),
    },
];




const TableQuotes = () => {
    const [infoQuotes, setInfoQuotes] = useState([]);
    useEffect(() => {
        getAllQuotesWs()
            .then(res => {
               
                setInfoQuotes(res.data.quotes)
            })
            .catch(error => { console.log("el error", error) })
    }, [])
    const data = () => {

    };
    /**
     * infoQuotes =[{_id:"1234567",}]
     */
    return (<Table columns={columns} dataSource={infoQuotes} /> ) };

export default TableQuotes;