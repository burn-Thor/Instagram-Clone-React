import Feed from "./Feed";

const Home = ( {user} ) => {
 
    return (
      <div>
       <h1>{user}'s Home</h1>
       <Feed />
      </div>
    );
  };
  
  export default Home;