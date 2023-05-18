import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { FiClock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Writer, Tags } from "./styles.js";
import { Header } from "../../components/Header";

import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";



export function Details(){
  const [ data, setData ] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetMovie(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);

    }

    fetMovie();
  }, []);

  return(
    <Container>

      <Header />


      {     
        data && 
          <main>
              <Content>
                <div className="back">
                  <FiArrowLeft />
                  <ButtonText className="back" title="Voltar"/>
                </div>  

                <div className="title">
                  <h1>{data.title}</h1>
                  <Rating />
                </div>

                <Writer>
                  <img 
                    class="writer"
                    src="https://github.com/daiaanebarbosaf.png" 
                    alt="Foto do usuário" 
                  />

                  <p>Por Daiane Farias </p>
                  <FiClock/>
                  <p>23/05/22 às 08:00</p>
                </Writer>

                <Section>
                  <Tags>
                    <Tag title="Ficção Ciêntífica"/>
                    <Tag title="Drama"/>
                    <Tag title="Família"/>
                  </Tags>
              
                </Section>

                <p>
                  {data.descripton}
                </p>

              </Content>
          </main>
      }

    </Container> 
  );
}