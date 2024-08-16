import { Card, Divider } from "antd";
import "./userSelection.scss";

const Wallet = () => {
  return (
    <Card className="wallet-card">
      <div className="wallet-wrapper">
        <div className="wallet-slot1">
          <h2>Wallet</h2>
          <p>Current Balance</p>
        </div>

        <Divider type="vertical" />

        <div className="wallet-slot2">
          <p>
            Total : <span>RM 135</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Wallet;
