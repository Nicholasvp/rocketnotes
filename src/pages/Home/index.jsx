import { Container, Brand, Menu, Search, Content, Newnote} from "./styles";

import { Link } from 'react-router-dom'

import { AiOutlinePlus} from 'react-icons/ai'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            <Header />
            <Menu>
                <li><ButtonText title="Todos" isActive /> </li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
            </Menu>

            <Search>
              <Input placeholder="Pesquise pelo título"/>  
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' }
                            
                        ]
                    }} />               
                </Section>
            </Content>
            <Newnote>
                <Link to="/new">
                <AiOutlinePlus />
                Criar nota
                </Link>
            </Newnote>

        </Container>
        
    ) 
}