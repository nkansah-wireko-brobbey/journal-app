import { JournalEntry } from '@/components/journal-entry'
import JournalEntryDetails from '@/components/journal-entry-details'
import { JournalTopicsDock } from '@/components/journal-topics-dock'
import { Navbar } from '@/components/navbar'
import React from 'react'


const Home = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <JournalTopicsDock />
            <main className='flex-grow container mx-auto min-h-fit rounded-lg flex p-5 gap-4'>

                <aside className='max-w-[450px] flex flex-col items-center p-5'>
                    <JournalEntry />
                </aside>
                <main className='flex-grow p-5 flex'>                    
                        <JournalEntryDetails className={"flex-grow"} />
                </main>

            </main>
        </div>
    )
}

export default Home