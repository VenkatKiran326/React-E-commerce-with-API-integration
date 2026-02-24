import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Featured from "./Components/Featured";
import DbDetails from "./Components/DbDetails";
import ShopPage from "./Components/ShopPage";
import ShopItems from "./Components/ShopItems";
import ShopItemDetails from "./Components/ShopItemDetails";
import Productsgrid from "./Components/Productsgrid";
// import Blog from "./Components/Blog";
import Pages from "./Components/Pages";
import Buy from "./Components/BuyDetails";

// Lazy Loading
const LazyBlog=React.lazy(()=>import('./Components/Blog'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/featured" element={<Featured />} />
          <Route path="/featured/:id" element={<DbDetails />} />

          <Route path="/shopnow" element={<ShopPage />} />
          <Route path="/shopnow/:id" element={<ShopItemDetails/>}/>

          <Route path="/productsgrid" element={<Productsgrid/>}/>

          {/* <Route path="/blog" element={<Blog/>}/> */}

{/* Lazy Loading - create a new .js file in build  */}
          <Route path="/blog" element={<Suspense fallback="Loading..."><LazyBlog/></Suspense>}/>

          <Route path="/pages" element={<Pages/>}/>
          <Route path="/buy" element={<Buy/>}/>


        </Routes>
      </BrowserRouter>

      {/* <Route path="/aura" element={<Auth />}>
            <Route path="signin" element={<Signnin />} />
            <Route path="signup" element={<Signup />} />
            {/* <Route path="dashboard" element={<Dashboard/>}/>  </Route> 

          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<DbDetails />} />
          <Route path="*" element={<h2>404 Error Path Not Found!</h2>} />
          */}
    </>
  );
}
export default App;
