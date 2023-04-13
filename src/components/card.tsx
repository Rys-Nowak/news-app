type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  link: string;
};

function Card({ title, description, tags, link }: CardProps) {
  return (
    <a href={link} className="card">
      <h4>{title}</h4>
      <p>{description}</p>
    </a>
  );
}

export default Card;
