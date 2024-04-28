import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Authentication/Login";
import Signin from "./pages/Authentication/Signin";
import WishList from "./pages/WishList";
import UserProfille from "./pages/UserProfile/UserProfille";
import UserEdit from "./pages/UserProfile/UserEdit";
import UserGoalSetting from "./pages/UserProfile/UserGoalSetting";
import UserMealPlanning from "./pages/UserProfile/UserMealPlanning";
import WeeklySpecial from "./pages/WeeklySpecial";
import BolgDetail from "./pages/BolgDetail";
import CheckOut from "./pages/CheckOut";

const App = () => {
 // Check if user is logged in based on localStorage data
 return (
  <BrowserRouter>
   <Routes>
    <Route
     path="/"
     element={
      <ProtectedRoute>
       <Home />
      </ProtectedRoute>
     }
    />
    <Route
     path="/wishlist"
     element={
      <ProtectedRoute>
       <WishList />
      </ProtectedRoute>
     }
    />
    <Route
     path="/detail"
     element={
      <ProtectedRoute>
       <ProductDetail />
      </ProtectedRoute>
     }
    />
    <Route
     path="/blog-detail"
     element={
      <ProtectedRoute>
       <BolgDetail />
      </ProtectedRoute>
     }
    />
    <Route
     path="/cart"
     element={
      <ProtectedRoute>
       <Cart />
      </ProtectedRoute>
     }
    />
    <Route
     path="/checkout"
     element={
      <ProtectedRoute>
       <CheckOut />
      </ProtectedRoute>
     }
    />
    <Route
     path="/weekly-special"
     element={
      <ProtectedRoute>
       <WeeklySpecial />
      </ProtectedRoute>
     }
    />

    <Route
     path="/user-profile"
     element={
      <ProtectedRoute>
       <UserProfille />
      </ProtectedRoute>
     }
    />
    <Route
     path="/user-goal-setting"
     element={
      <ProtectedRoute>
       <UserGoalSetting />
      </ProtectedRoute>
     }
    />
    <Route
     path="/user-meal-planing"
     element={
      <ProtectedRoute>
       <UserMealPlanning />
      </ProtectedRoute>
     }
    />
    <Route
     path="/user-edit"
     element={
      <ProtectedRoute>
       <UserEdit />
      </ProtectedRoute>
     }
    />

    <Route
     path="*"
     element={
      <ProtectedRoute>
       <Navigate to="/" />
      </ProtectedRoute>
     }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signin />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;

const ProtectedRoute = ({ children }) => {
//  const isLoggedIn = localStorage.getItem("formData");
 return <>{children}</>;
};
