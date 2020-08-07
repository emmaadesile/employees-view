import React from "react";
import { useParams } from "react-router-dom";
import useSingleUser from "../../hooks/useSingleUser";
import { Container, TopSection, Image, Info, Summary } from "./styles";

const UserDetails = () => {
  const { userId } = useParams();
  const user = useSingleUser(userId);

  console.log(user);
  // const { first_name, last_name, gender, email, phone } = user;

  return (
    <Container>
      <h1>User Details</h1>

      {/* {user.map((singleUser, index) => ( */}
      <React.Fragment>
        <TopSection>
          <Image src={require("../../static/avatar.jpeg")} alt="Avatar" />
          <div className="row">
            <p className="fullname">Romeo Dudedin</p>
            <p className="gender">Male</p>
          </div>
        </TopSection>

        <Info>
          <p className="email">
            <span>✉</span> rduerdin@reddit.com
          </p>
          <p className="phone">
            <span>📞</span> 9384383253
          </p>
        </Info>

        <Summary>
          <h3 className="title">Summary</h3>

          <p className="summary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            delectus, quis temporibus, nemo quisquam est officiis cum natus,
            quidem sunt sapiente? Voluptate dolore quasi earum magni explicabo
            fugiat tempora odio?
          </p>
        </Summary>
      </React.Fragment>

      {/* ))} */}
    </Container>
  );
};

export default UserDetails;
