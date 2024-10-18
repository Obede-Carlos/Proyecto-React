import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;
  return <div className="card">{children}</div>;
}

interface CardBodyProps {
  header: string;
  title: string;
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { header, title, text } = props;
  return (
    <>
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </>
  );
}

export default Card;
