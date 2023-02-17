import {Box, CssBaseline, Toolbar } from "@mui/material";
import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../admin/components/navbar/Navbar";
import Sidebar from "../admin/components/sidebar/Sidebar";
import CategoryPageForm from "../admin/pages/CategoryPageForm";
import CoursePageForm from "../admin/pages/CoursePageForm";
import CoursePageList from "../admin/pages/CoursePageList";
import HomePage from "../admin/pages/HomePage";
import MethodPayPage from "../admin/pages/MethodPayPage";
import StudentPageForm from "../admin/pages/StudentPageForm";
import StudentPageList from "../admin/pages/StudentPageList";
import '../admin/pages/style.css'
import TeacherPageForm from "../admin/pages/TeacherPageForm";
import TeacherPageList from "../admin/pages/TeacherPageList";


const AdminRoutes = memo(() => {
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =() => window.document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar  container={container} drawerWidth = {drawerWidth} mobileOpen = {mobileOpen} handleDrawerToggle = {handleDrawerToggle}/>
      <Sidebar  container={container} drawerWidth = {drawerWidth} mobileOpen = {mobileOpen} handleDrawerToggle = {handleDrawerToggle}/>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage drawerWidth={drawerWidth} />} />
          <Route path="/cursos/crear" element={<CoursePageForm drawerWidth={drawerWidth}/>} />
          <Route path="/cursos/ver" element={<CoursePageList drawerWidth={drawerWidth}/>} />
          <Route path="/docentes/crear" element={<TeacherPageForm drawerWidth={drawerWidth}/>} />
          <Route path="/docentes/ver" element={<TeacherPageList drawerWidth={drawerWidth}/>} />
          <Route path="/estudiantes/crear" element={<StudentPageForm drawerWidth={drawerWidth}/>} />
          <Route path="/estudiantes/ver" element={<StudentPageList drawerWidth={drawerWidth}/>} />
          <Route path="/categorias/crear" element={<CategoryPageForm drawerWidth={drawerWidth}/>}/>
          <Route path="/categorias/ver" element={<CategoryPageForm drawerWidth={drawerWidth}/>}/>
          <Route path="/pagos/crear" element={<MethodPayPage drawerWidth={drawerWidth}/>}/>
        </Routes>
      </Box>
    </Box>
  );

});

export default AdminRoutes;
