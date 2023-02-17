import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../home/components/navbar/Navbar";
import { NavbarRedes } from "../../home/components/navbar/NavbarRedes";
import { HomePage } from "../../home/pages/HomePage";
import NosotrosPage from "../../home/pages/NosotrosPage";
import CursosPage from "../../home/pages/CursosPage";
import CursoPage from "../../home/pages/CursoPage";
import AyudosP from "../../home/pages/AyudaPage";
import PreguntasPage from "../../home/pages/PreguntasPage";
import ContactoPage from "../../home/pages/ContactoPage";

const ClientRoutes = () => {
  return (
    <>
      <NavbarRedes />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/cursos/:tipos" element={<CursosPage />} />
        <Route path="/cursos/:tipos/:id" element={<CursoPage />} />
        <Route path="/ayudados" element={<AyudosP />} />
        <Route path="/preguntas" element={<PreguntasPage />} />
        <Route path="/contactos" element={<ContactoPage />} />
        <Route path="/terminos"></Route>
      </Routes>
    </>
  );
};

export default ClientRoutes;
