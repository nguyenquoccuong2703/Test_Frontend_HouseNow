import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [tab, setTab] = useState<'all' | 'pending' | 'completed'>('all')
  const getStatuses = (): ('pending' | 'completed')[] => {
    switch (tab) {
      case 'pending':
        return ['pending']
      case 'completed':
        return ['completed']
      case 'all':
      default:
        return ['pending', 'completed']
    }
  }
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="pb-[2px] text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-9">
          <Tabs.Root
            defaultValue="all"
            onValueChange={(value) =>
              setTab(value as 'all' | 'pending' | 'completed')
            }
            className="flex flex-col items-center"
          >
            <Tabs.List className="flex w-full justify-start space-x-2 pb-6">
              <Tabs.Trigger
                value="all"
                className={`rounded-lg border px-4 py-3 font-bold transition-colors ${
                  tab === 'all'
                    ? 'border-blue-500 rounded-full border bg-gray-700 px-6 py-2 text-sm font-bold text-white'
                    : 'rounded-full border-gray-300 bg-white px-5 py-2 text-sm font-bold text-gray-600'
                }`}
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className={`rounded-lg border px-[22.5px] py-3 font-bold transition-colors ${
                  tab === 'pending'
                    ? 'border-blue-500 rounded-full border bg-gray-700 px-6 py-2 text-sm font-bold text-white'
                    : 'rounded-full border-gray-300 bg-white px-6 py-2 text-sm font-bold text-gray-600'
                }`}
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className={`rounded-lg border px-4 py-3 font-bold transition-colors ${
                  tab === 'completed'
                    ? 'border-blue-500 rounded-full border bg-gray-700 px-6 py-2 text-sm font-bold text-white'
                    : 'rounded-full border-gray-300 bg-white px-6 py-2 text-sm font-bold text-gray-600'
                }`}
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="all" className="w-full pt-4">
              <TodoList statuses={getStatuses()} />
            </Tabs.Content>
            <Tabs.Content value="pending" className="w-full pt-4">
              <TodoList statuses={getStatuses()} />
            </Tabs.Content>
            <Tabs.Content value="completed" className="w-full pt-4">
              <TodoList statuses={getStatuses()} />
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
