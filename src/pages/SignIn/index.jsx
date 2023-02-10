import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
    return (
        <Container>
            
            <Form>
                <h1> Rocket Notes </h1>
                <p> Aplicação para salvar e gerenciar seus links úteis. </p>
                <h2>Faça seu login</h2>
                
                    <Input 
                        icon={AiOutlineMail}
                        placeholder="Email"
                        type="text"
                    />
                    <Input 
                        icon={AiOutlineLock}
                        placeholder="Senha"
                        type="password"
                    />

                    <Button title="Entrar"/>

                    <Link to="/register">
                        Criar conta
                    </Link>

            </Form>

            < Background />

        </Container>
    )
}