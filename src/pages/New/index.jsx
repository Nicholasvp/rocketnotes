import { Container, Form } from './styles'

import { NoteItem } from '../../components/NoteItem'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                    <h1>Criar nota</h1>
                    <ButtonText title="voltar"/>
                    </header>

                    <Input 
                    placeholder="Título"
                    />

                    <TextArea
                    placeholder="Observações"
                    />   

                    <Section title="Links úteis"/>

                    <NoteItem 
                    value="https://rocketseat.com.br"
                    />
                    <NoteItem 
                    isNew={true}
                    placeholder="Novo link"
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem 
                            isNew={true}
                            placeholder="Novo marcador"
                            />
                        </div>
                    </Section>

                     <Button title="Salvar"/>               
                </Form>
            </main>
        </Container>
    )
}