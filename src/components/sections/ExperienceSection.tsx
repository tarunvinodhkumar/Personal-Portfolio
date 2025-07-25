import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline';
import ScrollReveal from '../animations/ScrollReveal';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'IT Developer',
      organization: 'Vosyn',
      location: 'Toronto, ON',
      duration: 'July 2025 - Present',
      description: 'Collaborate with a cross-functional team to develop scalable web applications at Vosyn. Contribute to the implementation of modular architecture patterns to enhance system performance and maintainability. Participate in code reviews and follow best practices to ensure clean, efficient, and reliable code.',
      skills: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'TypeScript',
        'Docker'
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      organization: 'The Intern Academy',
      location: 'Chennai, India',
      duration: 'June 2021 - November 2021',
      description: 'Contributed to various client-facing projects using React and Node.js. Assisted in building RESTful APIs and integrating external services. Worked closely with the design team to deliver responsive and visually consistent user interfaces.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS3'],
    },
    {
      title: 'Web Developer Intern',
      organization: 'The Sparks Foundation',
      location: 'Chennai, India',
      duration: 'January 2021 - June 2021',
      description: 'Worked on full-stack projects at The Sparks Foundation by building dynamic front-end interfaces and integrating back-end APIs. Focused on delivering responsive design, optimized performance, and functional user flows.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Tailwind CSS',
        'TypeScript'
      ],
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
            The journey so far and the amazing teams I’ve worked with.
            </p>
          </div>
        </ScrollReveal>

        <Timeline items={experiences} title="Career Journey" />
      </div>
    </section>
  );
};

export default ExperienceSection;