import "./app.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {

  const formatUser = (userName) => {
    `@${userName}`;
  };


  return (
    <section className="app">
      <TwitterFollowCard
        formatUsername={formatUser}
        userName={"spyed"}
        name={"Dimas Bautte"}
        avatar={"deviantart/spyed"}
      />
      <TwitterFollowCard
        formatUsername={formatUser}
        userName={"omidnikrah"}
        name={"omidnikrah Ber"}
        avatar={"dribbble/omidnikrah"}
      />
    </section>
  );
};

export default App;
