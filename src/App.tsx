
import './App.css'
import Experience from './components/exprience'
import Footer from './components/footer'
import HeroHeader from './components/heroheader'
import Navbar from './components/navbar'
import Projects from './components/projects'
import ServicesSection from './components/services'

function App() {
  const projects = [
    {
        title: 'Kudos Vault',
        liveUrl: 'https://kudos-vault.ankytt.tech',
        githubUrl: 'https://github.com/ankit-369/get-reviews',
        description:
            'A comprehensive testimonial management system that streamlines the process of collecting and showcasing customer reviews.',
        features: [
            'Testimonial Submission: Easily integrate a customizable form on websites for collecting customer reviews.',
            'Review Management: Intuitive dashboard for viewing, managing, and interacting with testimonials.',
            'Flexible Integration: Access testimonial data in JSON format for seamless integration into websites.',
        ],
        technologies: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'AWS S3', 'Tailwind CSS'],
    },
    {
        title: 'YouTube Layer',
        liveUrl: 'https://youtubelayear.ankytt.tech',
        githubUrl: 'https://github.com/ankit-369/Youtube_layer1',
        description:
            'A streamlined platform for managing and uploading edited videos directly to YouTube with collaboration features.',
        features: [
            'One-Click Upload: Upload edited videos directly to YouTube from the dashboard.',
            'Instant Preview: Preview videos with titles and descriptions without downloading.',
            'Collaboration Code: Share a unique code for editors to manage and track video edits.',
            "Editor's Dashboard: Simple interface for editors to view and submit videos.",
            'Secure and Fast: Ensure secure management and rapid uploads for seamless collaboration.',
        ],
        technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    },
];
  return (
    <>
      <Navbar/>
      <HeroHeader/>
      <Experience/>
      <Projects projects={projects}/>
      <ServicesSection/>
      <Footer/>
    </>
  )
}

export default App
