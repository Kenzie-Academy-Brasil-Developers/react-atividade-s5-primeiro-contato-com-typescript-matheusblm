interface CardProps {
  name: string;
  hobby: string;
  age: number;
}
const Card = ({ name, hobby, age }: CardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{hobby}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default Card;
