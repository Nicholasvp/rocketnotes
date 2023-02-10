import { Avatar, Container, Form } from "./styles";
import { AiOutlineArrowLeft, AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineCamera } from 'react-icons/ai'
import { Link } from "react-router-dom";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/"> 
                <AiOutlineArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/nicholasvp.png" alt="" />

                    <label htmlFor="avatar">
                        <AiOutlineCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input 
                icon={ AiOutlineUser }
                value='Nicholas Pinheiro'
                type="text"
                />
                <Input 
                icon={ AiOutlineMail }
                value="nicholas@gmail.com"
                type="text"
                />
                <Input
                icon={AiOutlineLock}
                placeholder="Senha atual"
                type="password"
                />
                <Input
                icon={AiOutlineLock}
                placeholder="Nova senha"
                type="password"
                />

                <Button title="Salvar"/>
                
            </Form>
        </Container>
    )
}