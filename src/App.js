import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

export default App;

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
// function App() {
//   return (
//     <div className='app'>
//     <Navbar/>
//     <div className='sections'>
//       <Header />
//       <Card />
//       <Project />
//       <Contact />
//     </div>
//     </div>
//   );
// }

// export default App;
