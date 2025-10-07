import React from "react";
 import { Menu, Leaf, Trophy, Crown, Search, Bell, TextCursor } from "lucide-react";
import { Button } from "../../component/ui/button";
import { Input } from "../../component/ui/input";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 border-b border-gray-800 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <Button variant="ghost" className="md:hidden h-10 w-10 p-0">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex flex-col items-start space-y-1">
          <span className="text-lg md:text-xl font-bold text-white">Good morning, John</span>
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Leaf className="h-3 w-3 text-green-400" /> <span>0 Pickles</span>
            <span>•</span>
            <Trophy className="h-3 w-3 text-yellow-400" /> <span>0 Wins</span>
            <span>•</span>
            <Crown className="h-3 w-3 text-purple-400" /> <span>Beginner</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative w-full md:w-72">
          <Input placeholder="Search..." className="w-full bg-gray-800 border-gray-700 text-white pl-10 rounded-full" />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
          <Bell className="h-5 w-5 text-white" />
        </div>
        <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
          <TextCursor className="h-5 w-5 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
