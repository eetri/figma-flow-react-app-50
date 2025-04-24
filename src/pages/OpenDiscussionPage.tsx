
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

type ProjectStatus = "approve" | "pending" | "rejected";

const OpenDiscussionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  const { toast } = useToast();

  // This would typically come from an API call using the id
  const projectName = "Project name";
  const projectStatus = "approve" as ProjectStatus;

  const handleSubmitComment = () => {
    if (!comment.trim()) {
      toast({
        title: "Comment cannot be empty",
        description: "Please enter a comment before submitting",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically submit the comment to an API
    console.log("Submitting comment:", comment, "for project:", id);
    
    // Show success message
    toast({
      title: "Comment submitted",
      description: "Your comment has been posted successfully",
    });
    
    // Clear the comment field
    setComment("");
  };

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "approve":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
            Approve
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">
            Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{projectName}</h2>
          <p className="text-gray-600 text-sm">Discussion on {projectName}</p>
        </div>
        {getStatusBadge(projectStatus)}
      </div>

      <div className="space-y-4">
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            Newest
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Oldest
          </Button>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Start discussion</h3>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <Textarea
              placeholder="Ask your questions"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border-0 min-h-[200px] focus-visible:ring-0 resize-none rounded-t-xl"
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
                  className="rounded-full" 
                  onClick={handleSubmitComment}
                >
                  Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenDiscussionPage;
