"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Video } from 'lucide-react'

const meetings = [
  { id: 1, name: 'Team Standup', date: '2023-06-05', time: '09:00', type: 'Google Meet' },
  { id: 2, name: 'Project Kickoff', date: '2023-06-06', time: '14:00', type: 'Google Meet' },
  { id: 3, name: 'Client Presentation', date: '2023-06-07', time: '11:00', type: 'Google Meet' },
  { id: 4, name: 'Sprint Planning', date: '2023-06-08', time: '10:00', type: 'Google Meet' },
  { id: 5, name: 'Design Review', date: '2023-06-09', time: '15:00', type: 'Google Meet' },
]

export function MeetingList() {
  const [expandedMeeting, setExpandedMeeting] = useState<number | null>(null)

  return (
    <ul className="space-y-4">
      {meetings.map((meeting) => (
        <motion.li 
          key={meeting.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpandedMeeting(expandedMeeting === meeting.id ? null : meeting.id)}>
            <div>
              <h3 className="font-semibold">{meeting.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{meeting.date}</span>
                <Clock className="w-4 h-4 ml-2 mr-1" />
                <span>{meeting.time}</span>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center">
              <Video className="w-4 h-4 mr-1" />
              {meeting.type}
            </Badge>
          </div>
          <AnimatePresence>
            {expandedMeeting === meeting.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-2"
              >
                <Button asChild className="w-full">
                  <a href={`https://meet.google.com/${meeting.id}`} target="_blank" rel="noopener noreferrer">
                    Join Google Meet
                  </a>
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">Edit</Button>
                  <Button variant="outline" className="flex-1">Cancel</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </ul>
  )
}

