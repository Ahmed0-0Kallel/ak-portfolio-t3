import AboutMe from "../components/AboutMe";
import Container from "../components/ContainerBlock";
import Layout from "../components/Layout";


export default function About() {
  return <Container>
      <Layout className="flex flex-col grow items-center justify-center">
        <AboutMe />
      </Layout>
  </Container>;
}
