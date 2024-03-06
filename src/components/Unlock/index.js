import {useState} from 'react'
import {BackgroundCon, Image, Description, ButtonCon} from './styledComponents'

const lockImg = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlockImg = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const toggleLock = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <BackgroundCon>
      <Image src={lock ? lockImg : unlockImg} alt="lock" />
      <Description>
        {lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Description>
      <ButtonCon onClick={toggleLock}>{lock ? 'Unlock' : 'Lock'}</ButtonCon>
    </BackgroundCon>
  )
}

export default Unlock
