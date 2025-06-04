'use client'
import HeaderUserPage from '@/components/HeaderUserPage/HeaderUserPage'
import SideBarUser from '@/components/SideBarUser/SideBarUser'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import MainContent from '@/components/MainDisplayedContent/MainContent'

const UserMainPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedItem, setSelectedItem] = useState<string>("Home")

  useEffect(() => {
    const selectedFromParams = searchParams.get('selected')
    if (selectedFromParams) {
      setSelectedItem(selectedFromParams)
    }
  }, [searchParams])

  const handleSidebarClick = (item: string) => {
    setSelectedItem(item)
  
    router.push(`?selected=${item}`, { scroll: false })
  }

  return (
    <div className='flex flex-row w-full h-screen bg-[#FAFAFA]'>
      <div className="flex-shrink-0">
        <SideBarUser  
          onClick={handleSidebarClick} 
          selectedItem={selectedItem} 
        />
      </div>
      
      <div className="flex-1 h-full flex flex-col min-w-0">
        <div className="flex-shrink-0 py-2 px-4">
          {/* <HeaderUserPage
            Title="Welcome Back, Yassir!"
            subTitle="this is the Home Page!"
          /> */}
          <HeaderUserPage selectedItem={selectedItem}/>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 pb-4 custom-scrollbar">
          <MainContent selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  )
}

export default UserMainPage