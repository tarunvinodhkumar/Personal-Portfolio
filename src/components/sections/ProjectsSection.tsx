import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Medical Assistant using Generative AI-Gemini',
      description: 'The Medical Assistant is a web application that leverages Google’s GenerativeAI to generate detailed and accurate medical responses. Users input medical queries, and the application provides responses adhering to specific guidelines for clarity, accuracy, and informativeness.',
      image: '/p1.jpg',
      tech: ['Flask', 'Python', 'HTML', 'Tailwind CSS','React.js', 'JavaScript', 'Bootstrap', 'Google Generative AI (Gemini)', 'MongoDB'],
      github: 'https://github.com/tarunvinodhkumar/Medical-Assistant-using-GenAI-Gemini-',
      
    },
    {
      title: 'PDF Summarizer',
      description: 'This project is a web-based PDF Summarizer application that processes PDF files and generates concise summaries using multiple Language Learning Models (LLMs). It allows users to upload PDF files and receive summaries from two distinct models, providing diverse perspectives and understanding.',
      image: '/p2.jpg',
      tech: [
        'Node.js',
        'Express.js',
        'React.js',
        'Tailwind CSS',
        'pdf-parse',
        'Hugging Face (BART)',
        'Google Generative AI (Gemini)',
        'JavaScript',
        'HTML',
        
      ],
      github: 'https://github.com/tarunvinodhkumar/PDF-Summarize',
    },
    {
      title: 'Food Monk - Food Delivery App',
      description: 'Food Monk is a MERN stack-based food delivery app that lets users browse restaurants, place orders, and track deliveries. It integrates the Google Maps API for real-time location tracking and offers a responsive UI with secure user authentication and admin management features.',
      image: '/p3.jpg',
      tech: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'Google Maps API',
        'Tailwind CSS',
        'JavaScript',
        'Bootstrap',
        'Redux'
        
      ],
      github: 'https://github.com/tarunvinodhkumar/FoodMonk-Food-Delivery-App-using-MERN-stack',

    },
    {
      title: 'Stock Analysis using Power BI',
      description: 'A comprehensive stock market analysis dashboard built using Power BI to visualize trends, performance, and financial metrics of selected companies. The project involves importing and transforming stock market data, creating interactive charts, KPIs, and filters to help users gain insights into historical prices, volume, volatility, and overall market behavior.',
      image: '/p4.jpg',
      tech: [
        'Power BI',
        'Power Query',
        'Excel',
        'Data Visualization',
        'Data Modeling'
      ],
      github: 'https://github.com/tarunvinodhkumar/Stock-Analysis-using-PowerBI',
      
    },
    {
      title: 'E-Commerce Data Analysis using Power BI',
      description: 'A dynamic Power BI dashboard built to analyze and visualize key metrics from an e-commerce business. The project provides insights into sales performance, customer behavior, product trends, and profitability by transforming raw transactional data into meaningful visualizations. It enables decision-makers to monitor KPIs, track revenue growth, and identify high-performing categories and regions.',
      image: '/p5.jpg',
      tech: [
        'Power BI',
        'Power Query',
        'Excel',
        'Data Visualization',
        'Data Modeling'
      ],
      github: 'https://github.com/tarunvinodhkumar/E-Commerce-Data-Analysis-using-Power-BI',
      
    },
    {
      title: 'Covid-19 in India Analysis Dashboard using Tableu',
      description: 'A dashboard built with Tableau to analyze and visualize the spread and impact of COVID-19 across India. The project leverages official datasets to present trends in confirmed cases, recoveries, deaths, testing rates, and regional comparisons. Users can explore time-series data, state-wise distributions, and demographic insights through visually engaging and dynamic charts.',
      image: '/p6.jpg',
      tech: [
        'Tableau',
        'Time-Series Analysis',
        'Excel',
        'Data Visualization',
        'Data Modeling'
      ],
      github: 'https://github.com/tarunvinodhkumar/Infection-Rate-Visualiztion-of-COVID-19-in-IND',
      
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card group overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;