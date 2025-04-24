
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CommentSection from "@/components/CommentSection";

// Sample comments data
const commentsData = [
  {
    id: "1",
    author: "Ulopa",
    authorType: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    date: "Jan 17, 2024",
    time: "2:10 PM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    id: "2",
    author: "Qwerty",
    authorType: "Maintainer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Curabitur pretium incidunt lacus, nulla gravida orci a odio convallis. Fusce sed est sit amet ipsum interdum ullamcorper. Nam tincidunt, sapien nec congue porta, tortor risus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere. Proin fermentum magna sit amet mauris commodo quis imperdiet massa.",
    date: "Jan 17, 2024",
    time: "3:30 PM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
  },
  {
    id: "3",
    author: "Ulopa",
    authorType: "Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    date: "Jan 17, 2024",
    time: "3:45 PM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    id: "4",
    author: "Qwerty",
    authorType: "Maintainer",
    content: "Nam maximus libero nec lorem luctus, sit amet vulputate lectus tincidunt.",
    date: "Jan 17, 2024",
    time: "4:04 PM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
  },
  {
    id: "5",
    author: "Zxcvbn",
    authorType: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur interdum, tortor nec fermentum suscipit, metus libero tincidunt libero, eget convallis quam nisi non nisi. Integer ac mauris ut tortor tristique ullamcorper eget vel nulla. Morbi elementum auctor quam, ut varius nulla venenatis ac. Vivamus tincidunt, sapien nec dictum cursus, ligula risus venenatis nulla, eget feugiat arcu turpis non sapien.",
    date: "Jan 20, 2024",
    time: "9:38 AM",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe",
    documents: ["Doc.pdf"]
  }
];

const RecentDiscussions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 rounded-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-bold">Project name</h2>
            <p className="text-gray-600 text-sm">Discussion on Project Name</p>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Approve
          </div>
        </div>
        
        <CommentSection comments={commentsData} projectId="1" />
      </div>
    </div>
  );
};

export default RecentDiscussions;
