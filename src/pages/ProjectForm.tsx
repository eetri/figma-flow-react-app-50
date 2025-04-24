import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProjectForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    program: "",
    startedDay: "",
    startedMonth: "",
    startedYear: "",
    deadlineDay: "",
    deadlineMonth: "",
    deadlineYear: "",
    identificationNo: "",
    selectedContractor: "",
    description: "",
    remarks: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Project submitted successfully!");
    navigate("/project-detail/new", { state: { status: "pending" } });
  };

  const handleReset = () => {
    setFormData({
      projectName: "",
      projectDescription: "",
      program: "",
      startedDay: "",
      startedMonth: "",
      startedYear: "",
      deadlineDay: "",
      deadlineMonth: "",
      deadlineYear: "",
      identificationNo: "",
      selectedContractor: "",
      description: "",
      remarks: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Project Description Section */}
        <div className="bg-gray-50 p-6 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Project description</h2>
          
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-sm font-medium mb-1">Project Name</label>
            <Input
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Text Limit 100 characters only</p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-sm font-medium mb-1">One line description about Project</label>
            <Input
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Text Limit 200 character only</p>
          </div>
        </div>

        {/* Important Information Section */}
        <div className="bg-gray-50 p-6 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Important Information</h2>
          
          <div className="mb-4">
            <label htmlFor="program" className="block text-sm font-medium mb-1">Program</label>
            <Input
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Started Date</label>
              <div className="flex gap-2">
                <Select onValueChange={(value) => handleSelectChange("startedDay", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="DD" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <SelectItem key={day} value={day.toString().padStart(2, '0')}>
                        {day.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select onValueChange={(value) => handleSelectChange("startedMonth", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select onValueChange={(value) => handleSelectChange("startedYear", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Deadline Date</label>
              <div className="flex gap-2">
                <Select onValueChange={(value) => handleSelectChange("deadlineDay", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="DD" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <SelectItem key={day} value={day.toString().padStart(2, '0')}>
                        {day.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select onValueChange={(value) => handleSelectChange("deadlineMonth", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select onValueChange={(value) => handleSelectChange("deadlineYear", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="identificationNo" className="block text-sm font-medium mb-1">Identification No</label>
            <Input
              id="identificationNo"
              name="identificationNo"
              value={formData.identificationNo}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="selectedContractor" className="block text-sm font-medium mb-1">Selected Contractor</label>
            <Input
              id="selectedContractor"
              name="selectedContractor"
              value={formData.selectedContractor}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gray-50 p-6 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full min-h-32"
            />
            <p className="text-xs text-gray-500 mt-1">Word Limit 600 character</p>
          </div>
        </div>

        {/* Upload Required Document Section */}
        <div className="bg-gray-50 p-6 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Upload Required Document</h2>
          
          <div>
            <Button type="button" variant="default" className="bg-gray-900 text-white">
              Attach files
            </Button>
          </div>
        </div>

        {/* Remarks Section */}
        <div className="bg-gray-50 p-6 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Remarks</h2>
          
          <div className="mb-4">
            <label htmlFor="remarks" className="block text-sm font-medium mb-1">Remarks</label>
            <Textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full min-h-32"
            />
            <p className="text-xs text-gray-500 mt-1">Word Limit 400 character</p>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
