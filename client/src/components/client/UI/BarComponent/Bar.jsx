import "./Bar.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

const Bar = ({ service, medium }) => {
  return (
    <div className="bar-wrapper">
      <div className="bar-inner">
        <p>{service}</p>
        <ArrowRightOutlined />
        <p>{medium}</p>
      </div>
    </div>
  );
};

export default Bar;
