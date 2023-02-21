import { Bento } from '../bento/bento'
import { Compartment } from '../bento/compartment'

import saigonese_coffee from '#/assets/works/saigonese-coffee.png'
import mavis_hub from '#/assets/works/mavis-hub.png'

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
      <Compartment>1</Compartment>
      <Compartment>2</Compartment>
    </Bento>
  )
}
