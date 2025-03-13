import styled from "styled-components";

const RegistrationArea = styled.div`
  background: #666;
`;

const RegistrationImage = styled.div`
  background-image: url("/public/image-login-area.svg");
  background-size: cover;
  height: 100vh;
  width: 50vw;
`;

export default function Registration() {
  return (
    <>
      <RegistrationArea>Registration</RegistrationArea>
      <RegistrationImage />
    </>
  );
}
