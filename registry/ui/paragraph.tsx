import React from "react";

interface ParagraphProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className,
  style,
  onClick,
}) => {
  return (
    <p className={className} style={style} onClick={onClick}>
      {text}
    </p>
  );
};

export default Paragraph;
