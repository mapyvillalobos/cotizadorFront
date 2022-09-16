import { Card, Button, Row, Col} from 'antd';

const { Meta } = Card;



const PackageCard = (props) => {
    console.log(props)
    return (
           <div> 

            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img src={props.img}/>}
            >
                        <Meta title={props.name} description={props.shortDescription}/>
            
                
            <h2>${props.cost} p/p</h2>
            <h2>{props.amountPeolple} personas</h2>
            {props.products.map(product => (
                <span>{product.productName}</span>
            )) }
               
            </Card>
            <br></br>
          


          
        </div>
           
            
            
    )
}

export default PackageCard;