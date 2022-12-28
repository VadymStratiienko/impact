import styled from "styled-components";
import { Container, SectionHeader } from "../../Assets";

const ContainerContact = styled(Container)`
  display: block;
`;
const Wrapper = styled.div`
  @media (min-width: 992px) {
    --bs-gutter-x: 0;
    --bs-gutter-y: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  > * {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const WrapInfo = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
`;
const InfoContainer = styled.div`
  background-color: var(--color-primary);
  height: 100%;
  padding: 20px;
  border-radius: 10px 0 0 10px;
  box-shadow: 0px 2px 25px rgb(0 0 0 / 10%);
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
`;
const InfoItem = styled.div`
  width: 100%;
  background-color: #009282;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  i {
    font-size: 20px;
    color: #fff;
    float: left;
    width: 44px;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    margin-right: 15px;
  }
  :hover i {
    color: var(--color-primary);
    background: #fff;
  }
`;

const Info = styled.div`
  h4 {
    padding: 0;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  p {
    padding: 0;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
const WrapForm = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 0 10px 10px 0;
`;
const BlockForm = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const BlockInput = styled.div`
  padding-bottom: 8px;
  .email {
    padding-bottom: 8px;
    @media (min-width: 768px) {
      margin-top: 0 !important;
    }
  }
  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;
const FormGroup = styled.div`
  padding-bottom: 8px;
  margin-top: 1rem !important;

  textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    min-height: calc(1.5em + 0.75rem + 2px);
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const BlockMessage = styled.div`
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
`;
const Loading = styled.div`
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  ::before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #059652;
    border-top-color: #fff;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
`;
const ErrorMessage = styled.div`
  display: none;
  color: #fff;
  background: #df1529;
  text-align: left;
  padding: 15px;
  font-weight: 600;
  br + br {
    margin-top: 25px;
  }
  :active {
    display: block;
  }
`;
const SentMessage = styled.div`
  display: none;
  color: #fff;
  background: #059652;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  :active {
    display: block;
  }
`;
const ButtonBlock = styled.div`
  text-align: center !important;
  button[type="submit"] {
    background: var(--color-primary);
    border: 0;
    padding: 14px 45px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }
  button[type="submit"]:hover {
    background: rgba(0, 131, 116, 0.8);
  }

  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Cantact = () => {
  return (
    <section id="contact">
      <ContainerContact>
        <SectionHeader>
          <h2>Contact</h2>
          <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
            porro nihil id ratione ea sunt quis dolorem dolore earum
          </p>
        </SectionHeader>
        <Wrapper>
          <WrapInfo>
            <InfoContainer>
              <InfoItem>
                <i className="bi bi-geo-alt"></i>
                <Info>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </Info>
              </InfoItem>
              <InfoItem>
                <i className="bi bi-envelope"></i>

                <Info>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </Info>
              </InfoItem>
              <InfoItem>
                <i className="bi bi-phone"></i>
                <Info>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </Info>
              </InfoItem>
              <InfoItem>
                <i className="bi bi-clock"></i>
                <Info>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </Info>
              </InfoItem>
            </InfoContainer>
          </WrapInfo>
          <WrapForm>
            <Form method="post" role="form">
              <BlockForm>
                <BlockInput>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </BlockInput>
                <BlockInput className="email">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </BlockInput>
                <FormGroup>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <textarea
                    name="message"
                    id=""
                    rows={7}
                    placeholder="Message"
                  ></textarea>
                </FormGroup>
              </BlockForm>
              <BlockMessage>
                <Loading />
                <ErrorMessage>TypeError: Failed to fetch</ErrorMessage>
                <SentMessage>
                  Your message has been sent. Thank you!
                </SentMessage>
              </BlockMessage>
              <ButtonBlock>
                <button type="submit">Send Message</button>
              </ButtonBlock>
            </Form>
          </WrapForm>
        </Wrapper>
      </ContainerContact>
    </section>
  );
};

export default Cantact;
