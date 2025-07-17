function TitlePrimaryDefault({title="", desc=""}) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-primary-1 text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-base-content to-accent leading-relaxed">
        { title }
      </h2>
      <p className="font-primary-2 text-xl text-base-content/75 max-w-2xl mx-auto">
        { desc }
      </p>
    </div>
  );
}

export default TitlePrimaryDefault;