import React from 'react'

const RootLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>

        <main>
            {children}
        </main>
    </div>
  )
}

export default RootLayout