import { Box } from '@mui/material';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <Box component="main" id="main">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </Box>
  );
}
