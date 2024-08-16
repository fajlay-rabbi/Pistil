import { Button, Col, Row, Select } from "antd";
import "./preferencesComponent.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

const PreferencesComponent = () => {
  return (
    <div>
      <h2 className="txt-green mt-10">Preferences</h2>
      <div className="wallet-warining mt-10">
        <p>
          <span>Note:* </span>
          To disallow a particular client from booking a session with you,
          please email us at <span className="primary-txt">
            info@pistilio
          </span>{" "}
          with their user ID and name.
        </p>
      </div>

      <Row gutter={[24, 24]} className="mt-20">
        <Col xs={24} md={12} lg={12}>
          <label className="my-txt">Notice Period for New Bookings</label>
          <Select
            className="input mt-5 f-width"
            prefixCls="select-radius"
            defaultValue="24 hours"
            size="large"
            options={[
              {
                value: "24 hours",
                label: "24 hours",
              },
              {
                value: "12 hours",
                label: "12 hours",
              },
            ]}
          />
        </Col>

        <Col xs={24} md={12} lg={12}>
          <label className="my-txt">My Time Zone</label>
          <Select
            className="input mt-5 f-width"
            prefixCls="select-radius"
            defaultValue="(GMT+08:00) Asia, Singapore"
            size="large"
            options={[
              {
                value: "(GMT+08:00) Asia, Singapore",
                label: "(GMT+08:00) Asia, Singapore",
              },
              {
                value: "(GMT+06:00) Asia, Singapore",
                label: "(GMT+06:00) Asia, Usa",
              },
            ]}
          />
        </Col>
      </Row>
      <Button
        className="update-btn mt-50 btn-left"
        type="primary"
        icon={<ArrowRightOutlined />}
        iconPosition="end"
      >
        Update
      </Button>
    </div>
  );
};

export default PreferencesComponent;
