import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

import { Container } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SigIn() {
    return (
        <Container>
            <div>
                <h1> Rocket Notes </h1>
                <p> Aplicação para salvar e gerenciar seus links úteis. </p>
                <h2>Faça seu login</h2>
                <div>
                    <Input 
                        icon={AiOutlineMail}
                        placeholder="Email"
                    />
                    <Input 
                        icon={AiOutlineLock}
                        placeholder="Senha"
                    />
                    <Button 
                        title="Entrar"
                    />
                </div>
            </div>
            
                <img src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="1" />
        </Container>
    )
}