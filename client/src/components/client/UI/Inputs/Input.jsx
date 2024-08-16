import { Input } from "antd";

const EmailInput = ({ icon: Icon, type, placeholder }) => {
  return (
    <>
      <Input
        size="large"
        type={type}
        className="input form-input"
        placeholder={placeholder}
        prefix={Icon ? <Icon className="icon" /> : null}
      />
    </>
  );
};

export default EmailInput;
