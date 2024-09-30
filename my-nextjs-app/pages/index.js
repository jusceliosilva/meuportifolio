import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </Head>
      
      <h1>Um pouco sobre Juscelio Silva</h1>
      <p>
        Estudante do curso de Análise e Desenvolvimento de Sistemas, gosta bastante de 
        tecnologia e aprender novas tecnologias.
      </p>
      <br />
      <p>
        Tive atuação em atendimento ao cliente (Remoto e presencial) em um provedor de internet, 
        onde obtive experiências com vários casos de clientes com diversos perfis e reverter situação 
        para a satisfação do mesmo.
      </p>
      <p>
        Atualmente busco especialização em Front-End, utilizando CSS, Tailwind e Bootstrap como ferramentas 
        principais. Minha experiência com atendimento ao público me ajuda a criar sites/projetos de forma 
        que seja acessível a todas as classes.
      </p>
      <p>
        <a href="/conhecimentos">Clique aqui </a> e veja um pouco da minha evolução acadêmica e profissional
      </p>
    </>
  );
}