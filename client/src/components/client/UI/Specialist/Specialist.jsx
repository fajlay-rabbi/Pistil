import "./specialist.scss";
import { Badge } from "antd";

const Specialist = ({ name }) => {
  return (
    <div className="specialist">
      <Badge color={"#13B4B3"} />
      <span>{name}</span>
    </div>
  );
};

export default Specialist;
