"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export function ThreadCreator() {
  return (
    <div className="p-6 max-w-[800px]">
      <h1 className="text-xl font-semibold mb-6">Create New Thread</h1>
      
      <div className="space-y-6">
        {/* Initial Input */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-4">
            <Textarea
              placeholder="Enter your initial ideas or basic description..."
              className="min-h-[100px] border-0 focus-visible:ring-0 p-0 placeholder:text-gray-500"
            />
            <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
              Generate Content
            </Button>
          </div>
        </div>

        {/* Thread Content */}
        <div className="bg-white rounded-lg border">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium">Thread Content</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-purple-500 h-8">Edit</Button>
                <Button variant="ghost" className="text-purple-500 h-8">Preview</Button>
              </div>
            </div>
            <Textarea
              className="min-h-[200px] border-0 focus-visible:ring-0 p-0"
            />
          </div>
        </div>

        {/* Fine-Tuning */}
        <div className="bg-white rounded-lg border p-4">
          <h2 className="font-medium mb-4">Fine-Tuning</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Tone</Label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 min-w-[60px]">Formal</span>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500 min-w-[60px]">Casual</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Length</Label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 min-w-[60px]">Short</span>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500 min-w-[60px]">Long</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Depth</Label>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 min-w-[60px]">Surface</span>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500 min-w-[60px]">In-depth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thread Details */}
        <div className="bg-white rounded-lg border p-4">
          <h2 className="font-medium mb-4">Thread Details</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Tags</Label>
              <Input placeholder="Enter tags (comma-separated)" className="border-gray-200" />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="career">Career</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <Button variant="outline" className="text-gray-600">
            Save Draft
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600">
            Post Thread
          </Button>
        </div>
      </div>
    </div>
  )
}

