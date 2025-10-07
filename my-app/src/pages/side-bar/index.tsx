import React from "react";
import {
  ChevronLeft,
  Gamepad2,
  Activity,
  Bell,
  Crown,
  Trophy,
  MapPin,
  Gift,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../component/ui/avatar";

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: <Activity className="h-5 w-5 mr-2" />, label: "Dashboard", active: true },
    { icon: <Bell className="h-5 w-5 mr-2" />, label: "Feeds" },
    { icon: <Crown className="h-5 w-5 mr-2" />, label: "Leaderboards" },
    { icon: <Trophy className="h-5 w-5 mr-2" />, label: "Matches" },
    { icon: <MapPin className="h-5 w-5 mr-2" />, label: "Courts" },
  ];

  const extraItems = [
    { icon: <Gift className="h-5 w-5 mr-2" />, label: "Rewards" },
  ];

  return (
    <div className="hidden lg:flex w-64 flex-col bg-[#101010] border-r border-gray-900/50">
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="h-6 w-6 text-purple-400" />
          <span className="text-xl font-bold tracking-tight">
            PICKLE<span className="text-purple-400">ZONE</span>
          </span>
        </div>
        <ChevronLeft className="h-5 w-5 text-gray-500 hover:text-white cursor-pointer" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto space-y-1">
        <p className="text-xs text-gray-500 uppercase mt-4 mb-2 px-3">Navigate</p>
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center h-12 px-3 rounded cursor-pointer ${
              item.active
                ? "bg-purple-500 text-white"
                : "bg-black text-gray-400 hover:text-white hover:bg-gray-900"
            }`}
          >
            {item.icon} {item.label}
          </div>
        ))}

        <p className="text-xs text-gray-500 uppercase mt-4 mb-2 px-3">Extras</p>
        {extraItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center h-12 px-3 rounded bg-black text-gray-400 hover:text-white hover:bg-gray-900 cursor-pointer"
          >
            {item.icon} {item.label}
          </div>
        ))}
      </nav>

      {/* Profile */}
      <div className="p-4 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-9 w-9 border-2 border-purple-500">
            <AvatarFallback className="bg-purple-900 text-purple-300 text-sm">
              J
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John</p>
            <p className="text-xs text-gray-500">Level B</p>
          </div>
        </div>
        <Settings className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
