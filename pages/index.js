import React, {Fragment} from 'react'
import styled from 'styled-components'
import { Button} from 'grommet';
import { Notification } from 'grommet-icons';

const Title = styled.h1`
  font-size: 50px;
`

export default () => (
    <Fragment>
        <Button icon={<Notification />} onClick={() => {}} />
        <Title>
            My page
        </Title>
    </Fragment>
)