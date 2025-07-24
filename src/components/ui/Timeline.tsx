import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

interface TimelineItem {
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  skills?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h3 className="text-3xl font-bold text-gradient mb-8">{title}</h3>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <ScrollReveal
              key={index}
              direction="left"
              delay={index * 0.1}
              className="relative"
            >
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 w-8 h-8 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-primary-foreground rounded-full"></div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 glass-card hover-lift">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-lg font-semibold text-primary">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: index * 0.1 + skillIndex * 0.05 + 0.5,
                              type: "spring"
                            }}
                            viewport={{ once: true }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;