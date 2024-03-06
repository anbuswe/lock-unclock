import styled from 'styled-components'

export const BackgroundCon = styled.div`
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 200px;
`

export const Description = styled.p`
  font-family: 'roboto', sans-serif; /* Replace 'roboto' with your desired font */
  font-size: 1.25rem; /* Example using rem unit */
  color: #fff;
  font-weight: 400; /* Default font weight */
`

export const ButtonCon = styled.button`
  background-color: #06b6d4;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  margin-top: 50px;
`
