import CardPrimaryDefault from '../CardPrimaryDefault';

function CardholderDefault({features}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
               <CardPrimaryDefault feature={feature} index={index}/>
            ))}
        </div>
    );
}

export default CardholderDefault;