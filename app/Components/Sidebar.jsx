"use client";
import { useState } from "react";
import {
  DollarSign,
  Users,
  BookOpen,
  Settings,
  Home,
  User,
  LogOut,
  ReceiptText,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: ReceiptText, label: "Fees" },
    { icon: DollarSign, label: "Finances" },
    { icon: Users, label: "Students" },
    { icon: BookOpen, label: "Courses" },
    { icon: Settings, label: "Settings" },
    { icon: User, label: "Account" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50 w-full flex justify-end items-center px-4 pr-8">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white shadow-md text-gray-800 fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-center h-24 bg-gradient-to-r from-blue-600 to-blue-400">
          <h1 className="text-2xl font-bold text-white">Millat School</h1>
        </div>
        <nav className="flex-1 mt-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`flex items-center w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                item.active
                  ? "bg-blue-100 text-blue-600 font-medium hover:bg-blue-100"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  item.active ? "text-blue-600" : "text-gray-400"
                }`}
              />
              {item.label}
            </Button>
          ))}
        </nav>
        <div className="border-t border-gray-200 mt-4 pt-4 px-4">
          <Button
            variant="ghost"
            className="flex items-center w-full py-5 mb-2 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-300"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
