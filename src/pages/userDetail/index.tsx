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
            <p className="fullname" data-testid="fullname">
              {user.first_name} {user.last_name}
            </p>
            <p className="gender" data-testid="gender">{user.gender}</p>
          </div>
        </TopSection>

        <Info>
          <div className="email">
            <span role="img" aria-label="icon" data-testid="email-icon">
              ✉
            </span>{" "}
            <p data-testid="email">{user.email}</p>
          </div>
          <div className="phone">
            <span role="img" aria-label="icon">
              📞
            </span>{" "}
            <p data-testid="phone">{user.phone}</p>
          </div>
        </Info>

        <Summary>
          <h3 className="title">Summary</h3>

          <p className="summary" data-testid="summary">
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
