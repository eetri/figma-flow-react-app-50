
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  name: string;
  date: string;
  description: string;
  status: "approve" | "pending" | "rejected";
  documents: Array<string>;
}

const ProjectCard = ({ id, name, date, description, status, documents }: ProjectCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "approve":
        return (
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Approve
          </div>
        );
      case "pending":
        return (
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </div>
        );
      case "rejected":
        return (
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Rejected
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm mb-4 border border-gray-100">
      <div className="flex justify-between items-start mb-1">
        <Link to={`/project-detail/${id}`} className="text-xl font-semibold hover:underline">
          {name}
        </Link>
        {getStatusBadge()}
      </div>
      <div className="text-sm text-gray-500 mb-2">Date: {date}</div>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
            <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{doc}</span>
          </div>
        ))}
        {documents.length > 3 && (
          <div className="flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
            <span className="text-sm">+{documents.length - 3} more</span>
          </div>
        )}
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="secondary" 
          className="bg-gray-900 text-white hover:bg-gray-800"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = `/open-discussion/${id}`;
          }}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Discussion
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
