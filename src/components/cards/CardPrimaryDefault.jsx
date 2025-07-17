function CardPrimaryDefault({feature, index}) {
    return (
        <div key={index} className="group relative bg-gradient-to-t from-accent/15 to-base-100/75 rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-2xl shadow-base-300">
            <div className="absolute inset-0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
            <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-base-content group-hover:text-purple-600 transition-colors">
                {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {feature.description}
            </p>
            </div>
        </div>
    );
}

export default CardPrimaryDefault;