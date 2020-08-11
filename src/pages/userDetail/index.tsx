import React from "react";
import { useParams } from "react-router-dom";
import useSingleUser from "../../hooks/useSingleUser";
import { Container, TopSection, Image, Info, Summary } from "./styles";

const UserDetails: React.FC = () => {
  const { userId } = useParams();
  const user = useSingleUser(userId);

  return (
    <Container>
      <h1>User Details</h1>
      <React.Fragment>
        <TopSection>
          <Image src={require("../../static/avatar.jpeg")} alt="Avatar" />
          <div className="row">
            <p className="fullname">
              {user.first_name} {user.last_name}
            </p>
            <p className="gender">{user.gender}</p>
          </div>
        </TopSection>

        <Info>
          <p className="email">
            <span role="img" aria-label="icon">
              ✉
            </span>{" "}
            {user.email}
          </p>
          <p className="phone">
            <span role="img" aria-label="icon">
              📞
            </span>{" "}
            {user.phone}
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
    </Container>
  );
};

export default UserDetails;
