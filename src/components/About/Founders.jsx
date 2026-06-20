import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
} from "lucide-react";

// ⚠️ UPDATE WITH ACTUAL DETAILS
const founders = [
  {
    name: "Gourav Ghoshi",
    role: "Founder & CTO",
    image: null,
    initials: "GG",
    bio: "Visionary entrepreneur and full-stack engineer with a passion for building scalable digital products. Leading the company's strategic direction and product innovation.",
    qualification: "M.Tech in Computer Science",
    experience: "8+ Years in Product Engineering",
    expertise: [
      "Product Strategy",
      "Full-Stack Development",
      "AI Solutions",
      "Leadership",
    ],
    location: "India",
    achievements: [
      "Built & scaled 5+ SaaS products",
      "Led teams of 20+ engineers",
      "Featured in Tech Magazine 2024",
    ],
    social: {
      linkedin: "https://linkedin.com/in/gouravghoshi",
      twitter: "https://twitter.com/gouravghoshi",
      github: "https://github.com/gouravghoshi55",
      email: "gourav@colonycodeworks.com",
    },
    gradient: "from-honey to-orange-500",
    cardBorder: "hover:border-honey/40",
  },
  {
    name: "Priyansh Singhai",
    role: "Founder & CEO",
    image: null,
    initials: "PS",
    bio: "Technology leader specializing in cloud architecture, AI/ML systems, and engineering excellence. Driving technical innovation and engineering culture.",
    qualification: "Master of business administration in Technology Management",
    institution: "National Institute of Technology",
    experience: "7+ Years in Tech Architecture",
    expertise: ["Cloud Architecture", "AI/ML", "DevOps", "System Design"],
    location: "India",
    achievements: [
      "AWS Certified Solutions Architect",
      "Published 10+ tech articles",
      "Speaker at DevCon 2024",
    ],
    social: {
      linkedin: "https://linkedin.com/in/cofounder",
      twitter: "https://twitter.com/cofounder",
      github: "https://github.com/cofounder",
      email: "cofounder@colonycodeworks.com",
    },
    gradient: "from-blue-500 to-purple-500",
    cardBorder: "hover:border-blue-500/40",
  },
];

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 glass-card border border-white/10 hover:border-honey/40 rounded-xl flex items-center justify-center text-gray-400 hover:text-honey transition-all"
    aria-label={label}
  >
    <Icon size={16} />
  </motion.a>
);

const Founders = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">
              👥 Leadership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The minds behind Colony Code Works — passionate about building
            products that make a difference.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className={`group glass-card border border-white/10 ${founder.cardBorder} rounded-3xl p-8 relative overflow-hidden transition-all duration-500`}
            >
              {/* Background glow */}
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${founder.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-28 h-28 rounded-2xl object-cover border-2 border-honey/30"
                      />
                    ) : (
                      <div
                        className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-4xl font-display font-black text-white shadow-lg`}
                      >
                        {founder.initials}
                      </div>
                    )}
                    {/* Status dot */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-dark rounded-full" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {founder.name}
                    </h3>
                    <p
                      className={`bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent font-semibold mb-3`}
                    >
                      {founder.role}
                    </p>

                    <div className="flex items-center gap-2 justify-center sm:justify-start text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>{founder.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {founder.bio}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-honey/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={16} className="text-honey" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {founder.qualification}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {founder.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-honey/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase size={16} className="text-honey" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {founder.experience}
                      </p>
                      <p className="text-gray-500 text-xs">
                        Industry Experience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-semibold">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs glass-card border border-white/10 px-3 py-1.5 rounded-full text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-semibold flex items-center gap-1">
                    <Award size={12} /> Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {founder.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-honey rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 my-6" />

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">Connect with me</p>
                  <div className="flex gap-2">
                    <SocialLink
                      icon={Linkedin}
                      href={founder.social.linkedin}
                      label="LinkedIn"
                    />
                    <SocialLink
                      icon={Twitter}
                      href={founder.social.twitter}
                      label="Twitter"
                    />
                    <SocialLink
                      icon={Github}
                      href={founder.social.github}
                      label="GitHub"
                    />
                    <SocialLink
                      icon={Mail}
                      href={`mailto:${founder.social.email}`}
                      label="Email"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="glass-card border border-honey/20 rounded-3xl p-8 relative">
            <div className="text-6xl mb-4">🐝</div>
            <blockquote className="text-xl md:text-2xl text-white font-display italic mb-4">
              "Like a bee colony, our strength lies in collaboration. Every team
              member is essential to building something extraordinary."
            </blockquote>
            <p className="text-honey font-semibold">— Colony Code Works Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
