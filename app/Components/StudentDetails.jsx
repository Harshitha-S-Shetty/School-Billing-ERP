"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const StudentDetails = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="p-2">
      <div className="text-center mb-4">
        <div className="flex justify-center mb-2">
          <UserIcon className="h-16 w-16 text-gray-700 border-4 border-gray-800 rounded-full p-1" />
        </div>
        <Button className="bg-blue-600 text-white py-1 px-3 rounded-md">
          Upload Photo
        </Button>
      </div>

      <div className="text-lg font-bold mb-3 text-gray-800">Personal Details</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="studentname" className="text-base font-medium mb-1 text-gray-900">Student Name</Label>
          <Input
            id="studentname"
            type="text"
            placeholder="Enter student's name"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="dob" className="text-base font-medium mb-1 text-gray-900">DOB</Label>
          <Input
            id="dob"
            type="date"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="gender" className="text-base font-medium mb-1 text-gray-900">Gender</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col col-span-2">
          <Label htmlFor="address" className="text-base font-medium mb-1 text-gray-900">Address</Label>
          <Textarea
            id="address"
            placeholder="Enter address"
            required
            className="p-2 border-gray-300 rounded-md text-base resize-none"
          />
        </div>

        <div className="text-lg font-bold col-span-2 mt-1 mb-1 text-gray-800">Academic Details</div>
        <div className="flex flex-col">
          <Label htmlFor="grade" className="text-base font-medium mb-1 text-gray-900">Grade</Label>
          <Input
            id="grade"
            type="text"
            placeholder="Enter grade"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="section" className="text-base font-medium mb-1 text-gray-900">Section</Label>
          <Input
            id="section"
            type="text"
            placeholder="Enter section"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="rollNo" className="text-base font-medium mb-1 text-gray-900">Roll No</Label>
          <Input
            id="rollNo"
            type="text"
            placeholder="Enter roll number"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>

        <div className="text-lg font-bold col-span-2 mt-1 mb-1 text-gray-800">Parental Details</div>
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="parentName" className="text-base font-medium mb-1 text-gray-900">Parents / Guardian Name</Label>
          <Input
            id="parentName"
            type="text"
            placeholder="Enter parent/guardian name"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="contactNo" className="text-base font-medium mb-1 text-gray-900">Contact No</Label>
          <Input
            id="contactNo"
            type="text"
            placeholder="Enter contact number"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="email" className="text-base font-medium mb-1 text-gray-900">Email ID</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email ID"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="emergencyContact" className="text-base font-medium mb-1 text-gray-900">Emergency Contact</Label>
          <Input
            id="emergencyContact"
            type="text"
            placeholder="Enter emergency contact"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>

        <div className="text-lg font-bold col-span-2 mt-1 mb-1 text-gray-800">Medical Details</div>
        <div className="flex flex-col col-span-2">
          <Label htmlFor="medicalCondition" className="text-base font-medium mb-1 text-gray-900">Any Medical Condition / Allergies</Label>
          <Input
            id="medicalCondition"
            type="text"
            placeholder="Enter medical conditions or allergies"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>

        <div className="text-lg font-bold col-span-2 mt-1 mb-1 text-gray-800">Admission Details</div>
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="dateOfAdmission" className="text-base font-medium mb-1 text-gray-900">Date of Admission</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-full justify-start text-left font-normal bg-gray-200 border-gray-300 rounded-md"
              >
                <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="admissionNumber" className="text-base font-medium mb-1 text-gray-900">Admission Number</Label>
          <Input
            id="admissionNumber"
            type="text"
            placeholder="Enter admission number"
            required
            className="p-2 border-gray-300 rounded-md text-base"
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 mt-4 text-white py-2 rounded-md">
        Submit
      </Button>
    </div>
  );
};

export default StudentDetails;  