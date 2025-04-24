
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  authorType: string;
  content: string;
  date: string;
  time: string;
  avatar: string;
  documents?: string[];
}

interface CommentSectionProps {
  comments: Comment[];
  projectId: string;
  showSorting?: boolean;
}

const CommentSection = ({ comments, projectId, showSorting = true }: CommentSectionProps) => {
  const [sortType, setSortType] = useState<"newest" | "oldest">("newest");

  const sortedComments = [...comments].sort((a, b) => {
    if (sortType === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <div className="mt-4">
      {showSorting && (
        <div className="flex justify-end mb-4">
          <div className="flex gap-2">
            <Button
              variant={sortType === "newest" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortType("newest")}
              className={sortType === "newest" ? "bg-white text-black border border-gray-200" : ""}
            >
              Newest
            </Button>
            <Button
              variant={sortType === "oldest" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortType("oldest")}
              className={sortType === "oldest" ? "bg-white text-black border border-gray-200" : ""}
            >
              Oldest
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <div key={comment.id} className="pb-6 border-b border-gray-200 last:border-0">
            <div className="flex items-center mb-2">
              <Avatar className="h-8 w-8 mr-3">
                <img src={comment.avatar} alt={comment.author} />
              </Avatar>
              <div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">{comment.author}</span>
                  <span className="text-sm text-gray-500 mr-2">on {comment.date} at {comment.time}</span>
                  {comment.authorType && (
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      comment.authorType === "Author" ? "bg-gray-200" : "bg-gray-100"
                    }`}>
                      {comment.authorType}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="pl-11">
              <p className="text-gray-800">{comment.content}</p>
              
              {comment.documents && comment.documents.length > 0 && (
                <div className="flex mt-3 gap-2">
                  {comment.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border border-gray-200 rounded-lg bg-white overflow-hidden">
        <textarea 
          className="w-full p-4 min-h-32 focus:outline-none" 
          placeholder="Write a reply"
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
            <Button variant="outline" className="ml-2">Comment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
