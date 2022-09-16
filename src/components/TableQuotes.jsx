import { useState, useEffect } from "react";
import { Space, Table, List } from 'antd';
import { getAllQuotesWs } from '../services/quote-ws'



const columns = [
    {
        title: 'Nombre',
        dataIndex: 'clientName',
        key: 'clientName',
    },
    {
        title: 'Fecha',
        dataIndex: 'eventDate',
        key: 'eventDate',
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
        title: 'Cantidad de personas',
        dataIndex: 'quoteAmountPeople',
        key: 'quoteAmountPeople',
    },
    {
        title: 'Productos',
        dataIndex: '_products',
        key: '_products',
        render: (_, record) => (
            <List size="middle">
                <span>{record._products?.map(product => <span>- {product.productName} <br/> </span>)}</span>
            </List>)
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
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

        for (let i = 0; i < 3; ++i) {
        }
    };
    return (<Table columns={columns} dataSource={infoQuotes} />)
};

export default TableQuotes;