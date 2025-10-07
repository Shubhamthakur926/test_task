import React from 'react';
import { Button } from '../../component/ui/button';

import { Trophy, Activity, Gamepad2, Leaf } from 'lucide-react';
import { Avatar, AvatarFallback, } from '../../component/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../../component/ui/card';
import Header from '../header';
import Sidebar from '../side-bar';
import DashboardSidebar from './rightData';

const Dashboard: React.FC = () => {
    const leaderboardData = [
        { name: 'Umang Saini', points: 1240, rank: 1, initial: 'U' },
        { name: 'Thas Pendar', points: 1180, rank: 2, initial: 'T' },
        { name: 'Umang Soma', points: 1120, rank: 3, initial: 'U' },
    ];

    const upcomingEvents = [
        { title: 'Beginner Clinic & Serve Valley', date: '09/15', imagePlaceholder: 'https://placehold.co/48x48/6B21A8/ffffff/png?text=C' },
        { title: 'Social Mixer Evening', date: '09/22', imagePlaceholder: 'https://placehold.co/48x48/BE185D/ffffff/png?text=M' },
        { title: 'Monthly Club Tournament', date: '09/30', imagePlaceholder: 'https://placehold.co/48x48/F59E0B/ffffff/png?text=T' },
    ];

    const nearbyCourts = [
        { name: 'Nobles Baths & Tennis Club', distance: '1.2 mi' },
        { name: 'Delray Beach Tennis Center', distance: '2.5 mi' },
    ];

    return (
<div className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-purple-950 text-white flex">
            {/* Sidebar */}
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen">
                <Header />

                {/* Dashboard Content */}
                <main className="p-4 md:p-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 overflow-y-auto">
                    <div className="col-span-1 lg:col-span-8 space-y-4 md:space-y-6">
                        <Card className="bg-gradient-to-r from-gray-900/50 via-purple-900/20 to-pink-900/20 border-gray-800 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-green-500/10 to-yellow-500/10 opacity-50"></div>

                            <CardHeader className="relative pb-4">
                                <CardTitle className="text-white flex items-center relative z-10">
                                    <Activity className="h-5 w-5 mr-2 text-green-400" />
                                    Quick Actions
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="relative space-y-3 pt-0">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                    {/* Find Nearby Games */}
                                    <div className="w-full h-20 bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-purple-500/20 relative overflow-hidden group flex flex-col justify-center px-4 cursor-pointer rounded">
                                        <div className="flex flex-col items-start space-y-1 w-full">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-lg">🎯</span>
                                                <span className="font-medium">Find Nearby Games</span>
                                            </span>
                                            <span className="text-xs text-gray-400">Discover local courts</span>
                                        </div>
                                        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Find Skill Match */}
                                    <div className="w-full h-20 bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-purple-500/20 relative overflow-hidden group flex flex-col justify-center px-4 cursor-pointer rounded">
                                        <div className="flex flex-col items-start space-y-1 w-full">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-lg">⚡</span>
                                                <span className="font-medium">Find Skill Match</span>
                                            </span>
                                            <span className="text-xs text-gray-400">Beginner level</span>
                                        </div>
                                        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Play Virtually */}
                                    <div className="w-full h-20 bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-purple-500/20 relative overflow-hidden group flex flex-col justify-center px-4 cursor-pointer rounded">
                                        <div className="flex flex-col items-start space-y-1 w-full">
                                            <span className="flex items-center space-x-2">
                                                <span className="text-lg">🌐</span>
                                                <span className="font-medium">Play Virtually</span>
                                            </span>
                                            <span className="text-xs text-gray-400">Play from home</span>
                                        </div>
                                        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>


                        {/* Featured */}
                        <Card className="min-h-74 bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://placehold.co/800x400/3C096F/ffffff/png?text=PICKLEBALL+FUTURISTIC+GLOW')" }}></div>
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                            <CardContent className="relative p-4 md:p-6 space-y-4">
                                <div className="flex items-center space-x-2 text-purple-300 relative z-10">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm uppercase font-semibold">Popular</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center relative z-10">
                                    <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center p-4">
                                        <div className="w-32 h-32 bg-purple-500/30 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                                            <span className="text-5xl">🏓</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left space-y-4">
                                        <h3 className="text-3xl font-extrabold text-white mb-2">Ping Pong Match</h3>
                                        <p className="text-gray-300 text-sm">Challenge rivals in an intense virtual match! This high-speed event tests your reflexes and strategy. Only 2 spots left!</p>
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                            <div className="flex -space-x-2">
                                                <Avatar className="h-8 w-8 border-2 border-white/50 bg-yellow-500">
                                                    <AvatarFallback className="text-black text-xs">A</AvatarFallback>
                                                </Avatar>
                                                <Avatar className="h-8 w-8 border-2 border-white/50 bg-pink-500">
                                                    <AvatarFallback className="text-white text-xs">B</AvatarFallback>
                                                </Avatar>
                                                <Avatar className="h-8 w-8 border-2 border-white/50 bg-green-500">
                                                    <AvatarFallback className="text-white text-xs">C</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="bg-black/70 hover:bg-purple-700/70 text-purple-100 rounded-full px-4 py-1 text-xs font-semibold inline-flex items-center cursor-pointer select-none">
                                                <span className="mr-1">⭐</span> +18 Reviews
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* My Stats */}
                        <Card className="bg-[#1E1E1E] border-gray-800">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-white text-xl">My Stats</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                                    <div className="flex-1 w-full space-y-4">
                                        <div className="flex items-center space-x-4 bg-gray-900 rounded-xl p-3 border border-gray-700/50">
                                            <div className="p-2 rounded-full bg-gray-800">
                                                <Gamepad2 className="h-5 w-5 text-green-400" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-green-400">250</div>
                                                <div className="text-sm text-gray-400">Total Matches</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4 bg-gray-900 rounded-xl p-3 border border-gray-700/50">
                                            <div className="p-2 rounded-full bg-gray-800">
                                                <Trophy className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-purple-400">80</div>
                                                <div className="text-sm text-gray-400">Events Attended</div>
                                            </div>
                                        </div>

                                        <div className="hidden sm:flex items-center space-x-4 bg-gray-900 rounded-xl p-3 border border-gray-700/50">
                                            <div className="p-2 rounded-full bg-gray-800">
                                                <Leaf className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-yellow-400">10k</div>
                                                <div className="text-sm text-gray-400">Pickles Earned</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-44 h-44 flex-shrink-0 flex justify-center items-center relative p-4">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="absolute w-full h-full rounded-full bg-purple-500 opacity-5 blur-xl"></div>

                                            <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50" cy="50" r="45"
                                                    fill="none"
                                                    stroke="#3B008E"
                                                    strokeWidth="8"
                                                />
                                                <circle
                                                    cx="50" cy="50" r="45"
                                                    fill="none"
                                                    stroke="#A855F7"
                                                    strokeWidth="8"
                                                    strokeDasharray="282.7"
                                                    strokeDashoffset="0"
                                                    strokeLinecap="round"
                                                    className="transition-all duration-1000 drop-shadow-[0_0_8px_#A855F7]"
                                                />
                                            </svg>


                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.7)]"></div>

                                            <div className="absolute text-center">
                                                <div className="text-4xl font-extrabold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">100</div>
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-1 flex items-center space-x-1 bg-gray-900 rounded-full px-3 py-1 shadow-lg border border-gray-700">
                                            <Leaf className="h-4 w-4 text-yellow-400" />
                                            <span className="text-sm text-gray-300 font-semibold">Pickles</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex justify-center md:justify-end pt-4">
                                    <Button className="w-full md:w-auto bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-black rounded-lg font-bold">
                                        View Full Stats
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-span-1 lg:col-span-4 space-y-4 lg:space-y-6">
                        <DashboardSidebar
                            leaderboardData={leaderboardData}
                            upcomingEvents={upcomingEvents}
                            nearbyCourts={nearbyCourts}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;