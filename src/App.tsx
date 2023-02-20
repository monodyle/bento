import { Home } from '#/lib/home/home'
import { Profile } from '#/lib/profile/profile'
import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <main class='min-h-screen flex justify-center'>
      <div class='flex min-h-full w-full justify-center flex-1 max-w-[948px]'>
        <div class='flex h-full w-full max-w-[428px] xl:max-w-[948px] flex-1 flex-col p-6 py-12 xl:p-16 gap-12'>
          <Profile />
          <Home />
        </div>
      </div>
    </main>
  )
}

export default App
