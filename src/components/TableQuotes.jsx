import { useState, useEffect } from "react";
import { Space, Table } from 'antd';
import { getAllQuotesWs } from '../services/quote-ws'

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'ddate',
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
const data = () => {
    const [infoQuotes, setInfoQuotes] = useState([]);
    useEffect(()=>{
        getAllQuotesWs()
        .then(res => {
            setInfoQuotes(res.data.quotes)
        })
        .catch(error => { console.log("el error", error) })
    },[])
    console.log(infoQuotes)
 
        infoQuotes.map(infoQuote => {

                key={}
                name={infoQuote}
                dataIndex={}
        })
};



const TableQuotes = () => 
    <Table columns={columns} dataSource={data} />;

export default TableQuotes;