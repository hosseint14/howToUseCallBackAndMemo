import { useMemo } from "react";

const List = (props) => {
  const { items } = props;

  const soretdList = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {soretdList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
