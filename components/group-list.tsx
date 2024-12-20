import { GroupItem } from "@/components/group-item"

export function GroupsList() {
  return (
    <div className="w-80 p-4 border-l">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium mb-3">Pinned Groups</h2>
          <div className="space-y-2">
            <GroupItem name="Pinned Group 1" memberCount={25} isPinned />
            <GroupItem name="Pinned Group 2" memberCount={25} isPinned />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium mb-3">All Groups</h2>
          <div className="space-y-2">
            <GroupItem name="Group 1" memberCount={25} />
            <GroupItem name="Group 2" memberCount={25} />
            <GroupItem name="Group 3" memberCount={25} />
            <GroupItem name="Group 4" memberCount={25} />
            <GroupItem name="Group 5" memberCount={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

