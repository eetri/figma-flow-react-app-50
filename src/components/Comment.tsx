
import { Avatar } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface CommentProps {
  author: string;
  authorType?: "Author" | "Maintainer";
  content: string;
  date: Date;
  avatar: string;
  documents?: string[];
}

const Comment = ({ author, authorType, content, date, avatar, documents }: CommentProps) => {
  return (
    <div className="pb-6 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <img src={avatar} alt={author} className="h-full w-full object-cover" />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{author}</span>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(date, { addSuffix: true })}
            </span>
            {authorType && (
              <span className={`text-xs px-2 py-0.5 rounded ${
                authorType === "Author" 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-purple-50 text-purple-700 border border-purple-200"
              }`}>
                {authorType}
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-800 whitespace-pre-wrap">{content}</p>
          {documents && documents.length > 0 && (
            <div className="flex mt-3 gap-2">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{doc}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
