import { TableQuotes } from '../components';
import {
    Divider,
    Typography
} from 'antd';



const Quotes = () => {
    return (
        <div>
            <div>
                <Typography.Title level={1}> Cotizaciones</Typography.Title>
                <Divider orientation="center"></Divider>
            </div>

           <div>
                <br />
        <TableQuotes>
       

        </TableQuotes>
        </div>
        </div>
    )
};

export default Quotes;
