
import { AtomAnchor, AtomListItem } from '../../element'
import { css } from "@emotion/react"


const AtomListComponent = ({elemento, AtomListItemStyle}: any) => {

    
  return (
    <AtomListItem className='KUI-navbar-list'  css={AtomListItemStyle}>
    <AtomAnchor
      target={elemento.target ? '_blank' : ''}
      href={elemento.href}
    >
      {elemento.value}
    </AtomAnchor>
  </AtomListItem>
  )
}

export default AtomListComponent