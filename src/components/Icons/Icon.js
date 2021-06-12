const Icon = (props) => {
  const { color, size } = props;

  const styles = {
    fill: color,
  };

  const usedSize = size || '24';

  return (
    <svg
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      width={usedSize}
      height={usedSize}
      viewBox={`0 0 24 24`}
    >
      {props.children}
    </svg>
  );
};

export default Icon;
