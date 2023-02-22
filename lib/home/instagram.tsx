import car_jpg from '#/assets/instagram/car.jpg'
import car_webp from '#/assets/instagram/car.webp'
import cat_jpg from '#/assets/instagram/cat.jpg'
import cat_webp from '#/assets/instagram/cat.webp'
import starbuck_jpg from '#/assets/instagram/starbuck.jpg'
import starbuck_webp from '#/assets/instagram/starbuck.webp'

import { Bento } from '../bento/bento'
import { Compartment } from '../bento/compartment'
import { Icon } from '../bento/icon'
import { Icons } from '../icons/icons'
import { ImageSet } from '../picture/picture'

type InstagramImage = {
  href: string
  src: ImageSet
}

const images: Array<InstagramImage> = [
  {
    href: 'https://www.instagram.com/p/Co1SKnOvK0E/',
    src: { jpg: car_jpg, webp: car_webp },
  },
  {
    href: 'https://www.instagram.com/p/Cor1oE0PO2e/',
    src: { jpg: cat_jpg, webp: cat_webp },
  },
  {
    href: 'https://www.instagram.com/p/CokjsGVvhXu/',
    src: { jpg: starbuck_jpg, webp: starbuck_webp },
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
