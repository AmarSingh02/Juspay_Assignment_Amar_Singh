"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  MoreHorizontal,
  Settings,
  Bell,
  Search,
  Calendar,
  Clock,
  FileText,
  Zap,
  Target,
  Briefcase,
  Star,
} from "lucide-react"

// Sample data matching the image
const tableData = [
  {
    id: 1,
    avatar: { bg: "bg-red-500", text: "A" },
    name: "Anna Craig",
    status: "Landing Page",
    description: "Audience and research",
    date: "3 - Last year",
    time: "4:13 PM",
    icon: FileText,
  },
  {
    id: 2,
    avatar: { bg: "bg-blue-500", text: "A" },
    name: "Alex Martinez",
    status: "Dev Kickoff",
    description: "UI/UX Feedback",
    date: "5 Minutes ago",
    time: "4:13 PM",
    icon: Zap,
  },
  {
    id: 3,
    avatar: { bg: "bg-orange-500", text: "C" },
    name: "Chris Patel",
    status: "In Progress",
    description: "Frontend Development",
    date: "3 Minutes",
    time: "4:13 PM",
    icon: Target,
  },
  {
    id: 4,
    avatar: { bg: "bg-green-500", text: "S" },
    name: "Sarah Kim",
    status: "Art Direction",
    description: "Visual Brand Identity",
    date: "2 hrs - 10 hrs",
    time: "4:13 PM",
    icon: Star,
  },
  {
    id: 5,
    avatar: { bg: "bg-purple-500", text: "M" },
    name: "Mike Johnson",
    status: "Landing Page",
    description: "Wireframe and research",
    date: "3 - Last year",
    time: "4:13 PM",
    icon: FileText,
  },
  {
    id: 6,
    avatar: { bg: "bg-pink-500", text: "E" },
    name: "Emma Wilson",
    status: "Dev Kickoff",
    description: "Backend Architecture",
    date: "2 Minutes ago",
    time: "4:13 PM",
    icon: Briefcase,
  },
  {
    id: 7,
    avatar: { bg: "bg-indigo-500", text: "D" },
    name: "David Chen",
    status: "Dev Kickoff",
    description: "Database Design",
    date: "5 Minutes ago",
    time: "4:13 PM",
    icon: Zap,
  },
  {
    id: 8,
    avatar: { bg: "bg-teal-500", text: "L" },
    name: "Lisa Rodriguez",
    status: "Art Direction",
    description: "Brand Asset Creation",
    date: "3 Minutes",
    time: "4:13 PM",
    icon: Star,
  },
  {
    id: 9,
    avatar: { bg: "bg-yellow-500", text: "J" },
    name: "James Taylor",
    status: "In Progress",
    description: "Quality Assurance",
    date: "Yesterday",
    time: "4:13 PM",
    icon: Target,
  },
]

 const TableJson=()=> {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Open List</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border">
              <TableHead className="w-12"></TableHead>
              <TableHead className="font-semibold text-foreground">Name</TableHead>
              <TableHead className="font-semibold text-foreground">Status</TableHead>
              <TableHead className="font-semibold text-foreground">Description</TableHead>
              <TableHead className="font-semibold text-foreground">Date</TableHead>
              <TableHead className="font-semibold text-foreground">Time</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={row.id}
                className={`border-b border-border hover:bg-muted/50 transition-colors ${
                  index % 2 === 0 ? "bg-background" : "bg-muted/20"
                }`}
              >
                <TableCell className="py-4">
                  <Avatar className={`w-8 h-8 ${row.avatar.bg} flex items-center justify-center`}>
                    <span className="text-white font-semibold text-sm">{row.avatar.text}</span>
                  </Avatar>
                </TableCell>
                <TableCell className="py-4">
                  <div className="font-medium text-foreground">{row.name}</div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
                    <row.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{row.status}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <span className="text-muted-foreground">{row.description}</span>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="text-sm">{row.date}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-sm">{row.time}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-muted-foreground">Showing 1-9 of 9 results</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="default" size="sm" className="w-8 h-8">
              1
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8">
              2
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8">
              3
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8">
              4
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8">
              5
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TableJson