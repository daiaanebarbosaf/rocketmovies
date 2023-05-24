import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

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

  const { user } = useAuth();

  useEffect(() => {
    async function fetMovie(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);

    }

    fetMovie();
  }, []);

  const navigate = useNavigate();
  
  function handleBack() {
		navigate(-1);
	}

  return(
    <Container>

      <Header />
      {     
        data && 
          <main>
              <Content>
                <div className="back">
                  <FiArrowLeft />
                  <ButtonText onClick={handleBack} className="back" title="Voltar" />
                </div>  

                <div className="title">
                  <h1>{data.title}</h1>
                  <Rating note={data.rating} noteEmpty/>
                </div>

                <Writer>
                  <img 
                    className="writer"
                    src="https://github.com/daiaanebarbosaf.png" 
                    alt={user.name}
                  />

                  <p>Por {user.name}</p>
                  <FiClock/>
                  <p>23/05/22 às 08:00</p>
                </Writer>

                <p>
                  {data.description}
                </p>

                { data.tags && 
                  <Section>
                    <Tags>
                      {
                        data.tags.map(tag => (
                          <Tag 
                            key={tag.id}
                            title={tag.name}
                          />
                        ))
                      }
                    </Tags>
                  </Section>
                }

              </Content>
          </main>
      }

    </Container> 
  );
}