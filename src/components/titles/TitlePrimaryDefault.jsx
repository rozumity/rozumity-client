function TitlePrimaryDefault({title="", desc=""}) {
  return (
    <div className="text-center mb-18">
      <h2 className="font-primary-1 text-5xl font-bold mb-5 bg-clip-text text-transparent text-shadow-md text-shadow-accent/10 bg-gradient-to-r from-accent to-info leading-relaxed">
        { title }
      </h2>
      <p className="font-primary-2 italic text-xl text-accent max-w-2xl mx-auto text-shadow-sm text-shadow-base-content/10">
        { desc }
      </p>
    </div>
  );
}

export default TitlePrimaryDefault;