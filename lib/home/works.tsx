import { Bento } from '../bento/bento'
import { Compartment } from '../bento/compartment'

import mavis_hub from '#/assets/works/mavis-hub.png'
import saigonese_coffee from '#/assets/works/saigonese-coffee.png'
import { Icon } from '../bento/icon'
import { Icons } from '../icons/icons'

export const Works = () => {
  return (
    <Bento title="Featured Works">
      <Compartment
        col={2}
        row={2}
        href="https://saigonese.cafe/"
        image={saigonese_coffee}
        label="saigonese.cafe"
      />
      <Compartment col={2} image={mavis_hub} label="Mavis Hub @ Axie Infinity" />
      <Compartment href="https://github.com/monodyle/">
        <Icon>
          <Icons.Github class="w-full h-full" />
        </Icon>
        <div class="mt-2 font-semibold">Monody Le</div>
        <span class="mt-auto bg-[#F6F8FA] text-black font-semibold flex-0 self-start px-3 py-1 rounded-md border border-solid border-zinc-200 hover:bg-[#f3f4f6]">
          Follow
        </span>
      </Compartment>
      <Compartment class="w-full">
        <div class="m-auto text-center text-sm text-zinc-400">Still updating...</div>
      </Compartment>
    </Bento>
  )
}
