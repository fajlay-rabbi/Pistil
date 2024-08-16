import { Button, Card, Col, Row, Divider } from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Step from "../../shared/Steps";
import "./serviceLayout.scss";
import Service from "../UI/service/Service";
import Medium from "../UI/Medium/Medium";
import DoctorAvatar from "../../../assets/doctor_pic.png";
import Specialist from "../UI/Specialist/Specialist";
import { useEffect, useState } from "react";
import Bar from "../UI/BarComponent/Bar";
import MyCalendar from "../UI/Calender/Calender";
import Schedule from "../UI/Schedule/Schedule";
import AvailableTime from "../UI/AvailableTime/AvailableTime";
import Slots from "../UI/Slots/Slots";
import UserSelection from "../UI/UserSelection/UserSelection";
import Wallet from "../UI/UserSelection/Wallet";
import useBookingInfo from "../../../hooks/useBookingInfo";


const ServiceLayout = () => {
  const [step, setStep] = useState(0);
  const [valid, setValiid] = useState(false);
  const { service, medium, date, schedule, availableTime } = useBookingInfo();

  const backPressHandler = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const forwardPressHandler = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const submitHandler = () => {
    console.log(
      "Service: " +
        service +
        " Medium: " +
        medium +
        " Date: " +
        date +
        " Time: " +
        schedule +
        " Available: " +
        availableTime
    );
  };

  useEffect(() => {
    if (step === 0) {
      if (service && medium) {
        setValiid(true);
      } else {
        setValiid(false);
      }
    } else if (step === 1) {
      if (date && schedule && availableTime) {
        setValiid(true);
      } else {
        setValiid(false);
      }
    }
  }, [service, medium, date, schedule, availableTime, step]);

  return (
    <div className="service mt-50 container">
      <Row gutter={[30, 30]}>
        <Col xs={24} lg={18}>
          <Card>
            <div className="steps">
              <Step steps={step} />
            </div>
            <Divider />

            {step === 0 && (
              <>
                <Service />
                <Divider />
                <Medium />
                <p className="nb">
                  <span>*Note: </span>
                  You will lose your selected slots below if you change the
                  service or medium.
                </p>
              </>
            )}

            {step === 1 && (
              <>
                <Bar service={service} medium={medium} />
                <MyCalendar />
                <Schedule />
                <AvailableTime />
                {schedule && availableTime && (
                  <Slots
                    date={date}
                    schedule={schedule}
                    availableTime={availableTime}
                  />
                )}
              </>
            )}

            {step >= 2 && (
              <>
                <UserSelection service={service} medium={medium} />
                <Slots
                  date={date}
                  schedule={schedule}
                  availableTime={availableTime}
                />
              </>
            )}
          </Card>
          {step >= 2 && <Wallet />}

          {step >= 2 && (
            <div className="btn-group">
              {step >= 2 && (
                <div className="wallet-warining">
                  <InfoCircleOutlined className="infoIcon" />
                  <p>
                    <span>*Please Note: </span>
                    Our 24 hour rescheduling policy
                  </p>
                </div>
              )}

              <div className="btns">
                <Button
                  className="action-btn"
                  type="text"
                  icon={<ArrowLeftOutlined />}
                  iconPosition="star"
                  onClick={backPressHandler}
                >
                  back
                </Button>
                <Button
                  className="action-btn"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={submitHandler}
                >
                  Pay and confirm
                </Button>
              </div>
            </div>
          )}

          {step < 2 && (
            <div className="btn-group">
              <div className="btns">
                <Button
                  className="action-btn"
                  type="text"
                  icon={<ArrowLeftOutlined />}
                  iconPosition="star"
                  onClick={backPressHandler}
                >
                  back
                </Button>
                <Button
                  className="action-btn mb-40"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  onClick={forwardPressHandler}
                  disabled={!valid}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </Col>
        <Col xs={24} lg={6}>
          <Card>
            <div className="doctor-details">
              <img src={DoctorAvatar} alt="Our Doctor" />
              <p className="doctor-name">László Cintia</p>
              <div className="doctor-deg">
                <Specialist name={"Gynaecologist"} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="pricing">
                <p>
                  Starting from: <span>RM180</span>
                </p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceLayout;
