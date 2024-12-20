import { Pin, Users } from 'lucide-react'
import { cn } from "@/lib/utils"

interface GroupItemProps {
  name: string
  memberCount: number
  isPinned?: boolean
}

export function GroupItem({ name, memberCount, isPinned }: GroupItemProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-sm font-medium">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Users className="h-3 w-3" />
            {memberCount} members
          </div>
        </div>
      </div>
      {isPinned && (
        <Pin className="h-4 w-4 text-purple-500" />
      )}
    </div>
  )
}

