import React from 'react'
import styled from 'styled-components'
import LogoBox from '../../components/Card/Logo'
import IconModules from './FetchLogo'

const Album = ({items, activeIndex}) => {
  console.log(items)
  return (
    <Wrapper>
      { activeIndex === 0 ? (
        <>
        { Object.values(items).map((list) => Object.values(list).map(item => <LogoBox key={item} background="#fff" border src={IconModules[item]} width="70px" padding='15px'/>))}
        </>
      ) : (
        <>
        {
          Object.keys(items).length !==0 && items.map(item => {
          return (
            <LogoBox background="#fff" border src={IconModules[item]} width="70px" padding='15px'/>
          )
        })}
        </>
      )}
    </Wrapper>
  )
}

export default Album

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
