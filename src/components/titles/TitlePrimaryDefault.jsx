function TitlePrimaryDefault({title="", desc=""}) {
  return (
    <div className="text-center mb-18">
      <h2 className="font-primary-1 italic text-5xl font-bold mb-5 bg-clip-text text-transparent text-shadow-lg text-shadow-primary/10 bg-gradient-to-r from-accent to-info leading-relaxed">
        { title }
      </h2>
      <p className="font-primary-2 italic text-xl text-base-content/65 max-w-2xl mx-auto ">
        { desc }
      </p>
    </div>
  );
}

export default TitlePrimaryDefault;