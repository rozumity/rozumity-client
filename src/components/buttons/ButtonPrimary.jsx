function ButtonPrimary({ size = "", rounded = "full", isScript = true, isFullWidth = false, textSize="xl", className="", text = "" }) {
  const fontClasses = isScript ? "font-script" : "font-primary-2";
  const sizeClasses = `btn-${size}`;
  const roundedClasses = `rounded-${rounded}`;
  const colorClasses = rounded === 'full' ? 'btn-accent' : 'btn-info';
  const widthClasses = isFullWidth ? 'w-full mb-0' : '';
  const defaultClasses = "btn border-y-0 shadow-xl text-shadow-neutral/25 bg-gradient-to-b from-info to-accent font-bold text-base-100 text-shadow-sm shadow-xl";

  return (
    <button className={`${defaultClasses} ${fontClasses} ${sizeClasses} ${roundedClasses} ${colorClasses} ${widthClasses} text-${textSize} ${className}`}>
      {text}
    </button>
  );
}

export default ButtonPrimary;