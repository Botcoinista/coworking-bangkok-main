"use client"

import { usePathname, useSearchParams } from 'next/navigation';

 
import { GrLock } from 'react-icons/gr';
import { FaMedal, FaWifi } from 'react-icons/fa';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { CgCoffee } from 'react-icons/cg';
import { CgGym } from 'react-icons/cg';


import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
    {
        label: 'SAFTEYBOX',
        icon: GrLock,
        // description: 'This property has safteyboxes!',
      },
      {
        label: 'ACTIVITIES',
        icon: FaMedal,
        // description: 'This property has activities!',
      },
      {
        label: 'FOOD AVAILABLE',
        icon: TbToolsKitchen2,
        // description: 'This property has a kitchen!'
      },
      {
        label: 'FREE COOFEE',
        icon: CgCoffee,
        // description: 'This property has a coffee machine!'
      },
      {
        label: 'GYM',
        icon: CgGym,
        // description: 'This property has a gym!'
      },
      {
        label: 'WIFI',
        icon: FaWifi,
        // description: 'This property has a gym!'
      },
     
    ]    

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get("category")
    const pathname = usePathname()

    const isMainPage = pathname === "/"

    if (!isMainPage) {
        return null
    }

  return (
   
        <Container>
            <div className='
            bg-white
            rounded-tr-3xl
            rounded-bl-2xl
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            '
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>


      
  )
}

export default Categories