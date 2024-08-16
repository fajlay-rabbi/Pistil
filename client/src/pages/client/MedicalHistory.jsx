import {
  AimOutlined,
  AppleOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  HarmonyOSOutlined,
  HighlightOutlined,
  MailOutlined,
  MinusOutlined,
  PhoneOutlined,
  PlusOutlined,
  StopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Divider,
  Select,
  DatePicker,
  Input,
  Radio,
  Row,
  Col,
  Checkbox,
  Button,
} from "antd";
const { TextArea } = Input;
import "./medicalHistory.scss";
import GenderIcon from "../../assets/gender.png";
import { useState } from "react";

const MedicalHistory = () => {
  const [numPregnancies, setNumPregnancies] = useState(0);
  const [births, setBirths] = useState(0);
  const [miscarriage, setMiscarriage] = useState(0);
  const [abortions, setAbortions] = useState(0);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="medical-history-section">
      <div className="white-card">
        <div className="medical-title">
          <h2 className="txt-green">Patient Information</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>
        <div className="medical-details">
          <div className="details-col-1">
            <p className="txt-green">Name</p>
            <div className="flex-gap mt-10">
              <UserOutlined className="icon" />
              <p className="txt-bold-green">Jane Cooper</p>
            </div>
          </div>

          <Divider className="divider" type="vertical" />

          <div className="details-col-2">
            <p className="txt-green">Gender</p>
            <div className="flex-gap mt-10">
              <img src={GenderIcon} className="icon" />
              <p className="txt-bold-green">Female</p>
            </div>
          </div>

          <Divider className="divider" type="vertical" />

          <div className="details-col-3">
            <p className="txt-green">Phone Number</p>
            <div className="flex-gap mt-10">
              <PhoneOutlined className="icon" />
              <p className="txt-bold-green">+60 234586709</p>
            </div>
          </div>

          <Divider className="divider" type="vertical" />

          <div className="details-col-4">
            <p className="txt-green">Email Address</p>
            <div className="flex-gap mt-10">
              <MailOutlined className="icon" />
              <p className="txt-bold-green">user@pistil.io</p>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div>
                <p className="my-txt">Preferred Pronouns</p>
                <Select
                  className="input mt-10 f-width gender-input"
                  defaultValue="He/Him"
                  prefixCls="gender-icon"
                  style={{
                    width: 120,
                  }}
                  size="large"
                  options={[
                    {
                      value: "he/him",
                      label: "He/Him",
                    },
                    {
                      value: "she/her",
                      label: "She/Her",
                    },
                  ]}
                />
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div>
                <p className="my-txt">Date of Birth</p>
                <DatePicker
                  size="large"
                  className="input mt-10 f-width"
                  onChange={onChange}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="mt-30">
          <div>
            <p className="txt-bold-green mb-10">
              Address<sup>*</sup>
            </p>
            <TextArea
              className="f-width txt-area"
              rows={4}
              placeholder="Address"
              maxLength={6}
              value={"123 Main St, USA"}
            />
          </div>
        </div>
      </div>
      {/* emergency contact */}
      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Emergency Contact</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="medical-details">
          <div className="details-col-1">
            <p className="txt-green">Name</p>
            <div className="flex-gap mt-10">
              <UserOutlined className="icon" />
              <p className="txt-bold-green">Firdaus Juanda</p>
            </div>
          </div>

          <Divider className="divider" type="vertical" />

          <div className="details-col-2">
            <p className="txt-green">Relationship to Patient</p>
            <div className="flex-gap mt-10">
              <HarmonyOSOutlined className="icon" />
              <p className="txt-bold-green">Married</p>
            </div>
          </div>

          <Divider className="divider" type="vertical" />

          <div className="details-col-3">
            <p className="txt-green">Phone Number</p>
            <div className="flex-gap mt-10">
              <PhoneOutlined className="icon" />
              <p className="txt-bold-green">+60 234586709</p>
            </div>
          </div>
        </div>
      </div>

      {/* medical history */}

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Medical History</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-40">
          <Row gutter={[24, 24]} align={"middle"}>
            <Col xs={24} md={12}>
              <label className="my-txt">
                Primary Care Physician's Name (if applicable)
              </label>
              <Input
                className="input mt-5 f-width"
                size="large"
                prefix={<UserOutlined className="icon" />}
                placeholder="Email"
                type="email"
                value={"Dr. Elyana"}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">
                Date of Last Menstrual Period (LMP)
              </label>
              <DatePicker size="large" className="dateInput mt-5 f-width" />
            </Col>
          </Row>

          <div className="mt-20">
            <Row gutter={[24, 24]} align={"middle"}>
              <Col xs={24} md={12}>
                <label className="my-txt">Are you pregnant?</label>
                <br />
                <Radio.Group
                  name="radiogroup"
                  className="mt-5 flex gap-30"
                  defaultValue={1}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Col>

              <Col xs={24} md={12}>
                <label className="my-txt">How many weeks along?</label>
                <Select
                  className="input f-width mt-5 gender-input"
                  defaultValue="4 weeks"
                  prefixCls="gender-icon"
                  style={{
                    width: 150,
                  }}
                  size="large"
                  options={[
                    {
                      value: "4 weeks",
                      label: "4 weeks",
                    },
                    {
                      value: "5 weeks",
                      label: "5 weeks",
                    },
                  ]}
                />
              </Col>
            </Row>
          </div>

          <div className="mt-20">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12} lg={6}>
                <div className="flex-column gap-10">
                  <label className="my-txt">No. of pregnancies</label>
                  <div className="control-input-wrapper">
                    <div className="control-input flex">
                      <MinusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          if (numPregnancies > 0) {
                            let num = numPregnancies - 1;
                            setNumPregnancies(num);
                          }
                        }}
                      />
                      <p className="txt-bold-green">{numPregnancies}</p>
                      <PlusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          let num = numPregnancies + 1;
                          setNumPregnancies(num);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <div className="flex-column gap-10">
                  <label className="my-txt">No. of live births</label>
                  <div className="control-input-wrapper">
                    <div className="control-input flex">
                      <MinusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          if (births > 0) {
                            let num = births - 1;
                            setBirths(num);
                          }
                        }}
                      />
                      <p className="txt-bold-green">{births}</p>
                      <PlusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          let num = births + 1;
                          setBirths(num);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <div className="flex-column gap-10">
                  <label className="my-txt">No. of miscarriages</label>
                  <div className="control-input-wrapper">
                    <div className="control-input flex">
                      <MinusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          if (miscarriage > 0) {
                            let num = miscarriage - 1;
                            setMiscarriage(num);
                          }
                        }}
                      />
                      <p className="txt-bold-green">{miscarriage}</p>
                      <PlusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          let num = miscarriage + 1;
                          setMiscarriage(num);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <div className="flex-column gap-10">
                  <label className="my-txt">No. of abortions</label>
                  <div className="control-input-wrapper">
                    <div className="control-input flex">
                      <MinusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          if (abortions > 0) {
                            let num = abortions - 1;
                            setAbortions(num);
                          }
                        }}
                      />
                      <p className="txt-bold-green">{abortions}</p>
                      <PlusOutlined
                        className="control-input-icon"
                        onClick={() => {
                          let num = abortions + 1;
                          setAbortions(num);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-20">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <label className="my-txt">
                  Any history of gynecological conditions (e.g., PCOS,
                  endometriosis, fibroids)
                </label>
                <br />
                <Input
                  className="input mt-5 f-width"
                  size="large"
                  value={"None"}
                  prefix={<FileTextOutlined className="icon" />}
                />
              </Col>

              <Col xs={24} md={12}>
                <label className="my-txt">
                  Allergies (medications, latex, etc.)
                </label>
                <br />
                <Input
                  className="input txt-bold mt-5 f-width"
                  size="large"
                  value={"Penicillin"}
                  prefix={<FileTextOutlined className="icon" />}
                />
              </Col>
            </Row>
          </div>

          <div className="mt-20">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <label className="my-txt">
                  Current medications (including birth control)
                </label>
                <br />
                <Input
                  className="input mt-5 f-width"
                  size="large"
                  value={"Birth Control Pills"}
                  prefix={<FileTextOutlined className="icon" />}
                />
              </Col>

              <Col xs={24} md={12}>
                <label className="my-txt">
                  Current medications (including birth control)
                </label>
                <br />
                <Input
                  className="input mt-5 f-width"
                  size="large"
                  value={"Appendectomy"}
                  prefix={<FileTextOutlined className="icon" />}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Family Medical History</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-20">
          <label className="my-txt">
            Family history of breast cancer<sup>*</sup>
          </label>
          <br />
          <Radio.Group name="radiogroup" className="mt-20" defaultValue={1}>
            <Radio className="txt-bold" value={1}>
              Yes
            </Radio>
            <Radio className="txt-bold" value={2}>
              No
            </Radio>
          </Radio.Group>
        </div>

        <div className="mt-20">
          <label className="my-txt">
            Family history of ovarian cancer<sup>*</sup>
          </label>
          <br />
          <Radio.Group name="radiogroup" className="mt-20" defaultValue={1}>
            <Radio className="txt-bold" value={1}>
              Yes
            </Radio>
            <Radio className="txt-bold" value={2}>
              No
            </Radio>
          </Radio.Group>
        </div>

        <div className="mt-20">
          <label className="txt-bold-green">
            Family history of other gynecological conditions
          </label>
          <br />
          <Input
            className="input mt-5 f-width"
            size="large"
            value={"Endometriosis"}
            prefix={<FileTextOutlined className="icon" />}
          />
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Socialand Lifestyle</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-30">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <label className="my-txt">Marital status</label>
              <Select
                className="input f-width mt-10 gender-input"
                defaultValue="Married"
                prefixCls="gender-icon"
                style={{
                  width: 120,
                }}
                size="large"
                options={[
                  {
                    value: "Married",
                    label: "Married",
                  },
                  {
                    value: "Unmarried",
                    label: "Unmarried",
                  },
                ]}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">Sexual orientation</label>
              <Select
                className="input f-width mt-10 gender-input"
                defaultValue="Heterosexual"
                prefixCls="gender-icon"
                style={{
                  width: 120,
                }}
                size="large"
                options={[
                  {
                    value: "Heterosexual",
                    label: "Heterosexual",
                  },
                  {
                    value: "Unmarried",
                    label: "Unmarried",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12}>
              <label className="my-txt">
                Are you sexually active? (If yes, are you using contraception?)
              </label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Yes, using condoms"}
                prefix={<FileTextOutlined className="icon" />}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">Tobacco use (smoking, vaping)</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"No"}
                prefix={<StopOutlined className="icon" />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12}>
              <label className="my-txt">Alcohol consumption</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Socially"}
                prefix={<FileTextOutlined className="icon" />}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">Recreational drug use</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"No"}
                prefix={<HighlightOutlined className="icon" />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12}>
              <label className="my-txt">Exercise routine</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"3 times a week"}
                prefix={<AimOutlined className="icon" />}
              />
            </Col>

            <Col xs={24} md={12}>
              <label className="my-txt">Diet and nutrition</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Balanced diet"}
                prefix={<AppleOutlined className="icon" />}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Menstrual History</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-20">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <label className="my-txt">Start Date</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"14 Oct 2023"}
                prefix={<CalendarOutlined className="icon" />}
              />
            </Col>
            <Col xs={24} md={12}>
              <label className="my-txt">End Date</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"14 Oct 2023"}
                prefix={<CalendarOutlined className="icon" />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12}>
              <label className="my-txt">
                Average length of menstrual cycle<sup>*</sup>
              </label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"28 days"}
                prefix={<ClockCircleOutlined className="icon" />}
              />
            </Col>
            <Col xs={24} md={12}>
              <label className="my-txt">
                Duration of menstrual flow<sup>*</sup>
              </label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"28 days"}
                prefix={<ClockCircleOutlined className="icon" />}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12}>
              <label className="my-txt">Any menstrual irregularities</label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"No"}
                prefix={<FileTextOutlined className="icon" />}
              />
            </Col>
            <Col xs={24} md={12}>
              <label className="my-txt">
                History of painful periods (dysmenorrhea)
              </label>
              <Input
                className="input mt-10 f-width"
                size="large"
                value={"Yes"}
                prefix={<FileTextOutlined className="icon" />}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Contraception and Family Planning</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>
        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12}>
            <label className="my-txt">
              Current contraception method (if applicable)
            </label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"Birth Control Pills"}
              prefix={<FileTextOutlined className="icon" />}
            />
          </Col>

          <Col xs={24} md={12}>
            <label className="my-txt">Future family planning goals</label>
            <Input
              className="input mt-10 f-width"
              size="large"
              value={"Planning for a second child"}
              prefix={<FileTextOutlined className="icon" />}
            />
          </Col>
        </Row>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Sexual Health</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-20">
          <label className="txt-bold-green">
            Any concerns or questions related to sexual health
          </label>
          <Input
            className="input mt-10 f-width"
            size="large"
            value={"No"}
            prefix={<FileTextOutlined className="icon" />}
          />
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Current Symptoms/Concerns</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-20">
          <label className="txt-bold-green">Reason for your visit today</label>
          <Input
            className="input mt-10 f-width"
            size="large"
            value={"Annual check-up"}
            prefix={<FileTextOutlined className="icon" />}
          />
        </div>
      </div>

      <div className="white-card mt-20">
        <div className="medical-title">
          <h2 className="txt-green">Additional Comments</h2>
          <p className="txt-color">Please fill the required fields.</p>
        </div>

        <div className="mt-30">
          <p className="txt-bold-green">
            Any other information you'd like to share or specific concerns you
            have*
          </p>
          <TextArea
            className="mt-5"
            value={"No additional comments"}
            rows={8}
          />
        </div>
      </div>

      <div className="mt-30">
        <div className="flex f-width justify align-center">
          <div>
            <h3 className="mb-20">Authorization and Consent</h3>
            <Checkbox checked>
              <p>I would like to receive contents and offers by PISTIL.</p>
            </Checkbox>
          </div>

          <Button
            className="form-btn lg-btn right-btn"
            type="primary"
            icon={<ArrowRightOutlined />}
            iconPosition="end"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
