import { Avatar, Container, Form } from "./styles";
import { AiOutlineArrowLeft, AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineCamera } from 'react-icons/ai'

import { Input } from '../../components/Input'

export function Profile() {
    return (
        <Container>
            <header>                
                <AiOutlineArrowLeft />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/nicholasvp.png" alt="" />

                    <label htmlFor="avatar">
                        <AiOutlineCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input />
                <Input />
                <Input />
            </Form>
        </Container>
    )
}