function CardPrimaryDefault({feature, index}) {
    const cardStyle = `group relative bg-gradient-to-t from-secondary/30 to-base-50 rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-primary-content/20`
    return (
        <div key={index} className={ cardStyle }>
            <div className="absolute inset-0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <div className="text-6xl mb-5 text-center group-hover:scale-110 transition-transform duration-300 text-shadow-lg text-shadow-accent/15">
                {feature.icon}
            </div>
            <h3 className="text-lg uppercase text-center font-bold font-secondary-1 mb-3 text-accent text-shadow-md text-shadow-primary/15 group-hover:text-info transition-colors">
                {feature.title}
            </h3>
            <p className="font-secondary-2 text-center leading-relaxed text-base-content text-shadow-sm text-shadow-info/5">
                {feature.description}
            </p>
            </div>
        </div>
    );
}

export default CardPrimaryDefault;