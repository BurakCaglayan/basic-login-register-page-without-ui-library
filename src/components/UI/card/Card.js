const Card = ({ header, content, footer }) => {
  return (
    <div className="card">
      {header}
      {content}
      {footer}
    </div>
  );
};

export default Card;
