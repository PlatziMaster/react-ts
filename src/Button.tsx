import { useRef } from 'react';

interface PropsButton {
  title: string;
  sendPosition?: boolean;
  handleClick: any;
}

const Button = (props: PropsButton) => {
  const { title, handleClick, sendPosition } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (sendPosition) {
      handleClick(event, ref?.current?.getBoundingClientRect() );
    } else {
      handleClick(event);
    }
  }

  return (
    <div ref={ref}>
      <button onClick={handleClickButton}>{title}</button>
    </div>
  );
}

export default Button;