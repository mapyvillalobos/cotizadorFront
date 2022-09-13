import { TableQuotes } from '../components';
import {
    Button
} from 'antd';



const Quotes = () => {
    return (
        <div>
            <div>
            <h1> Cotizaciones</h1>
            <Button type="primary" htmlType="">
                Crear cotización
            </Button>
            </div>

           <div>
        <TableQuotes>
                

        </TableQuotes>
        </div>
        </div>
    )
};

export default Quotes;
