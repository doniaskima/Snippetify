import styled from 'styled-components';

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  z-index: -1;

  &:hover {
    width: 14em;
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 60px;
  height: 60px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(2) {
    border-radius: 0;
  }

  &:nth-child(3) {
    border-top-right-radius: 10px;
    border-top-left-radius: 0;
  }

  &:nth-child(4) {
    border-radius: 0;
  }

  &:nth-child(5) {
    border-radius: 0;
  }

  &:nth-child(6) {
    border-radius: 0;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 0;
  }

  &:nth-child(8) {
    border-radius: 0;
  }

  &:nth-child(9) {
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0;
  }
`;

const InstagramIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #cc39a4;
`;

const TwitterIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #03a9f4;
`;

const DribbleIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #ffb5d2;
`;

const CodepenIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
`;

const UiverseIcon = styled.svg`
  position: absolute;
  margin-left: 0.2em;
  margin-top: 0.2em;
  opacity: 0;
  transition: 0.2s ease-in-out;
`;

const DiscordIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #8c9eff;
`;

const GithubIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
`;

const TelegramIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #29b6f6;
`;

const RedditIcon = styled.svg`
  opacity: 0;
  transition: 0.2s ease-in-out;
`;

const Text = styled.p`
  opacity: 1;
  z-index: 1;
`;

const MainBack = styled.div`
  position: absolute;
  border-radius: 10px;
  transform: rotate(90deg);
  width: 11em;
  height: 11em;
  background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
  z-index: -2;
  box-shadow: inset 0px 0px 180px 5px #ffffff;

  &:hover {
    opacity: 0;
  }
`;

const SocialIcon = () => {
  return (
    <MainContainer>
      <Card>
        <InstagramIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="instagram"
        >
          {/* Instagram icon paths */}
        </InstagramIcon>
      </Card>
      <Card>
        <TwitterIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="twitter"
        >
          {/* Twitter icon paths */}
        </TwitterIcon>
      </Card>
      <Card>
        <DribbleIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="dribble"
        >
          {/* Dribbble icon paths */}
        </DribbleIcon>
      </Card>
      <Card>
        <CodepenIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="codepen"
        >
          {/* CodePen icon paths */}
        </CodepenIcon>
      </Card>
      <Card>
        <UiverseIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
          className="uiverse"
        >
          {/* Uiverse icon paths */}
        </UiverseIcon>
      </Card>
      <Card>
        <DiscordIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="discord"
        >
          {/* Discord icon paths */}
        </DiscordIcon>
      </Card>
      <Card>
        <GithubIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="github"
        >
          {/* GitHub icon paths */}
        </GithubIcon>
      </Card>
      <Card>
        <TelegramIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="telegram"
        >
          {/* Telegram icon paths */}
        </TelegramIcon>
      </Card>
      <Card>
        <RedditIcon
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className="reddit"
        >
          {/* Reddit icon paths */}
        </RedditIcon>
      </Card>
      <Text>HOVER<br /><br />FOR<br /><br />SOCIAL</Text>
      <MainBack />
    </MainContainer>
  );
};

export default SocialIcon;
