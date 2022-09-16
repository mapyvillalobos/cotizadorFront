import { Card } from 'antd';

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
            
               <br/> 
            <span>${props.cost} por persona</span> <br/>
                <span>{props.amountPeolple} personas</span><br /><br />
            <div>
            {props.products.map(product => (
                <span>{product.productName}  <br/></span>
            )) }
                </div>
            </Card>

        </div>
    )
}

export default PackageCard;