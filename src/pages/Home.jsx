import React from "react";
import recipe1 from "../assets/images/recipe-1.jpeg";
import recipe2 from "../assets/images/recipe-2.jpeg";
import recipe3 from "../assets/images/recipe-3.jpeg";
import recipe4 from "../assets/images/recipe-4.jpeg";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Recipes from "../components/recipes/Recipes";
import Search from "../components/search/Search";
import Recipe from "../components/recipe/Recipe";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Search />
        <Hero />
        <Recipes>
          <Recipe
            image={recipe1}
            title="Avocado and Tomato"
            kitchen="daves kitchen"
          />
          <Recipe
            image={recipe2}
            title="Avocado and Tomato 2"
            kitchen="daves kitchen"
          />
          <Recipe
            image={recipe3}
            title="Avocado and Tomato 3"
            kitchen="daves kitchen"
          />
          <Recipe image={recipe4} title="Tomato 4" kitchen="daves kitchen" />
        </Recipes>
      </Main>
      <Footer />
    </Container>
  );
}
