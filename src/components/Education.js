import React, { useState } from 'react';
import { Calendar, GraduationCap, School, BookOpen, Trophy, MapPin, ChevronRight, Star } from 'lucide-react';

const Education = ({educationRef, isLargeScreen}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const education = [
    {
      id: 'masters',
      type: 'Graduate',
      degree: 'Master of Science in Computer Science',
      institution: 'University of Massachusetts Amherst',
      location: 'Amherst, Massachusetts',
      date: 'Expected: May 2026',
      status: 'current',
      color: 'blue',
      courses: [
        'Advanced Algorithms',
        'Systems for Data Science',
        'Theory of Software Engineering'
      ]
    },
    {
      id: 'bachelors',
      type: 'Undergraduate',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Maulana Azad National Institute of Technology',
      location: 'Bhopal, India',
      date: 'Jul 2018 – May 2022',
      color: 'purple',
      achievements: [
        'CGPA: 9.23/10',
        'Rank: 2/210'
      ],
      courses: [
        'Data Structures',
        'DBMS',
        'Operating System',
        'Machine Learning',
        'Natural Language Processing',
        'Network Security'
      ]
    },
    {
      id: 'highschool',
      type: 'High School',
      degree: 'High School Diploma',
      institution: 'Billabong High International',
      location: 'India',
      color: 'green',
      date: '2018'
    }
  ];

  const getThemeColors = (color) => {
    const themes = {
      blue: {
        primary: 'bg-blue-500',
        light: 'bg-blue-50',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100',
        border: 'border-blue-500'
      },
      purple: {
        primary: 'bg-purple-500',
        light: 'bg-purple-50',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-100',
        border: 'border-purple-500'
      },
      green: {
        primary: 'bg-green-500',
        light: 'bg-green-50',
        text: 'text-green-600',
        hover: 'hover:bg-green-100',
        border: 'border-green-500'
      }
    };
    return themes[color];
  };

  const EducationCard = ({ edu }) => {
    const isActive = activeSection === edu.id;
    const isHovered = hoveredCard === edu.id;
    const theme = getThemeColors(edu.color);

    return (
      <div 
        className={`transform transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-102 shadow-lg' : 'scale-100'}
          ${isActive ? 'shadow-xl' : 'shadow-md hover:shadow-lg'}
          bg-white rounded-xl overflow-hidden`}
        onMouseEnter={() => setHoveredCard(edu.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div
          className={`border-l-4 ${theme.border} p-4 md:p-6 cursor-pointer
            transition-colors duration-300`}
          onClick={() => setActiveSection(isActive ? null : edu.id)}
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {edu.status === 'current' && (
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full
                    animate-pulse">
                    Current
                  </span>
                )}
                <span className={`text-sm flex items-center ${theme.text}`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  {edu.date}
                </span>
              </div>
              <h3 className={`text-lg md:text-xl font-bold ${theme.text} transition-colors duration-300`}>
                {edu.degree}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="flex items-center">
                  <School className={`w-5 h-5 ${theme.text} mr-2`} />
                  <span className="font-semibold">{edu.institution}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {edu.location}
                </div>
              </div>
            </div>
            <ChevronRight 
              className={`w-6 h-6 transition-transform duration-500 ease-in-out
                ${isActive ? 'rotate-90' : 'rotate-0'} ${theme.text}`}
            />
          </div>

          {/* Expanded Content */}
          {isActive && (
            <div className="mt-6 space-y-6 animate-fadeIn">
              {edu.achievements && (
                <div className="space-y-3">
                  <h4 className={`font-semibold flex items-center ${theme.text}`}>
                    <Trophy className="w-4 h-4 mr-2" />
                    Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`flex items-center space-x-2 p-2 rounded-lg
                          ${theme.light} ${theme.hover} transition-colors duration-300`}
                      >
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.courses && (
                <div className="space-y-3">
                  <h4 className={`font-semibold flex items-center ${theme.text}`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm
                          ${theme.light} ${theme.text} ${theme.hover}
                          transition-all duration-300 transform hover:scale-105`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section ref={educationRef} className="bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText theme-transition py-20">

    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center
          animate-fadeIn">
          <GraduationCap className="w-8 h-8 mr-2 text-blue-500" />
          Education
        </h2>
        <p className="text-gray-600">Academic journey and achievements</p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="animate-slideIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <EducationCard edu={edu} />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div></section>
  );
};

export default Education;