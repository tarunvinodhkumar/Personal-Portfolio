import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline';
import ScrollReveal from '../animations/ScrollReveal';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      organization: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture that improved system performance by 40%. Mentored junior developers and established coding best practices.',
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'GraphQL'],
    },
    {
      title: 'Full Stack Developer',
      organization: 'StartupXYZ',
      location: 'San Francisco, CA',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js. Built RESTful APIs and integrated third-party services. Collaborated with design team to create pixel-perfect user interfaces.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS3'],
    },
    {
      title: 'Frontend Developer',
      organization: 'Digital Agency Co.',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients. Focused on performance optimization and cross-browser compatibility. Worked closely with designers to implement creative solutions.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Sass', 'WordPress'],
    },
    {
      title: 'Junior Web Developer',
      organization: 'WebSolutions Ltd.',
      location: 'Austin, TX',
      duration: '2018 - 2019',
      description: 'Started my career building simple websites and learning modern web development practices. Gained experience in version control, testing, and agile development methodologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the companies I've had the pleasure to work with
            </p>
          </div>
        </ScrollReveal>

        <Timeline items={experiences} title="Career Journey" />
      </div>
    </section>
  );
};

export default ExperienceSection;