"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
});

interface Task {
  id: number;
  name: string;
  completed: boolean;
  startTime: string | null;
  endTime: string | null;
  deadline: string | null;
}

interface Section {
  name: string;
  tasks: Task[];
}

export default function Home() {
  const [sections, setSections] = useState<Section[]>([  
    { name: "Front-end", tasks: [
      { id: 1, name: "Học HTML", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 2, name: "Học CSS", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 3, name: "Học JavaScript", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 4, name: "Học React.js", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 5, name: "Học TypeScript", completed: false, startTime: "", endTime: null, deadline: null }
    ]},
    { name: "Back-end", tasks: [
      { id: 6, name: "Học Node.js", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 7, name: "Học Express.js", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 8, name: "Học NestJS", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 9, name: "Học Cơ sở dữ liệu (MySQL, MongoDB, PostgreSQL)", completed: false, startTime: "", endTime: null, deadline: null }
    ]},
    { name: "DevOps", tasks: [
      { id: 10, name: "Học Docker", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 11, name: "Học Kubernetes", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 12, name: "Học CI/CD", completed: false, startTime: "", endTime: null, deadline: null }
    ]},
    { name: "Git & GitHub", tasks: [
      { id: 13, name: "Học Git", completed: false, startTime: "", endTime: null, deadline: null },
      { id: 14, name: "Học GitHub", completed: false, startTime: "", endTime: null, deadline: null }
    ]}
  ]);

  useEffect(() => {
    document.title = "PROB's Dev Path";
  }, []);

  useEffect(() => {
    const storedSections = localStorage.getItem("sections");
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections));
  }, [sections]);

  const updateTaskField = (sectionName: string, id: number, field: keyof Task, value: string) => {
    setSections(sections.map(section =>
      section.name === sectionName
        ? { ...section, tasks: section.tasks.map(task => task.id === id ? { ...task, [field]: value } : task) }
        : section
    ));
  };

  const toggleTaskCompletion = (sectionName: string, id: number) => {
    setSections(sections.map(section =>
      section.name === sectionName
        ? { ...section, tasks: section.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed, endTime: !task.completed ? new Date().toISOString().split('T')[0] : null } : task
          ) }
        : section
    ));
  };

  return (
    <div className="min-h-screen bg-[url('/space-bg.jpg')] bg-cover bg-center bg-fixed text-white font-mono"> 
      <div className="p-6 max-w-3xl mx-auto bg-opacity-30 bg-black backdrop-blur-lg shadow-xl rounded-lg border border-blue-500"> 
        <h1 className={`text-3xl font-bold mb-6 text-center text-blue-400 flex items-center justify-center ${pixelFont.className}`}>🚀 PROB&apos;s Dev Path 🌌</h1>
        
        {sections.map(section => (
          <div key={section.name} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-yellow-300 border-b border-yellow-300 pb-1">{section.name}</h2>
            {section.tasks.map(task => (
              <Card key={task.id} className="mb-3 bg-opacity-30 bg-black backdrop-blur-lg border border-purple-500 shadow-lg shadow-purple-500/50"> 
                <CardContent className="flex items-center justify-between p-4"></CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
