"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { UserPlus, DollarSign, Users, TrendingUp } from "lucide-react";
import { BarChartComponent } from "../Components/Barchart";
import { RadarChartComponent } from "../Components/RadarChart";

const StatCard = ({ title, value, change, icon: Icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">
        {title}
      </CardTitle>
      <Icon className="h-5 w-5 text-blue-500" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <Badge
        variant={change.includes("+") ? "success" : "destructive"}
        className="mt-1"
      >
        {change}
      </Badge>
    </CardContent>
  </Card>
);

const RecentStudents = () => {
  const courseNames = [
    'Mathematics',
    'Science',
    'English Language',
    'Social Studies',
    'Computer Science'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Enrollments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courseNames.map((courseName, i) => (
            <div key={i} className="flex justify-between items-center pb-2">
              <div className="text-sm font-medium w-1/3">Student {i + 1}</div>
              <div className="text-sm w-1/3">{courseName}</div>
              <Badge variant="secondary" className="text-sm">
                New
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const RecentTransactions = () => {
  const transactions = [
    {
      id: "001",
      date: "2024-08-01",
      student: "John Doe",
      amount: "$500",
      status: "Completed",
    },
    {
      id: "002",
      date: "2024-08-02",
      student: "Jane Smith",
      amount: "$300",
      status: "Pending",
    },
    {
      id: "003",
      date: "2024-08-03",
      student: "Alice Johnson",
      amount: "$450",
      status: "Completed",
    },
    {
      id: "004",
      date: "2024-08-04",
      student: "Bob Brown",
      amount: "$200",
      status: "Completed",
    },
    {
      id: "005",
      date: "2024-08-05",
      student: "Emily Davis",
      amount: "$600",
      status: "Pending",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Student</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-2 px-4 border-b">{transaction.id}</td>
                <td className="py-2 px-4 border-b">{transaction.date}</td>
                <td className="py-2 px-4 border-b">{transaction.student}</td>
                <td className="py-2 px-4 border-b">{transaction.amount}</td>
                <td className="py-2 px-4 border-b">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const stats = [
    {
      title: "Overall Revenue",
      value: "$67,893",
      change: "+12.3%",
      icon: DollarSign,
    },
    { title: "Active Student", value: "3,240", change: "+8.1%", icon: Users },
    {
      title: "Course Completion",
      value: "78.5%",
      change: "+5.4%",
      icon: TrendingUp,
    },
    {
      title: "New Enrollments",
      value: "642",
      change: "+22.4%",
      icon: UserPlus,
    },
  ];

  const revenueData = [
    { name: "Jan", total: 4000 },
    { name: "Feb", total: 4500 },
    { name: "Mar", total: 5500 },
    { name: "Apr", total: 4700 },
    { name: "May", total: 6000 },
    { name: "Jun", total: 5800 },
  ];

  const coursePerformanceData = [
    { name: "Web Dev", total: 95 },
    { name: "Data Sci", total: 88 },
    { name: "UX Design", total: 76 },
    { name: "Marketing", total: 82 },
    { name: "ML", total: 91 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-auto lg:pl-64">
        <main className="flex-1  overflow-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Dashboard Overview
            </h1>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            <div className="grid gap-6 mb-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>
                    Monthly revenue over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <BarChartComponent />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Lorem Ipsum</CardTitle>
                  <CardDescription>Lorem rates of top courses</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <RadarChartComponent />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 mb-8 lg:grid-cols-2">
              <RecentStudents />
              <RecentTransactions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
