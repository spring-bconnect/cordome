import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import NavigationItem from './navigation-item'
import { navigationMenuItems } from './navigation-menus'

const NavigationSidebar = () => {
  return (
    <div className='space-y-4 flex flex-col items-center h-full 
        text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3'>
          <ScrollArea className="flex-1 w-full">
                {navigationMenuItems.map((sideMenu) => (
                    <div key={sideMenu.id} className="mb-4">
                        <NavigationItem id={sideMenu.path} name={sideMenu.title} path={sideMenu.path} />
                    </div>
                ))}
            </ScrollArea>
        </div>
  )
}

export default NavigationSidebar