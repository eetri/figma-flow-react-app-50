
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const OpenDiscussionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");

  // This would typically come from an API call using the id
  const projectName = "Project name";
  const projectStatus = "pending";

  const getStatusBadge = () => {
    switch (projectStatus) {
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

  const handleSubmitComment = () => {
    console.log("Submitting comment:", comment);
    setComment("");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">{projectName}</h2>
          <p className="text-gray-600 text-sm">Discussion on Project Name</p>
        </div>
        {getStatusBadge()}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Start discussion</h3>
        
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Textarea
            placeholder="Ask your questions"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-0 min-h-48 focus-visible:ring-0"
          />
          
          <div className="p-3 border-t border-gray-200 bg-white flex justify-between items-center">
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">A</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">📎</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">🔗</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">📷</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">📊</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">😀</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">⚙️</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <span className="text-gray-500">🗑️</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSubmitComment}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenDiscussionPage;
