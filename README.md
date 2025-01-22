## step 1 Create project
```bash
npm create vite .
npm run install
npm run dev
```

## step 2 push project to github
```bash
git init
git add .
git committ -m "init"
git push
```

### when update code
```bash
git add .
git commit -m "init"
git push
```
## step 3 install React Router
```bash
npm i react-router
```
```jsx
// rfce
import { Link, Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path ="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<h1>Dashboard page</h1>} />
          <Route path="manage" element={<h1>Manage page</h1>} />
          <Route path="setting" element={<h1>Setting page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}
export default AppRoutes;

## step4 Global State with Zustand
```bash
npm install zustand
```
