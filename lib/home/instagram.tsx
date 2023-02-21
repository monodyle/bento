import car from '#/assets/instagram/car.jpg'
import cat from '#/assets/instagram/cat.jpg'
import starbuck from '#/assets/instagram/starbuck.jpg'
import { Bento } from '../bento/bento'
import { Compartment } from '../bento/compartment'
import { Icon } from '../bento/icon'
import { Icons } from '../icons/icons'

const images = [
  {
    href: 'https://www.instagram.com/p/Co1SKnOvK0E/',
    src: car,
  },
  {
    href: 'https://www.instagram.com/p/Cor1oE0PO2e/',
    src: cat,
  },
  {
    href: 'https://www.instagram.com/p/CokjsGVvhXu/',
    src: starbuck,
  },
]

export const Instagram = () => {
  return (
    <Bento title="I shot things...">
      <Compartment href="https://www.instagram.com/monodyle/">
        <Icon>
          <Icons.Instagram class="w-full h-full" />
        </Icon>
        <div class="mt-2 font-semibold">@monodyle</div>
        <span class="mt-auto bg-[#0095f6] text-white font-semibold flex-0 self-start px-3 py-1 rounded-md">
          Follow
        </span>
      </Compartment>
      {images.map(image => (
        <Compartment href={image.href} image={image.src} />
      ))}
    </Bento>
  )
}
