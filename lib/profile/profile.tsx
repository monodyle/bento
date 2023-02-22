import avatar from '#/assets/avatar.png'

export const Profile = () => {
  return (
    <header class="flex items-start gap-8 flex-col md:flex-row md:items-center">
      <div class="aspect-square rounded-full overflow-hidden relative w-32 h-32">
        <img src={avatar} class="block absolute inset-0 object-cover" />
      </div>
      <div class="flex-1">
        <h2 class="text-3xl font-semibold">hello from internet!</h2>
        <div class="text-zinc-500 xl:text-xl">
          <p>just a guy tends to be handsome gradually over the years…</p>
        </div>
      </div>
    </header>
  )
}
