import React from 'react';

const Card = ({ title, content }) => (
  <div className="max-w-[200px] p-4 mx-auto bg-white border border-gray-300 rounded-lg shadow-xl m-4 flex flex-col transition-transform hover:scale-105">
    <h2 className="font-bold mb-2 text-primary ">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
  </div>
);

const OSite2 = () => {
  const cardsData = [
    { title: 'Parte do quadro geral', content: '2' },
    { title: 'Capítulos do livro do estudante', content: '3. Dividindo pizzas. O preço do dinheiro. 5. A vovó mandou um abraço e um dinheirinho.' },
    { title: 'Atividades do projeto', content: '3. (Educador) Plano Didático Ativo, (Estudante) Plano de Ação dos Estudantes e 4. Execução das atividades e Monitoramento.' },
    { title: 'Matemática e educação financeira', content: 'Operações com números racionais (fração), porcentagem, gráfico em pizza e função polinomial de 1o grau.' },
    { title: 'Recursos didáticos', content: 'Padlet.' },
  ];

  return (
    <div className='max-w-6xl mx-auto p-8 mb-4'>
        <div>
            <h1 className='text-4xl font-bold mb-4 text-slate-700'>O Site 2</h1>
            <p className='text-slate-700 pb-8'>Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site:</p>
        </div>
        
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </div>
    
    </div>
    
  );
};

export default OSite2;
