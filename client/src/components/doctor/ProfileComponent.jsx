import { Badge, Button, Checkbox, Col, Input, Row, Select } from "antd";
import "./profileComponent.scss";
import Doctor from "../../assets/av.png";
import {
  ArrowRightOutlined,
  CloseOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Flag from "../../assets/MY.png";
import TextArea from "antd/es/input/TextArea";

const ProfileComponent = () => {
  const [lang, setLang] = useState([]);
  const { Option } = Select;

  const countries = [
    {
      value: "malaysia",
      label: "Malaysia",
      imgSrc: Flag,
    },
    {
      value: "bangladesh",
      label: "Bangladesh",
      imgSrc: Flag,
    },
    {
      value: "usa",
      label: "USA",
      imgSrc: Flag,
    },
  ];
  const langHandler = (data, type) => {
    if (type === "minus") {
      const myLang = lang.filter((item) => item !== data);
      setLang(myLang);
    }
    if (type === "plus") {
      setLang((prev) => {
        if (!lang.includes(data)) {
          return [...prev, data];
        }
        return prev;
      });
    }
  };

  const regulations = [
    "Stress",
    "Anxiety (incl Social Anxiety)",
    "Low Moods or Depressions",
    "Anger Management",
    "Mood Instabliity",
    "Bipolar Disorders",
    "Borderline Personality Disorder (BPD)",
  ];

  const relationships = [
    "Relationship Issues",
    "Marriage or Couples Counselling",
    "Marriage Preparation",
    "Grief, Separation & Loss",
    "Parental Stress",
    "Caregiver  Stress",
    "Family Violence or Abuse",
    "Loneliness",
    "Intemacy & Sex-related issues",
    "Elderly Issues",
    "Family Relationships",
  ];

  const work = [
    "Academic & School Stress",
    "Work-related Stress or Burnout",
    "Performance Coaching",
    "Unemployment",
    "Harassment or Bullying",
    "Autism Spectrum Disorder (ASD)",
    "Specific Learning Disorder (Ex Dyslexis)",
  ];

  const personal = [
    "Self-esteem",
    "LGBTQ (Gender Identity & Sexual Orientation)",
    "Pregnancy-related issues",
    "Health-related issues",
    "Self-awareness & Growth",
    "Eastin Concerns or Body Image",
    "Existential & Identity",
    "Fears or Phobias",
    "Life Transitions",
    "Men's Mental Health",
  ];

  const other = [
    "Financial Stress",
    "Addictions",
    "Habit Change",
    "Cultural Adjustment",
    "Trauma",
    "OCD",
    "ADHD",
    "PTSD",
    "End of Life",
  ];

  const services = [
    "Individual",
    "Contraceptives",
    "STDS",
    "Family Planning",
    "Pregnancy",
    "Post Partum",
    "Perimenipause",
    "Menopause",
    "Cancer",
  ];

  const counselling = [
    "Video",
    "Audio",
    "Text-Based Chat",
    "In-person",
    "Home visit",
  ];

  return (
    <div>
      <div className="avatar-wrapper mt-40">
        <div className="avatar">
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="profile-name">
          <h3 className="txt-green">Randall Bernard</h3>
          <div className="spec-badge mt-5">
            <Badge color={"#E8900D"} />
            <p>Gynaecologist</p>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group">
              <label className="my-txt">
                First Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="firstName"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group">
              <label className="my-txt">
                Middle Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="middlename"
              />
            </div>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <div className="email-label-group">
              <label className="my-txt">
                Last Name<sup>*</sup>
              </label>
              <Input
                className="input"
                size="large"
                prefix={<UserOutlined className="icon" />}
                type="text"
                name="lastname"
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12} lg={12}>
            <div className="email-label-group">
              <label className="my-txt">Languages Spoken</label>
              <Select
                className="input f-width lang-input"
                defaultValue="Select Language"
                prefixCls="lang-icon"
                style={{
                  width: 120,
                }}
                size="large"
                options={[
                  {
                    value: "English",
                    label: "English",
                  },
                  {
                    value: "Spanish",
                    label: "Spanish",
                  },
                  {
                    value: "Bangla",
                    label: "Bangla",
                  },
                ]}
                onChange={(e) => {
                  langHandler(e, "plus");
                }}
              />

              <div className="lang-card-wrapper">
                {lang.map((data) => {
                  return (
                    <div key={data} className="lang-card">
                      <p>{data}</p>
                      <CloseOutlined
                        className="lang-icons"
                        onClick={() => {
                          langHandler(data, "minus");
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div className="email-label-group">
              <label className="my-txt">Gender</label>
              <Select
                className="input f-width gender-input"
                defaultValue="Male"
                prefixCls="gender-icon"
                style={{
                  width: 120,
                }}
                size="large"
                options={[
                  {
                    value: "male",
                    label: "Male",
                  },
                  {
                    value: "female",
                    label: "Female",
                  },
                ]}
                onChange={(e) => {
                  // setGender(e);
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="mt-50">
        <div className="medical-title">
          <h2 className="txt-green">Address</h2>
          <p className="txt-color txt-md">
            Address(es) for in-person sessions.(if applicable)
          </p>
        </div>

        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">Address Title</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">Address Line 1</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">Address Line 2</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">Landmark</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-20">
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">City</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
          <Col xs={24} md={12} lg={12}>
            <label className="my-txt">Postal Code</label>
            <Input
              className="input mt-5 f-width"
              size="large"
              prefix={<EnvironmentOutlined className="icon" />}
              placeholder="Type"
              type="text"
            />
          </Col>
        </Row>
        <div className="mt-20">
          <label className="my-txt">Country</label>
          <Select
            className="f-width mt-10 country"
            size="large"
            defaultValue="malaysia"
            style={{ width: 200 }}
          >
            {countries.map((country) => (
              <Option key={country.value} value={country.value}>
                <img
                  src={country.imgSrc}
                  alt={country.label}
                  style={{ width: 20, marginRight: 8 }}
                />
                {country.label}
              </Option>
            ))}
          </Select>
        </div>
        <Button
          className="form-btn mt-20 btn-left"
          type="primary"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
          Add Address
        </Button>
      </div>

      <div className="mt-120">
        <div className="medical-title">
          <h2 className="txt-green">Selected Option</h2>
          <p className="txt-color txt-md">
            What do you assist clients with (Please select the ones that apply
            to your practice)?
          </p>
        </div>

        <div className="mt-30">
          <p className="my-txt">Mood Regulation</p>
          <div className="mt-10 ">
            {regulations.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="mt-30">
          <p className="my-txt">Family and Relationship</p>
          <div className="mt-10 ">
            {relationships.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="mt-30">
          <p className="my-txt">Family and Relationship</p>
          <div className="mt-10 ">
            {work.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="mt-30">
          <p className="my-txt">Family and Relationship</p>
          <div className="mt-10 ">
            {personal.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="mt-30">
          <p className="my-txt">Family and Relationship</p>
          <div className="mt-10 ">
            {other.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <div className="mt-30">
          <p className="txt-bold-green txt-md">Anything else?</p>
          <TextArea className="mt-5" placeholder="Type here" rows={6} />
        </div>
      </div>

      <div className="mt-50">
        <div className="medical-title">
          <h2 className="txt-green">Further Details</h2>
          <p className="txt-color txt-md">
            Changes will be notified to Admin, who will acknowledge the changes
            made and update your profile from the backend, if required.
          </p>
        </div>
        <div className="mt-30">
          <p className="my-txt">What services are you able to provide?</p>
          <div className="mt-10 ">
            {services.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>
        <div className="mt-30">
          <p className="my-txt">
            What mediums are you able to use for counselling?
          </p>
          <div className="mt-10 ">
            {counselling.map((item, index) => {
              return (
                <Checkbox key={index} className="mbtl-10">
                  <p className="txt-bold-green">{item}</p>
                </Checkbox>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-50">
        <h2 className="txt-green">Description</h2>
        <div className="mt-30">
          <p className="txt-bold-green txt-md">Profile Description</p>
          <TextArea className="mt-5" placeholder="Type here" rows={6} />

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">City of Residence</label>
              <Input
                className="input mt-5 f-width"
                size="large"
                prefix={<EnvironmentOutlined className="icon" />}
                placeholder="Type"
                type="text"
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Country of Residence</label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Singapore"
                size="large"
                options={[
                  {
                    value: "Singapore",
                    label: "Singapore",
                  },
                  {
                    value: "Usa",
                    label: "Usa",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">
                Areas of Expertise/Specialisation
              </label>
              <Input
                className="input mt-5 f-width"
                size="large"
                prefix={<EnvironmentOutlined className="icon" />}
                placeholder="Type"
                type="text"
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Occupation</label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Singapore"
                size="large"
                options={[
                  {
                    value: "Singapore",
                    label: "Singapore",
                  },
                  {
                    value: "Usa",
                    label: "Usa",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Length of Experience (years)</label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="12"
                size="large"
                options={[
                  {
                    value: "12",
                    label: "12",
                  },
                  {
                    value: "11",
                    label: "11",
                  },
                ]}
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Medical Approaches (eg CBT)</label>
              <Input
                className="input mt-5 f-width"
                size="large"
                placeholder="Type"
                type="text"
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Current/Last Place of Work</label>
              <Input
                className="input mt-5 f-width"
                size="large"
                placeholder="Type"
                type="text"
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Educational Qualifications</label>
              <Input
                className="input mt-5 f-width"
                size="large"
                placeholder="Type"
                type="text"
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Professional Certifications</label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Select"
                size="large"
                options={[
                  {
                    value: "12",
                    label: "12",
                  },
                  {
                    value: "11",
                    label: "11",
                  },
                ]}
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">Professional Memberships</label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Select"
                size="large"
                options={[
                  {
                    value: "12",
                    label: "12",
                  },
                  {
                    value: "11",
                    label: "11",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[24, 24]} className="mt-20">
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">
                Do you work with any specific groups of people (eg industries,
                age groups etc)?
              </label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Select"
                size="large"
                options={[
                  {
                    value: "12",
                    label: "12",
                  },
                  {
                    value: "11",
                    label: "11",
                  },
                ]}
              />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <label className="my-txt">
                Are there are any clients that you prefer not to work with for
                personal reasons 
              </label>
              <Select
                className="input mt-5 f-width"
                prefixCls="select-radius"
                defaultValue="Select"
                size="large"
                options={[
                  {
                    value: "12",
                    label: "12",
                  },
                  {
                    value: "11",
                    label: "11",
                  },
                ]}
              />
            </Col>
          </Row>

          
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
