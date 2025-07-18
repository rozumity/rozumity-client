function TitlePrimaryDefault({title="", desc=""}) {
  const hasDesc = desc.length;

  return (
    <div className="text-center mb-14">
      <h2 className="font-primary-1 italic text-5xl font-bold bg-clip-text text-transparent text-shadow-lg text-shadow-primary/10 bg-gradient-to-r from-accent to-info leading-relaxed">
        { title }
      </h2>
      <p className={ `font-primary-2 italic font-medium text-xl mt-4 text-base-content/65 text-shadow-md text-shadow-info/5 max-w-2xl mx-auto ${!hasDesc ? 'hidden' : ''}` }>
        { desc }
      </p>
    </div>
  );
}

export default TitlePrimaryDefault;