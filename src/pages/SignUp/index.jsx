import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return (
        <Container>
            
            < Background />

            <Form>
                <h1> Rocket Notes </h1>
                <p> Aplicação para salvar e gerenciar seus links úteis. </p>
                <h2>Faça seu login</h2>
                
                    <Input 
                        icon={AiOutlineUser}
                        placeholder="Nome"
                        type="text"
                    />

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

                    <Button title="Cadastrar"/>

                    <a href="#">Volte para o Login</a>

            </Form>

        </Container>
    )
}