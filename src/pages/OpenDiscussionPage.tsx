
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Comment from "@/components/Comment";

// Sample data
const discussionData = {
  projectName: "Project Name",
  status: "approve" as const,
  comments: [
    {
      id: "1",
      author: "Ulopa",
      authorType: "Author" as const,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: new Date("2024-01-17T14:10:00"),
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    },
    {
      id: "2",
      author: "Qwerty",
      authorType: "Maintainer" as const,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: new Date("2024-01-17T15:30:00"),
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    }
  ]
};

const OpenDiscussionPage = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const [sortNewest, setSortNewest] = useState(true);

  const sortedComments = [...discussionData.comments].sort((a, b) => 
    sortNewest ? b.date.getTime() - a.date.getTime() : a.date.getTime() - b.date.getTime()
  );

  const handleSubmitComment = () => {
    if (!comment.trim()) {
      toast({
        title: "Comment cannot be empty",
        description: "Please enter a comment before submitting",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Comment submitted",
      description: "Your comment has been posted successfully",
    });
    
    setComment("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-2xl font-semibold">{discussionData.projectName}</h1>
            <p className="text-gray-600">Discussion on {discussionData.projectName}</p>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approve
          </Badge>
        </div>

        <div className="flex justify-end gap-2 my-6">
          <Button 
            variant={sortNewest ? "default" : "outline"} 
            size="sm" 
            className="rounded-full"
            onClick={() => setSortNewest(true)}
          >
            Newest
          </Button>
          <Button 
            variant={!sortNewest ? "default" : "outline"} 
            size="sm" 
            className="rounded-full"
            onClick={() => setSortNewest(false)}
          >
            Oldest
          </Button>
        </div>

        <div className="space-y-6 mb-6">
          {sortedComments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
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
                {["A", "📎", "🔗", "📷", "📊", "😀", "⚙️"].map((icon, index) => (
                  <Button key={index} size="icon" variant="ghost" className="rounded-full h-8 w-8">
                    <span className="text-gray-500">{icon}</span>
                  </Button>
                ))}
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
