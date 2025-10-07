import { MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "../../component/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../../component/ui/card";

interface LeaderboardItem {
  rank: number;
  name: string;
  initial: string;
  points: number;
}

interface EventItem {
  title: string;
  date: string;
  imagePlaceholder: string;
}

interface CourtItem {
  name: string;
  distance: string;
}

interface DashboardSidebarProps {
  leaderboardData: LeaderboardItem[];
  upcomingEvents: EventItem[];
  nearbyCourts: CourtItem[];
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  leaderboardData,
  upcomingEvents,
  nearbyCourts,
}) => {
  return (
    <div className="col-span-1 lg:col-span-4 space-y-4 lg:space-y-6">

      {/* Weekly Leaderboard */}
      <Card className="bg-[#1E1E1E] border-gray-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center justify-between text-xl">
            Weekly Leaderboard
            <div className="h-8 px-3 text-xs text-purple-400 hover:bg-gray-900 cursor-pointer flex items-center justify-center rounded">
              View All
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leaderboardData.map((item) => (
            <div
              key={item.rank}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <span
                className={`text-lg font-extrabold w-6 text-center ${
                  item.rank === 1
                    ? "text-yellow-400"
                    : item.rank === 2
                    ? "text-gray-400"
                    : "text-orange-400"
                }`}
              >
                {item.rank}
              </span>
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-purple-900 text-purple-300 text-sm">
                  {item.initial}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 font-light">Ping Pong</p>
              </div>
              <span className="text-sm font-bold text-white whitespace-nowrap bg-purple-900/50 px-2 py-0.5 rounded-full">
                {item.points} pts
              </span>
            </div>
          ))}

          <div className="w-full bg-gray-800 hover:bg-gray-700 text-purple-400 border border-purple-900/50 mt-2 px-4 py-2 text-center rounded cursor-pointer">
            View Leaderboards
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="bg-[#1E1E1E] border-gray-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center justify-between text-xl">
            Upcoming Events
            <div className="h-8 px-3 text-xs text-green-400 hover:bg-gray-900 cursor-pointer flex items-center justify-center rounded">
              See More
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src={item.imagePlaceholder}
                  alt={item.title}
                  className="w-full h-full rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/48x48/1F2937/ffffff?text=E";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <div className="h-7 w-7 rounded-full flex-shrink-0 bg-purple-600/50 hover:bg-purple-600 cursor-pointer flex items-center justify-center">
                <span className="text-sm text-white font-bold">+</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Nearby Courts */}
      <Card className="bg-[#1E1E1E] border-gray-800">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center justify-between text-xl">
            Nearby Courts
            <div className="h-8 px-3 text-xs text-yellow-400 hover:bg-gray-900 cursor-pointer flex items-center justify-center rounded">
              Find More
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {nearbyCourts.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-900/50 mr-3">
                <MapPin className="h-4 w-4 text-purple-300" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white truncate">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.distance}</p>
              </div>
              <div className="h-7 w-7 rounded-full ml-2 flex-shrink-0 bg-gray-800 hover:bg-gray-700 cursor-pointer flex items-center justify-center">
                <MapPin className="h-4 w-4 text-green-400" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
};

export default DashboardSidebar;
