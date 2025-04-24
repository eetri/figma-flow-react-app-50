
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample data for projects
const projectsData = [
  {
    id: "1",
    name: "Project Name I",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "approve",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"]
  },
  {
    id: "2",
    name: "Project Name A I",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "pending",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"]
  },
  {
    id: "3",
    name: "Project Name I",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "approve",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"]
  },
  {
    id: "4",
    name: "Project Name AA II",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "rejected",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"]
  },
  {
    id: "5",
    name: "Project Name I",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "approve",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf"]
  },
  {
    id: "6",
    name: "Project Name A I",
    date: "YYYY/MM/DD",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque",
    status: "pending",
    documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"]
  }
];

const AkhtiyarScreen = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProjects = projectsData.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-md p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">External Agency</h2>
        <Button onClick={() => navigate("/add-project")} className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 w-full"
          />
        </div>
        
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-32 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-32 bg-white">
              <SelectValue placeholder="Filters" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            description={project.description}
            status={project.status as "approve" | "pending" | "rejected"}
            documents={project.documents}
          />
        ))}
      </div>
    </div>
  );
};

export default AkhtiyarScreen;
