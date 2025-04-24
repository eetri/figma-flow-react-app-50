
import { useParams, useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data
const projectData = {
  id: "1",
  name: "Project name",
  date: "YYYY/MM/DD at 00:00 AM",
  status: "approve",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque,",
  program: "Backend Developer",
  startedDate: "YYYY/MM/DD",
  identificationNo: "B.No. 000XXX",
  deadlineDate: "YYYY/MM/DD",
  selectedContractor: "XYZ Company Pvt Ltd.",
  fullDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?`,
  documents: ["Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf", "Doc.pdf"],
  remarks: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae unde eaque, quia dolor reprehenderit dicta et praesentium libero sed molestias quae dolorum? Enim cupiditate explicabo impedit tempora, aliquam neque?`
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // In a real application, you would fetch the project data based on the ID
  const project = projectData;

  const getStatusBadge = (status: string) => {
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
    <div>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-sm text-gray-500">Date: {project.date}</p>
          </div>
          {getStatusBadge(project.status)}
        </div>
        
        <p className="text-gray-700 mt-4">{project.description}</p>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Information</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex">
              <dt className="font-medium w-40">Program</dt>
              <dd>: {project.program}</dd>
            </div>
            <div className="flex">
              <dt className="font-medium w-40">Started Date</dt>
              <dd>: {project.startedDate}</dd>
            </div>
            <div className="flex">
              <dt className="font-medium w-40">Identification No.</dt>
              <dd>: {project.identificationNo}</dd>
            </div>
            <div className="flex">
              <dt className="font-medium w-40">Deadline Date</dt>
              <dd>: {project.deadlineDate}</dd>
            </div>
          </dl>
          <div className="flex mt-2">
            <dt className="font-medium w-40">Selected Contractor:</dt>
            <dd>{project.selectedContractor}</dd>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Description:</h2>
          <p className="text-gray-700 whitespace-pre-line">{project.fullDescription}</p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Documents Required:</h2>
          <div className="flex flex-wrap gap-2">
            {project.documents.map((doc, index) => (
              <div key={index} className="flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
                <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <Button 
              variant="secondary" 
              className="bg-gray-900 text-white hover:bg-gray-800"
              onClick={() => navigate(`/open-discussion/${id}`)}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Discussion
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Remarks:</h2>
        <p className="text-gray-700 whitespace-pre-line">{project.remarks}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
