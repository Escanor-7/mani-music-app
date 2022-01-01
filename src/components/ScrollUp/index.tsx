import { Button } from "../Button"
import { Icon } from "../Icon"
import { Container } from "./ScrollUp.styles"


export const ScrollUp = () => {

  return (
    <Container>
      <Button
        variant='transparent-button'
      >
        <Icon
          name='up-arrow-icon'
          alt='up-arrow-icon'
          variant='scroll-up'
        />
      </Button>
    </Container>
  )
}